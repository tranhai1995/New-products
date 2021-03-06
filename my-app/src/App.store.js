import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./App.saga";
import profileAct from "@zef/pages/profile/reducer";
import LoginAct from "@zef/pages/logins/actions";
import localeEN from "./pages/user/reducer";
import searchPrice from "@zef/pages/user/menu/reducer";
const rootReducer = combineReducers({
  profile: profileAct,
  LoginAct: LoginAct,
  localeEN: localeEN,
  searchPrice: searchPrice,
});

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: rootReducer,
  middleware: [
    ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
    sagaMiddleware,
  ],
});
sagaMiddleware.run(rootSaga);

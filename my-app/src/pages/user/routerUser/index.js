import { useCallback } from "react";
import { useHistory } from "react-router-dom";

const history = useHistory();

export const onclickHome = useCallback(() => {
  history.push(`/user/`);
}, []);

import { createAction } from "@reduxjs/toolkit";

export default {
  videoCall: createAction("video"),
  videoCallError: createAction("videoError"),
  videoCallSuccess: createAction("videoSuccess"),
};

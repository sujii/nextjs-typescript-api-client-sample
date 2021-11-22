import { AxiosError } from "axios";
import { Dispatch } from "redux";
import {
  setMaintenanceAction,
  setNeedVersionUpdateAction,
} from "../modules/serviceStatus";
import { ErrorCode, ModelError } from "../openapi/model";

export type TipstarApiError = AxiosError<ModelError>;

export const handleApiError = (dispatch: Dispatch) => {
  return (error: TipstarApiError) => {
    const code = error.response?.data.code;

    if (code === ErrorCode.Maintenance) {
      dispatch(setMaintenanceAction(true));
      return Promise.resolve();
    }
    dispatch(setMaintenanceAction(false));

    if (code === ErrorCode.NeedVersionUpdate) {
      dispatch(setNeedVersionUpdateAction(true));
      return Promise.resolve();
    }
    dispatch(setNeedVersionUpdateAction(false));

    return Promise.reject(error);
  };
};

export class TipstarNetworkError extends Error {
  constructor() {
    super("ネットワークエラー");
    this.name = new.target.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export const handleNetworkError = (error: TipstarApiError) => {
  if (error.message === "Network Error") {
    return Promise.resolve(new TipstarNetworkError());
  }

  return Promise.reject(error);
};

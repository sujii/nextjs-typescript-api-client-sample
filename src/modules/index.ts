import { combineReducers } from "redux";

import config, { configInitialState, IConfigState } from "./config";
import pages, { IPageState, pageInitialState } from "./pages";
import toast, { toastInitialState, IToastState } from "./toast";
import address, { addressInitialState, IadressState } from "./postalCode";

// combineReducers
export default combineReducers({
  address,
  config,
  pages,
  toast,
});

export const getInitialState = () => ({
  address: addressInitialState,
  config: configInitialState,
  pages: pageInitialState,
  toast: toastInitialState,
});

declare global {
  interface IReduxState {
    address: IadressState;
    config: IConfigState;
    pages: IPageState;
    toast: IToastState;
  }
}

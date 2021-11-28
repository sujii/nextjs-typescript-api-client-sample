import { Dispatch } from "redux";
import { createAction, handleActions } from "redux-actions";

export const configInitialState: IConfigState = {
  isServer: true,
  path: "",
};

// Actions
const SET_CONFIG = "app/config/SET_CONFIG";

export const SetConfigAction = createAction(SET_CONFIG);

// side effects
export const SetConfig = (isServer: boolean, path: string) => (
  dispatch: Dispatch
) => {
  dispatch(SetConfigAction({ isServer, path }));
};

// Reducer
export default handleActions(
  {
    [SET_CONFIG]: (state, action) => ({
      ...state,
      isServer: action.payload.isServer,
      path: action.payload.path,
    }),
  },
  configInitialState
);

export interface IConfigState {
  isServer: boolean;
  path: string;
}

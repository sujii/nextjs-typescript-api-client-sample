import { Dispatch } from "redux";
import { createAction, handleActions } from "redux-actions";
import AuthManager from "../manager/AuthManager";
import { HomeApi } from "../openapi/api/home-api";
import { HomeResponse } from "../openapi/model/home-response";
import { handleApiError } from "../utils/api";
import { notifyRollbar } from "../utils/rollbar";

export const homeInitialState: IHomeState = {
  home: undefined,
};

// Actions
const GET_HOME_REQUEST = "app/home/GET_HOME_REQUEST";
const GET_HOME_SUCCESS = "app/home/GET_HOME_SUCCESS";
const GET_HOME_FAILURE = "app/home/GET_HOME_FAILURE";

export const GetHomeRequestAction = createAction(GET_HOME_REQUEST);
export const GetHomeSuccessAction = createAction(GET_HOME_SUCCESS);
export const GetHomeFailureAction = createAction(GET_HOME_FAILURE);

// Side effects
export const GetHome = () => async (dispatch: Dispatch) => {
  dispatch(GetHomeRequestAction());
  try {
    const result = await new HomeApi(
      await AuthManager.getInstance().getConfigration()
    )
      .getHome()
      .catch(handleApiError(dispatch));

    if (!result) {
      return;
    }

    dispatch(GetHomeSuccessAction({ home: result.data }));
  } catch (e) {
    notifyRollbar(e);
    dispatch(GetHomeFailureAction());
  }
};

// Reducer
export default handleActions(
  {
    [GET_HOME_SUCCESS]: (state, action) => ({
      ...state,
      home: action.payload.home,
    }),
  },
  homeInitialState
);

export interface IHomeState {
  home: HomeResponse | undefined;
}

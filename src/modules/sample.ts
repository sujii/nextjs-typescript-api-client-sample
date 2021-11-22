import { Dispatch } from "redux";
import { createAction, handleActions } from "redux-actions";

export const sampleInitialState = {
  count: 0,
};

// Actions
const RESET = "app/counter/RESET";
const COUNTUP = "app/counter/COUNTUP";

export const ResetAction = createAction(RESET);
export const CountUpAction = createAction(COUNTUP);

// side effects
export const reset = () => (dispatch: Dispatch) => {
  dispatch(ResetAction());
};

export const countUp = () => (dispatch: Dispatch) => {
  dispatch(CountUpAction());
};

// Reducer
export default handleActions(
  {
    [RESET]: () => ({
      ...sampleInitialState,
    }),
    [COUNTUP]: (state) => ({
      ...state,
      count: state.count + 1,
    }),
  },
  sampleInitialState
);

export interface Counter {
  count: number;
}

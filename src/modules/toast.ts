import { createAction, handleActions } from "redux-actions";

export const toastInitialState: IToastState = {
  toast: [],
};

// Actions
const ADD_TOAST = "app/toast/ADD_TOAST";
const REMOVE_TOAST = "app/toast/REMOVE_TOAST";

export const AddToastAction = createAction<IToast>(ADD_TOAST);
export const RemoveToastAction = createAction(REMOVE_TOAST);

// Reducer
export default handleActions(
  {
    [ADD_TOAST]: (state, action: any) => {
      return {
        ...state,
        toast: state.toast.concat(action.payload),
      };
    },
    [REMOVE_TOAST]: (state) => {
      const _toast = Object.assign([], state.toast);
      return {
        ...state,
        toast: _toast.splice(1, _toast.length),
      };
    },
  },
  toastInitialState
);

export interface IToast {
  title: string;
  content: string;
  onClick?: () => void;
}

export interface IToastState {
  toast: IToast[];
}

import { createAction, handleActions } from "redux-actions";
// import { EventUIResponse } from "../openapi/model";

export type AddessFromPostalCodeState = {
  address?: string;
};

export const postalCodeInitialState: AddessFromPostalCodeState = {};

const SET_ADD_CODE = "app/postalCodeI/SET_ADD_CODE";
const CLEAR_ADD_CODE = "app/postalCodeI/CLEAR_ADD_CODE";

export const setPostalCodeAction = createAction<AddessFromPostalCodeState["address"]>(
  SET_ADD_CODE
);

export const clearPostalCodeAction = createAction<void>(CLEAR_ADD_CODE);

export default handleActions(
  {
    [SET_ADD_CODE]: (state, action) => {
      const address = action.payload as Parameters<typeof setPostalCodeAction>[0];

      return {
        ...state,
        address,
      };
    },
    [CLEAR_ADD_CODE]: (state) => {
      return {
        ...state,
        address: undefined,
      };
    },
  },
  postalCodeInitialState
);

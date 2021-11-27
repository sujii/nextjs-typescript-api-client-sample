import { Dispatch } from "redux";
import { createAction, handleActions } from "redux-actions";
import axios from "axios";
export type AddessFromPostalCodeState = {
  address?: string[];
};

const API_POSTALCODE_ENDPOINT = "https://zipcloud.ibsnet.co.jp/api";

export const addressInitialState: AddessFromPostalCodeState = {};

// Actions
const GET_ADDRESS_REQUEST = "app/postalCode/GET_ADDRESS_REQUEST";
const GET_ADDRESS_SUCCESS = "app/postalCode/GET_ADDRESS_SUCCESS";
const GET_ADDRESS_FAILURE = "app/postalCode/GET_ADDRESS_FAILURE";
const SET_ADDRESS = "app/postalCode/SET_ADD_CODE";
const CLEAR_ADDRESS = "app/postalCode/CLEAR_ADD_CODE";

export interface IadressState {
  address: object;
}

export const SetPostalCodeAction =
  createAction<AddessFromPostalCodeState["address"]>(SET_ADDRESS);

export const GetPostalCodeAction = createAction(GET_ADDRESS_REQUEST);

export const GetGAddressFromZipSuccessAction =
  createAction(GET_ADDRESS_SUCCESS);

export const ClearPostalCodeAction = createAction<void>(CLEAR_ADDRESS);

export const GetAddressFromZip =
  (zipCode: string | number) => async (dispatch: Dispatch) => {
    dispatch(GetPostalCodeAction());
    try {
      const result = await axios.get(
        API_POSTALCODE_ENDPOINT + "/search?zipcode=" + zipCode
      );
      if (!result) {
        return;
      }

      console.log("modules/postalCode ////////");
      console.dir(result.data);

      dispatch(GetGAddressFromZipSuccessAction({ address: result.data }));
    } catch (e) {
      console.error(e);
    }
  };

// Reducer
export default handleActions(
  {
    [SET_ADDRESS]: (state, action) => {
      const address = action.payload as Parameters<
        typeof SetPostalCodeAction
      >[0];

      return {
        ...state,
        address,
      };
    },
    [GET_ADDRESS_SUCCESS]: (state, action) => {
      const address = action.payload as Parameters<
        typeof SetPostalCodeAction
      >[0];

      return {
        ...state,
        address,
      };
    },
    // [CLEAR_ADDRESS]: (state) => {
    //   return {
    //     ...state,
    //     address: undefined,
    //   };
    // },
  },
  addressInitialState
);

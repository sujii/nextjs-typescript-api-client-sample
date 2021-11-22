import * as firebase from "firebase/app";
import { createAction, handleActions } from "redux-actions";

export const notificationInitialState: INotificationState = {
  userGroupTime: undefined,
  userGroupInvitationTime: undefined,
  userGroupMessageTime: undefined,
  userGroupMultiplayTime: undefined,
  friendRequestTime: undefined,
};

// Actions
const SET_TIMESTAMPS = "app/notification/SET_TIMESTAMPS";
const SET_RACE_RESULT = "app/notification/SET_RACE_RESULT";

export const SetTimestamps = createAction(SET_TIMESTAMPS);
export const SetRaceResult = createAction(SET_RACE_RESULT);

// side effects

// Reducer
export default handleActions(
  {
    [SET_TIMESTAMPS]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [SET_RACE_RESULT]: (state, action) => ({
      ...state,
      raceResult: action.payload.raceResult,
    }),
  },
  notificationInitialState
);

export interface INotificationState {
  userGroupTime?: number;
  userGroupInvitationTime?: number;
  userGroupMessageTime?: number;
  userGroupMultiplayTime?: number;
  friendRequestTime?: number;
  raceResult?: firebase.firestore.Timestamp;
}

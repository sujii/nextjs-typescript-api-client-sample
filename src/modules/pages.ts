import { createAction, handleActions } from "redux-actions";
import { VideoState } from "./video";

export const pageInitialState: IPageState = {
  tipstarRoomActiveTabIndex: 0,
  raceInfoActiveTabIndex: {},
  raceInfoDetailActiveTabIndex: {},
  pageVideoSize: {},
};

// Actions
const SET_TIPSTAR_ROOM_ACTIVE_TAB_INDEX =
  "app/page/SET_TIPSTAR_ROOM_ACTIVE_TAB_INDEX";
export const SetTipstarRoomActiveTabIndexAction = createAction<number>(
  SET_TIPSTAR_ROOM_ACTIVE_TAB_INDEX
);

const SET_RACE_INFO_ACTIVE_TAB_INDEX =
  "app/page/SET_RACE_INFO_ACTIVE_TAB_INDEX";
export const SetRaceInfoActiveTabIndexAction = createAction<{
  key: string;
  index: number;
}>(SET_RACE_INFO_ACTIVE_TAB_INDEX);

const SET_RACE_INFO_DETAIL_ACTIVE_TAB_INDEX =
  "app/page/SET_RACE_INFO_DETAIL_ACTIVE_TAB_INDEX";
export const SetRaceInfoDetailActiveTabIndexAction = createAction<{
  key: string;
  index: number;
}>(SET_RACE_INFO_DETAIL_ACTIVE_TAB_INDEX);

const SET_PAGE_VIDEO_SIZE = "app/page/SET_PAGE_VIDEO_SIZE";
export const SetPageVideoSizeAction = createAction<{
  pathname: string;
  videoSize: VideoState["videoSize"];
}>(SET_PAGE_VIDEO_SIZE);

// Reducer
export default handleActions(
  {
    [SET_TIPSTAR_ROOM_ACTIVE_TAB_INDEX]: (state, action) => {
      return {
        ...state,
        tipstarRoomActiveTabIndex: (action.payload as unknown) as number,
      };
    },
    [SET_RACE_INFO_ACTIVE_TAB_INDEX]: (state, action) => {
      const { key, index } = (action.payload as unknown) as {
        key: string;
        index: number;
      };
      return {
        ...state,
        raceInfoActiveTabIndex: {
          ...state.raceInfoActiveTabIndex,
          [key]: index,
        },
      };
    },
    [SET_RACE_INFO_DETAIL_ACTIVE_TAB_INDEX]: (state, action) => {
      const { key, index } = (action.payload as unknown) as {
        key: string;
        index: number;
      };
      return {
        ...state,
        raceInfoDetailActiveTabIndex: {
          ...state.raceInfoActiveTabIndex,
          [key]: index,
        },
      };
    },
    [SET_PAGE_VIDEO_SIZE]: (state, action) => {
      const { pathname, videoSize } = (action.payload as unknown) as {
        pathname: string;
        videoSize: VideoState["videoSize"];
      };
      return {
        ...state,
        pageVideoSize: {
          ...state.pageVideoSize,
          [pathname]: videoSize,
        },
      };
    },
  },
  pageInitialState
);

export interface IPageState {
  tipstarRoomActiveTabIndex: number;
  raceInfoActiveTabIndex: {
    [key: string]: number;
  };
  raceInfoDetailActiveTabIndex: {
    [key: string]: number;
  };
  pageVideoSize: {
    [pathname: string]: VideoState["videoSize"];
  };
}

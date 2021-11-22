import { Dispatch } from "redux";
import { createAction, handleActions } from "redux-actions";
import { DeprecatedErrorModalProps } from "../components/molecules/modal/DeprecatedErrorModal";
import { GroupInvitedModalProps } from "../components/molecules/modal/GroupInvitedModal";
import { KeirinBetConfirmModalProps } from "../components/molecules/modal/KeirinBetConfirmModal";
import { OddsListAddTicketModalProps } from "../components/molecules/modal/OddsListAddTicketModal";
import { CreditCard } from "../openapi/model";

export const modalInitialState: IModalState = {
  modals: [],
  show: false,
};

// Actions
const ADD_MODAL_DEPRECATED = "app/modal/ADD_MODAL_DEPRECATED";
const ADD_MODAL = "app/modal/ADD_MODAL";
const REMOVE_MODAL = "app/modal/REMOVE_MODAL";
const SET_SHOW_MODAL = "app/modal/SET_SHOW_MODAL";

export const AddModalDeprecatedAction = createAction<
  ActionModalState | CloseModalState
>(ADD_MODAL_DEPRECATED);
export const AddModalAction = createAction<
  Exclude<ModalContent, ActionModalState | CloseModalState>
>(ADD_MODAL);
export const RemoveModalAction = createAction(REMOVE_MODAL);
export const SetShowModalAction = createAction<boolean>(SET_SHOW_MODAL);

// side effects
export const AddModal = (modal: ModalContent) => (dispatch: Dispatch) => {
  if (modal.type === "action" || modal.type === "close") {
    dispatch(AddModalDeprecatedAction(modal));
  } else {
    dispatch(AddModalAction(modal));
  }
};

export const RemoveModal = () => (dispatch: Dispatch) => {
  dispatch(RemoveModalAction());
};

// Reducer
export default handleActions(
  {
    [ADD_MODAL_DEPRECATED]: (state, action) => {
      const modal = (action.payload as unknown) as
        | ActionModalState
        | CloseModalState;
      return {
        ...state,
        modals: [...state.modals, modal],
      };
    },
    [ADD_MODAL]: (state, action) => {
      const modal = (action.payload as unknown) as Exclude<
        ModalContent,
        ActionModalState | CloseModalState
      >;
      return {
        ...state,
        modals: [...state.modals, modal],
      };
    },
    [REMOVE_MODAL]: (state) => {
      const _modals = Object.assign([], state.modals);
      return {
        ...state,
        modals: _modals.splice(1, _modals.length),
      };
    },
    [SET_SHOW_MODAL]: (state, action) => {
      return {
        ...state,
        show: (action.payload as unknown) as boolean,
      };
    },
  },
  modalInitialState
);

export interface IModalState {
  modals: ModalContent[];
  show: boolean;
}

type ActionModalState = {
  buttonClassName?: string;
  innerClassName?: string;
  type: "action";
  title: string;
  component: JSX.Element;
  closeButtonColor?: "primary" | "secondary";
  rightButtonText?: string; // ActionModal
  rightButtonColor?: string; // ActionModal
  leftButtonText?: string; // ActionModal
  onClickActionButton?: () => void; // ActionModal
  onClickCloseButton?: () => void;
};

type CloseModalState = {
  innerClassName?: string;
  type: "close";
  title: string;
  component: JSX.Element;
  foregroundComponent?: JSX.Element;
  closeText?: string; // CloseModal
  closeButtonColor?: "primary" | "secondary";
  onClickCloseButton?: () => void;
  overlay?: boolean;
  animationType?: "slideUp" | "scaleUp";
  titleComponent?: JSX.Element;
};

type BasicModalState = {
  type: "CHANGE_NICKNAME";
};

type OddsListAddTicketModalState = {
  type: "ODDS_LIST_ADD_TICKET";
} & Omit<OddsListAddTicketModalProps, "closeModal">;

type DeleteCreditCardModalState = {
  type: "DELETE_CREDIT_CARD";
  creditCard: CreditCard;
};

type ErrorModalState = { type: "ERROR"; onAfterClose?: () => void } & Omit<
  DeprecatedErrorModalProps,
  "closeModal"
>;

type KeirinBetConfirmModalState = { type: "KEIRIN_BET_CONFIRM" } & Omit<
  KeirinBetConfirmModalProps,
  "closeModal"
>;

type GroupInvitationModalState = { type: "GROUP_INVITATION" } & Omit<
  GroupInvitedModalProps,
  "closeModal"
>;

export type ModalContent =
  | ActionModalState
  | CloseModalState
  | BasicModalState
  | OddsListAddTicketModalState
  | DeleteCreditCardModalState
  | ErrorModalState
  | KeirinBetConfirmModalState
  | GroupInvitationModalState;

export type ModalContentType = ModalContent["type"];

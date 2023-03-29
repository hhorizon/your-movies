import { createReducer } from "@reduxjs/toolkit";
import {
  openRegistrationModal,
  closeRegistrationModal,
  changeRegistrationModalTab,
} from "./common-actions";

interface CommonState {
  isModalOpen: boolean;
  modalTabsValue: number;
}

const initialState: CommonState = {
  isModalOpen: false,
  modalTabsValue: 0,
};

const commonReducer = createReducer(initialState, {
  [openRegistrationModal.type]: (state, { payload }) => {
    state.isModalOpen = true;
    state.modalTabsValue = payload;
  },
  [closeRegistrationModal.type]: (state, { payload }) => {
    state.isModalOpen = false;
  },
  [changeRegistrationModalTab.type]: (state, { payload }) => {
    state.modalTabsValue = payload;
  },
});

export default commonReducer;

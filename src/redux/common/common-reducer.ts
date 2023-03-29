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

const commonReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(openRegistrationModal, (state, { payload }) => {
      state.isModalOpen = true;
      state.modalTabsValue = payload;
    })
    .addCase(closeRegistrationModal, (state, { payload }) => {
      state.isModalOpen = false;
    })
    .addCase(changeRegistrationModalTab, (state, { payload }) => {
      state.modalTabsValue = payload;
    });
});

export default commonReducer;

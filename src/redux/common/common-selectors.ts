import { RootState } from "../store";

export const getIsModalOpen = (state: RootState) => state.common.isModalOpen;

export const getModalTabsValue = (state: RootState) =>
  state.common.modalTabsValue;

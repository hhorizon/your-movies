import { createAction } from "@reduxjs/toolkit";

export const openRegistrationModal = createAction<
  number,
  "openRegistrationModal"
>("openRegistrationModal");

export const closeRegistrationModal = createAction("closeRegistrationModal");

export const changeRegistrationModalTab = createAction<
  number,
  "changeRegistrationModalTab"
>("changeRegistrationModalTab");

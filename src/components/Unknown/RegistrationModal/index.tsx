import React from "react";
import { useIntl } from "react-intl";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import RegistrationForm from "../RegistrationForm";

import {
  closeRegistrationModal,
  changeRegistrationModalTab,
} from "../../../redux/common/common-actions";
import { signUp, signIn } from "../../../redux/auth/auth-operations";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  getIsModalOpen,
  getModalTabsValue,
} from "../../../redux/common/common-selectors";
import messages from "./messages";
import useStyles from "./useStyles";

const RegistrationModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const intl = useIntl();
  const isModalOpen = useAppSelector(getIsModalOpen);
  const modalTabsValue = useAppSelector(getModalTabsValue);

  const handleSignUp = async (email: string, password: string) => {
    dispatch(
      signUp({
        email,
        password,
      }),
    );
    dispatch(closeRegistrationModal());
  };

  const handleSignIn = (email: string, password: string) => {
    dispatch(
      signIn({
        email,
        password,
      }),
    );
    dispatch(closeRegistrationModal());
  };

  return (
    <Modal
      open={isModalOpen}
      onClose={() => dispatch(closeRegistrationModal())}
    >
      <Box
        position="absolute"
        top="50%"
        left="50%"
        borderRadius={2}
        p={1}
        width={500}
        className={classes.modalBox}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            variant="fullWidth"
            value={modalTabsValue}
            onChange={(e, value) => dispatch(changeRegistrationModalTab(value))}
          >
            <Tab label={intl.formatMessage(messages.signInLabel)} />
            <Tab label={intl.formatMessage(messages.signUpLabel)} />
          </Tabs>
        </Box>

        <Box p={4}>
          {modalTabsValue === 0 && (
            <RegistrationForm
              onSubmit={({ email, password }) => {
                handleSignIn(email, password);
              }}
              btnText={intl.formatMessage(messages.signInBtnText)}
            />
          )}

          {modalTabsValue === 1 && (
            <RegistrationForm
              onSubmit={({ email, password }) => {
                handleSignUp(email, password);
              }}
              btnText={intl.formatMessage(messages.signUpBtnText)}
            />
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default RegistrationModal;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
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
import {
  getIsModalOpen,
  getModalTabsValue,
} from "../../../redux/common/common-selectors";
import messages from "./messages";
import useStyles from "./useStyles";

const RegistrationModal: React.FC = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  const classes = useStyles();
  const intl = useIntl();

  const isModalOpen = useSelector(getIsModalOpen);
  const modalTabsValue = useSelector(getModalTabsValue);

  const handleSignUp = async (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        console.log(`User ${user.email} successfully registered`); // TODO notification

        dispatch(closeRegistrationModal());
      })
      .catch((error) => console.log(error));
  };

  const handleSignIn = async (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        console.log(`User ${user.email} logged in`); // TODO notification

        dispatch(closeRegistrationModal());
      })
      .catch((error) => console.log(error));
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

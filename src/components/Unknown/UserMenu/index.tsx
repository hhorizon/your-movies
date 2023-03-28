import React, { useState, useContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useIntl } from "react-intl";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import RegistrationForm from "../RegistrationForm";

import { AuthContext } from "../AuthProvider";
import messages from "./messages";
import useStyles from "./useStyles";

const UserMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [tabsValue, setTabsValue] = useState(1);
  const user = useContext(AuthContext);
  const auth = getAuth();
  const intl = useIntl();
  const classes = useStyles();
  const userName = user?.email?.[0];

  const handleOpenModal = (tabsNumber: number) => {
    setTabsValue(tabsNumber);
    setOpen(true);
  };

  const handleCloseModal = () => setOpen(false);

  const handleTabsChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabsValue(newValue);
  };

  const handleSignUp = async (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        console.log(`User ${user.email} successfully registered`); // TODO notification

        handleCloseModal();
      })
      .catch((error) => console.log(error));
  };

  const handleSignIn = async (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        console.log(`User ${user.email} logged in`); // TODO notification

        handleCloseModal();
      })
      .catch((error) => console.log(error));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log(`User ${user?.email} logged out`); // TODO notification
      })
      .catch((error) => console.log(error));
  };

  if (user)
    return (
      <>
        <Button color="secondary" onClick={handleSignOut}>
          {intl.formatMessage(messages.signOutLabel)}
        </Button>
        <Avatar>{userName}</Avatar>
      </>
    );

  return (
    <>
      <Button color="secondary" onClick={() => handleOpenModal(0)}>
        {intl.formatMessage(messages.signInLabel)}
      </Button>

      <Button color="secondary" onClick={() => handleOpenModal(1)}>
        {intl.formatMessage(messages.signUpLabel)}
      </Button>

      <Modal open={open} onClose={handleCloseModal}>
        <Box
          position="absolute"
          top="50%"
          left="50%"
          borderRadius={2}
          p={1}
          width={600}
          className={classes.modalBox}
        >
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              variant="fullWidth"
              value={tabsValue}
              onChange={handleTabsChange}
            >
              <Tab label={intl.formatMessage(messages.signInLabel)} />
              <Tab label={intl.formatMessage(messages.signUpLabel)} />
            </Tabs>
          </Box>

          <Box p={4}>
            {tabsValue === 0 && (
              <RegistrationForm
                onSubmit={({ email, password }) => {
                  handleSignIn(email, password);
                }}
                btnText={intl.formatMessage(messages.signInBtnText)}
              />
            )}

            {tabsValue === 1 && (
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
    </>
  );
};

export default UserMenu;

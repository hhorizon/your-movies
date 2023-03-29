import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { useIntl } from "react-intl";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import RegistrationModal from "../RregistrationModal";

import { AuthContext } from "../AuthProvider";
import { openRegistrationModal } from "../../../redux/common/common-actions";
import messages from "./messages";

const UserMenu: React.FC = () => {
  const dispatch = useDispatch();
  const user = useContext(AuthContext);
  const auth = getAuth();
  const intl = useIntl();
  const userName = user?.email?.[0];

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log(`User ${user?.email} logged out`); // TODO notification
      })
      .catch((error) => console.log(error));
  };

  if (user) {
    return (
      <Box display="flex" alignItems="center">
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          onClick={handleSignOut}
        >
          {intl.formatMessage(messages.signOutLabel)}
        </Button>

        <Box ml={2}>
          <Avatar>{userName}</Avatar>
        </Box>
      </Box>
    );
  }

  return (
    <Box display="flex" alignItems="center">
      <Box>
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          onClick={() => dispatch(openRegistrationModal(0))}
        >
          {intl.formatMessage(messages.signInLabel)}
        </Button>
      </Box>

      <Box ml={2}>
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          onClick={() => dispatch(openRegistrationModal(1))}
        >
          {intl.formatMessage(messages.signUpLabel)}
        </Button>
      </Box>

      <RegistrationModal />
    </Box>
  );
};

export default UserMenu;

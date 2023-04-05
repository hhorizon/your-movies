import React from "react";
import { useIntl } from "react-intl";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import RegistrationModal from "../RegistrationModal";

import { getUser } from "../../../redux/auth/auth-selectors";
import {
  openRegistrationModal,
  setFavoriteMovies,
} from "../../../redux/common/common-actions";
import { signOut } from "../../../redux/auth/auth-operations";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import messages from "./messages";

const UserMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);
  const intl = useIntl();
  const userName = user?.email?.[0];

  const handleSignOut = () => {
    dispatch(signOut());
    dispatch(setFavoriteMovies([]));
  };

  if (user.uid) {
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

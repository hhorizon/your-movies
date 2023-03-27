import React from "react";
import { useIntl } from "react-intl";
import { Link as RouterLink } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import messages from "./messages";

const NotFoundPage: React.FC = () => {
  const intl = useIntl();

  return (
    <Box
      display="flex"
      height="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h2">{intl.formatMessage(messages.title)}</Typography>

      <Typography>{intl.formatMessage(messages.subtitle)}</Typography>

      <Box mt={10}>
        <Button component={RouterLink} to="/" variant="contained">
          {intl.formatMessage(messages.buttonText)}
        </Button>
      </Box>
    </Box>
  );
};

export default NotFoundPage;

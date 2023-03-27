import React from "react";
import { useIntl } from "react-intl";
import { Link as RouterLink } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import Logo from "../Logo";

import useStyles from "./useStyles";
import messages from "./messages";

const Footer = () => {
  const classes = useStyles();
  const intl = useIntl();

  return (
    <Box component="footer" bgcolor="primary.main">
      <Container maxWidth="xl">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          py={2}
        >
          <Box>
            <RouterLink to="/" className={classes.routerLink}>
              <Logo />
            </RouterLink>
          </Box>

          <Box display={{ xs: "none", md: "flex" }}>
            <MenuItem component={RouterLink} to="/films" sx={{ mr: 4 }}>
              <Typography variant="h6" color="common.white">
                {intl.formatMessage(messages.menuItemFilms)}
              </Typography>
            </MenuItem>

            <MenuItem component={RouterLink} to="/series" sx={{ mr: 4 }}>
              <Typography variant="h6" color="common.white">
                {intl.formatMessage(messages.menuItemSeries)}
              </Typography>
            </MenuItem>
          </Box>

          <Box>
            <Typography
              component={Link}
              href="https://developers.themoviedb.org/3"
              target="_blank"
              variant="body2"
              color="common.white"
            >
              {intl.formatMessage(messages.databaseLink)}
            </Typography>
            <Typography
              variant="body2"
              color="common.white"
              display="inline-block"
              borderLeft="1px solid"
              pl={2}
              ml={2}
            >
              &copy; {intl.formatMessage(messages.copyright)}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default Footer;

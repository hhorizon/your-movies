import React, { useState, MouseEvent, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useOnClickOutside } from "usehooks-ts";
import { useIntl } from "react-intl";

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../Logo";
import SearchBar from "../../Search/SearchBar";
import UserMenu from "../UserMenu";

import useStyles from "./useStyles";
import messages from "./messages";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const searchBarRef = useRef(null);
  const classes = useStyles();
  const intl = useIntl();

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useOnClickOutside(searchBarRef, () => setOpenSearchBar(false));

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar>
          {/* desktop logo */}
          <Box mr={12} display={{ xs: "none", md: "flex" }}>
            <RouterLink to="/" className={classes.routerLink}>
              <Logo size="large" />
            </RouterLink>
          </Box>

          {/* mobile menu */}
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 5 }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={!!anchorElNav}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                component={RouterLink}
                to="/films"
                onClick={handleCloseNavMenu}
              >
                {intl.formatMessage(messages.menuItemFilms)}
              </MenuItem>

              <MenuItem
                component={RouterLink}
                to="/series"
                onClick={handleCloseNavMenu}
              >
                {intl.formatMessage(messages.menuItemSeries)}
              </MenuItem>
            </Menu>
          </Box>

          {/* mobile logo */}
          <Box flexGrow={1} display={{ xs: "flex", md: "none" }} mr={5}>
            <RouterLink to="/" className={classes.routerLink}>
              <Logo size="large" />
            </RouterLink>
          </Box>

          {/* desktop menu */}
          <Box flexGrow={1} display={{ xs: "none", md: "flex" }}>
            <MenuItem component={RouterLink} to="/films" sx={{ mr: 4 }}>
              <Typography variant="h6">
                {intl.formatMessage(messages.menuItemFilms)}
              </Typography>
            </MenuItem>

            <MenuItem component={RouterLink} to="/series">
              <Typography variant="h6">
                {intl.formatMessage(messages.menuItemSeries)}
              </Typography>
            </MenuItem>
          </Box>

          {/* desktop searchbar */}
          <Box
            position="absolute"
            right={150}
            display={{ xs: "none", sm: "block" }}
            bgcolor="primary.main"
          >
            <SearchBar />
          </Box>

          {/* mobile searchbar */}
          <Box display={{ sm: "none" }}>
            <IconButton onClick={() => setOpenSearchBar(true)} color="inherit">
              <SearchIcon />
            </IconButton>

            {openSearchBar && (
              <Box
                position="absolute"
                right={0}
                top={7}
                bgcolor="primary.main"
                ref={searchBarRef}
              >
                <SearchBar />
              </Box>
            )}
          </Box>

          {/* desktop usermenu */}
          <Box display={{ xs: "none", md: "flex" }}>
            <UserMenu />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

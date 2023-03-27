import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export default makeStyles<Theme>(() => ({
  routerLink: {
    textDecoration: "none",
  },
  apiLink: {
    "&:hover": {
      color: "red",
    },
  },
}));

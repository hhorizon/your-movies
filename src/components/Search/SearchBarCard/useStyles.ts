import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export default makeStyles<Theme>((theme) => ({
  card: {
    display: "flex",
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    textDecoration: "none",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

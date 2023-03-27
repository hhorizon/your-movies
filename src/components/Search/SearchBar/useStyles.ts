import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export default makeStyles<Theme>((theme) => ({
  watchAllBtn: {
    borderBottomLeftRadius: "4px",
    borderBottomRightRadius: "4px",
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
  },
}));

import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export default makeStyles<Theme>((theme) => ({
  modalBox: {
    transform: "translate(-50%, -50%)",
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.common.white,
  },
}));

import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export default makeStyles<Theme>((theme) => ({
  searchListWrapper: {
    position: "relative",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    maxHeight: 500,
    overflowY: "scroll",
    "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  watchAllBtn: {
    borderBottomLeftRadius: "4px",
    borderBottomRightRadius: "4px",
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
  },
}));

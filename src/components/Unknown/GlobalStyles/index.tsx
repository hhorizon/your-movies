import React from "react";
import GlobalStylesBase from "@mui/material/GlobalStyles";
import { useTheme } from "@mui/material";

const GlobalStyles: React.FC = () => {
  const theme = useTheme();

  return (
    <GlobalStylesBase
      styles={{
        "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
          width: 8,
        },
        "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
          backgroundColor: theme.palette.primary.main,
          backgroundClip: "content-box",
          border: "2px solid transparent",
          borderRadius: 16,
        },
      }}
    />
  );
};

export default GlobalStyles;

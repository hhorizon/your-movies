import React from "react";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

interface LoaderProps {
  height?: string;
}

const Loader: React.FC<LoaderProps> = ({ height = "100%" }) => {
  return (
    <Box
      height={height}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress size={100} />
    </Box>
  );
};

export default Loader;

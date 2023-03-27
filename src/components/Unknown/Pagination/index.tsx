import React from "react";
import PaginationBase, { PaginationProps } from "@mui/material/Pagination";

const Pagination: React.FC<PaginationProps> = (props) => {
  return <PaginationBase {...props} color="primary" />;
};

export default Pagination;

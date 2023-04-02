import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "../Header";
import Footer from "../Footer";

interface PageBaseProps {
  children: React.ReactNode;
}

const PageBase: React.FC<PageBaseProps> = ({ children }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      bgcolor="grey.100"
    >
      <Header />

      <Box flexGrow={1} display="flex">
        <Container maxWidth="xl" sx={{ backgroundColor: "common.white" }}>
          <Box pt={18} pb={5} height="100%">
            {children}
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};
export default PageBase;

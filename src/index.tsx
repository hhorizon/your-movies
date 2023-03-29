import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { AuthProvider } from "./components/Unknown/AuthProvider";

import App from "./App";
import GlobalStyles from "./components/Unknown/GlobalStyles";
import IntlProvider from "./components/Unknown/IntlProvider";
import { setupStore } from "./redux/store";
import theme from "./common/theme";

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <IntlProvider>
            <ThemeProvider theme={theme}>
              <StyledEngineProvider injectFirst>
                <CssBaseline />
                <GlobalStyles />
                <App />
              </StyledEngineProvider>
            </ThemeProvider>
          </IntlProvider>
        </AuthProvider>
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>,
);

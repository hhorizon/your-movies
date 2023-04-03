import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { FirebaseAppProvider } from "reactfire";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { AuthProvider } from "./components/Unknown/AuthProvider";
import { UIContextProvider } from "./components/Unknown/UIContext";

import App from "./App";
import GlobalStyles from "./components/Unknown/GlobalStyles";
import IntlProvider from "./components/Unknown/IntlProvider";
import firebaseApp from "./common/firebaseApp";
import { store } from "./redux/store";
import theme from "./common/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseApp={firebaseApp}>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <AuthProvider>
            <IntlProvider>
              <ThemeProvider theme={theme}>
                <StyledEngineProvider injectFirst>
                  <CssBaseline />
                  <GlobalStyles />
                  <UIContextProvider>
                    <App />
                  </UIContextProvider>
                </StyledEngineProvider>
              </ThemeProvider>
            </IntlProvider>
          </AuthProvider>
        </BrowserRouter>
      </ReduxProvider>
    </FirebaseAppProvider>
  </React.StrictMode>,
);

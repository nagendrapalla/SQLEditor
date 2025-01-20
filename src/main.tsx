import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from 'react-query';
import { StrictMode } from "react";
import { createTheme, ThemeProvider } from '@mui/material';

const queryClient = new QueryClient();

// Create a custom theme
const theme = createTheme({
  typography: {
    fontFamily: "'Merriweather Sans', serif",
    fontWeightRegular: 200,
    fontSize: 10
  },
});


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      {/* <Provider store={store}> */}
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <ToastContainer />
          <App />
        </ThemeProvider>
      </QueryClientProvider>
      {/* </Provider> */}
    </BrowserRouter>
  </StrictMode>
);

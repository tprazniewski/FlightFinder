import React, { FC, ReactElement } from "react";
import { Dashboard } from "./pages/dashboard/dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider, CssBaseline } from "@mui/material"; // CssBaseline resets the value based on the provided customTheme
import { customTheme } from "./theme/customTheme";

const queryClient = new QueryClient();
const App: FC = (): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <Dashboard />;
      </ThemeProvider>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;

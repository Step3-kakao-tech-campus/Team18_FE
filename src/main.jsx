import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./main.css";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false, suspense: true } },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  </React.StrictMode>
);

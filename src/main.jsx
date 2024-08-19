import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ThemeContextProvider from "./store/ThemeContext.jsx";

const queryClient = new QueryClient();
const myRouter = createBrowserRouter([{ path: "/", element: <App /> }]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <RouterProvider router={myRouter}>
          <App />
        </RouterProvider>
      </ThemeContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

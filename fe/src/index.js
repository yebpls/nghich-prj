// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-toastify";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <DndProvider backend={HTML5Backend}>
      <ToastContainer />
      {/* <Toaster position="top-right" /> */}

      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </DndProvider>
  </QueryClientProvider>,
  document.getElementById("root")
);

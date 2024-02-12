import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./layout/Header";
import DestinationIndex from "./components/DestinationIndex";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { DestinationApi } from "./api/DestinationApi";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApiProvider api={DestinationApi}>
      <Header />
      <DestinationIndex />
    </ApiProvider>
  </React.StrictMode>
);

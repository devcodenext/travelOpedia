import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./layout/Header";
import DestinationIndex from "./components/DestinationIndex";
// import { ApiProvider } from "@reduxjs/toolkit/query/react";
// import { destinationApi } from "./api/destinationApi";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import RandomDestination from "./components/RandomDestination";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ApiProvider api={DestinationApi}> */}
    <Provider store={store}>
      <Header />
      <DestinationIndex />
      <RandomDestination />
    </Provider>
  </React.StrictMode>
);

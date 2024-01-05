import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./main.scss"
import  allReducers from "./Reducers/Reducers/indexReducers";
import RouteChoice from "./Routes/choiceRoute";

const store = createStore(allReducers)

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <RouteChoice/>
    </Provider>
  </BrowserRouter>
)
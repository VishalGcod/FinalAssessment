import React from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { fetchReducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  fetchReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

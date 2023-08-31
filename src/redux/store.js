import React from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { fetchReducer } from "./reducers";

export const store = createStore(fetchReducer, applyMiddleware(thunk));

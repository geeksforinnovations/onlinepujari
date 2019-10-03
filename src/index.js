import React, { Component } from "react";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import * as reducers from "./reducers/index";
import Home from "./components/pages/home/home";

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

class AppRoot extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home></Home>
      </Provider>
    );
  }
}

export default AppRoot;
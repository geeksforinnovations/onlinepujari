import React, {Component} from 'react';
 import { createStore, applyMiddleware, combineReducers } from "redux";
import {Provider} from 'react-redux';
 import thunk from "redux-thunk";
import logger from "redux-logger";

import * as reducers from "./reducers/index";
import Home from './components/pages/home/home';
import Login from './components/pages/login/login';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import PujaDetailsCard from './components/common/pudaDetailsCard/PujaDetailsCard';



const RootStack = createStackNavigator({
  Home: {
    screen: Home
  },
  Login: {
    screen: Login
  },
  PujaDetails:{
    screen: PujaDetailsCard
  }
},
{
  initialRouteName: 'Home',
});
const AppContainer = createAppContainer(RootStack);

 const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
 const reducer = combineReducers(reducers);
 const store = createStoreWithMiddleware(reducer);

class AppRoot extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer></AppContainer>
      </Provider>
    );
  }
}

export default AppRoot;

import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import logger from "redux-logger";

import * as reducers from "./reducers/index";
import Home from './components/pages/home/home';
import Login from './components/pages/login/login';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PujaDetailsCard from './components/common/pudaDetailsCard/PujaDetailsCard';
import CheckoutPage from './components/pages/checkout.page';
import { createDrawerNavigator } from 'react-navigation-drawer';
import DrawerContent from './components/common/DrawerContent';



const RootStack = createDrawerNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      drawerLabel: 'Home'
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      drawerLabel: 'Login'
    }
  },
  PujaDetails: {
    screen: PujaDetailsCard,
    navigationOptions: {
      drawerLabel: 'Puja Details'
    }
  },
  Checkout: {
    screen: CheckoutPage,
    navigationOptions: {
      drawerLabel: 'Checkout'
    }
  }
},
  {
    initialRouteName: 'Home',
    contentComponent: DrawerContent,
    drawerPosition: 'right',
    contentOptions: {
      activeTintColor: '#2699FB',
    },
    // hideStatusBar: true,
  });
const AppNavigator = createStackNavigator(
  {
    Drawer: { screen: RootStack },

    Login: { screen: Login },
    Home: { screen: Home },
    PujaDetails: {
      screen: PujaDetailsCard,
      path: 'puja/:id',
      
    },
    Checkout: {
      screen: CheckoutPage,
      path: 'checkout/:pujaId'
    }
  }, {
  initialRouteName: "Drawer",
  //headerMode: 'none',
  // mode: 'modal',
  // defaultNavigationOptions: {
  //   title:'hrlo',
  //   gesturesEnabled: true,
  //   headerMode: 'screen',
  //   headerLayoutPreset:'center',
  //   headerBackTitleVisible: true,
  //   headerStyle: {
  //     //backgroundColor: 'transparent',
  //     backgroundColor: '#28F1A6',
  //     elevation: 0,
  //     shadowOpacity: 0
  //   },
  //   headerTintColor: '#333333',
  //   headerTitleStyle: {
  //     fontWeight: 'bold',
  //     color: 'black'
  //   }
  // }
});
const AppContainer = createAppContainer(AppNavigator);

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

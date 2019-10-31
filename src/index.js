import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import logger from "redux-logger";
import { TouchableOpacity, Image } from 'react-native'
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
    navigationOptions: ({ navigation }) => ({
      title: `Home`,
    }),
  },
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      title: `Login`,
    }),

  },
  PujaDetails: {
    screen: PujaDetailsCard,
    navigationOptions: ({ navigation }) => ({
      title: `Puja details`,
    }),

  },
  Checkout: {
    screen: CheckoutPage,
    navigationOptions: ({ navigation }) => ({
      title: `Checkout`,
    }),

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
    Login: { screen: Login },
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        title: `hone's Profile'`,
        headerLeft: <TouchableOpacity onPress={() => navigation.goBack()}><Image source={{ uri: 'https://picsum.photos/200' }} style={{ marginTop: 10, marginLeft: 10 }} /></TouchableOpacity>,

      }),

    },
    PujaDetails: {
      screen: PujaDetailsCard,
      path: 'puja/:id',
      navigationOptions: ({ navigation }) => ({
        title: `masdsddsdni's Profile'`,
      }),

    },
    Checkout: {
      screen: CheckoutPage,
      path: 'checkout/:pujaId',
      navigationOptions: ({ navigation }) => ({
        title: `qw's Profile'`,
      }),
    },
    Drawer: {
      screen: RootStack,
      // navigationOptions: ({ navigation }) => ({
      //   title: `mani's Profile'`,
      // }),
    },
  }, {
  initialRouteName: "Home",
  defaultNavigationOptions: {
    // title:'sd',
    headerStyle: {
      backgroundColor: '#28F1A6',
      elevation: 0,
      shadowOpacity: 0
    },
    headerTintColor: '#333333',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#ffffff'
    }
  }
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

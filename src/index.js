import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import logger from "redux-logger";
import { TouchableOpacity, Image } from 'react-native'
import { theme, withGalio, GalioProvider } from 'galio-framework'
import * as reducers from "./reducers/index";
import Home from './components/pages/home/home';
import Login from './components/pages/login/login';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PujaDetailsCard from './components/common/pudaDetailsCard/PujaDetailsCard';
import CheckoutPage from './components/pages/checkout.page';
import { createDrawerNavigator } from 'react-navigation-drawer';
import DrawerContent from './components/common/DrawerContent';
import CardDetailss from './components/pages/payment/cardDetails.page';
import SuccessPage from './components/pages/payment/paymentSuccess.page';



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

    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        title: `Pujas`,
        headerStyle: {
          backgroundColor: 'transparent',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#2699FB',
          },
        },
      }),

    },
    PujaDetails: {
      screen: PujaDetailsCard,
      path: 'puja/:id',
      navigationOptions: ({ navigation }) => ({
        title: `Puja Details`,
      }),

    },
    Checkout: {
      screen: CheckoutPage,
      path: 'checkout/:pujaId',
      navigationOptions: ({ navigation }) => ({
        title: `Booking Details`,
      }),
    },
    CardDetails: {
      screen: CardDetailss,
      navigationOptions: ({ navigation }) => ({
        title: `Payment`,
      }),
    },
    SuccessPage: {
      screen: SuccessPage,
      navigationOptions: ({ navigation }) => ({
        title: `Success`,
        headerLeft: null
      }),
    }
    // Drawer: {
    //   screen: RootStack,
    //   // navigationOptions: ({ navigation }) => ({
    //   //   title: `mani's Profile'`,
    //   // }),
    // },
  }, {
  initialRouteName: "Home",
  defaultNavigationOptions: {
    headerStyle: {
      //backgroundColor: '#28F1A6',
      elevation: 0,
      shadowOpacity: 0
    },
    headerTintColor: '#2699FB',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#2699FB',
    }
  }
});
const AppContainer = createAppContainer(AppNavigator);

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

import Ctheme from './theme/theme'
class AppRoot extends Component {
  render() {
    return (


      <Provider store={store}>
        <GalioProvider theme={Ctheme}>
          <AppContainer></AppContainer>
        </GalioProvider>
      </Provider>

    );
  }
}

export default AppRoot;

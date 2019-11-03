/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import AppContainer from './src/index';
import stripe from 'tipsi-stripe'
stripe.setOptions({
  publishableKey: 'pk_test_znz4sfwsislBf9ccezlHagFt',
  // merchantId: 'MERCHANT_ID', // Optional
  androidPayMode: 'test', // Android only
})



export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}


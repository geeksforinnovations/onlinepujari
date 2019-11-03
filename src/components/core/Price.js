import React from 'react';
import {Text} from 'galio-framework';

const Price = props => {
  return <Text {...props}>${props.amount}</Text>;
};

export default Price;

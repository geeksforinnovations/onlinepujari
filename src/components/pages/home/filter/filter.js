import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const DashBoardFilter = () => {
  return (
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Filter Page</Text>              
            </View>            
          </View>
          );
};

const styles = StyleSheet.create({ 
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
});

export default DashBoardFilter;

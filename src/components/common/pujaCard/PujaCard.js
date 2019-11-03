import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SectionList,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Price} from '../../core';

const Puja = ({puja, onClick}) => {
  const img = {
    uri:
      'https://picsum.photos/200',
  };
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{flex: 1}}
      onPress={() => {
        //alert(1)
        onClick()
      }}>
      <View style={styles.sectionContainer}>
        <View style={styles.imageContainer}>
          <Image style={{flex: 1}} source={img} />
        </View>
        <View style={styles.detailsConatiner}>
          <Text style={styles.pujaName}>{puja.name}</Text>
          <Price style={styles.priceText} amount={puja.cost}></Price>
          <Text style={styles.timeText}>
            Total Time : {puja.timeInHrs} hrs 
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.white,
   // borderColor: 'green',
   // borderWidth: 1,
    marginVertical: 5,
    height: 80,
  },
  imageContainer: {
    //borderColor: 'black',
   // borderWidth: 1,
    width: 80,
  },
  detailsConatiner: {
   // borderColor: 'red',
   // borderWidth: 1,
    flex: 1,
    paddingHorizontal: 6,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2699FB',
  },
  pujaName: {
    color: '#2699FB',
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 1,
  },
  priceText: {
    fontSize: 16,
    marginVertical: 1,
    color: '#2699FB',
  },
  timeText: {
    fontSize: 13,
    marginVertical: 1,
    color: '#2699FB',
  },
});

export default Puja;

import React from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Button, Block} from '../../core';
// import {Button} from 'galio-framework';

const PujaDetailsCard = ({puja, navigation}) => {
  const id = navigation.getParam('id',null)
  const imgUrl =
    'https://mygate.s3.amazonaws.com/mgmedia/society/4214/notices/32e90f48bae9c60b340265537636d1dfdcc13b1f/4b502be7e7645937c95d3d6232506975.jpg';

  const img = {
    uri: imgUrl
  }
  return (
    <Block shadow>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={img} />
          <Text >Anna Prasanna {id}</Text>
          
        </View>
        <View style={styles.actionsContainer}>
          <Button >book</Button>          
        </View>
        <View style={styles.detailsConatiner}>
          <View style={styles.aboutPujaWrapper}>
            <Text style={styles.sectionTitle}>about puja jere</Text>
            <Text style={styles.sectionTitle}>about puja jere</Text>
          </View>
          <View style={styles.pujaDescription}>
            <Text style={styles.sectionTitle}>Puja description</Text>
          </View>
          <Text style={styles.pujaName}>details</Text>
          <Text style={styles.priceText}>2500/-</Text>
          <Text style={styles.timeText}>Total Time : 5Hrs</Text>
        </View>
      </View>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'yellow',
    borderRadius: 10,
    margin:10,
  },
  image:{
    height:170,
    width:170,
    justifyContent:'center',
    borderColor:'green',
    borderWidth:1,

  },
  actionsContainer: {
    flex: 1,
    //minHeight: 50,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:10,
  },
  imageContainer: {
    borderColor:'brown',
    borderWidth:1,
    minHeight: 150,
    borderRadius: 10,
    paddingVertical:5,
    alignItems:'center'
  },
  detailsConatiner: {
    flex: 1,
  },
  aboutPujaWrapper: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
    minHeight: 100,
  },
  pujaDescription: {
    flex: 1,
  },
});

export default PujaDetailsCard;

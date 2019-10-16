import React from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const PujaDetailsCard = ({puja}) => {
    const imgUrl =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVSuXmYEIaOV8Nn8Bu3pIS7SxIz84lddz2pDU6P_gSOzkg3mGP';
 
    const img = Image.prefetch(imgUrl);
   return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={{width: 50, height: 50}} source={img} />
        <Text style={styles.sectionTitle}>img heref</Text>
      </View>
      <View style={styles.actionsContainer}>
        <Text style={styles.sectionTitle}>actions here</Text>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    borderRadius: 10,
  },
  actionsContainer: {
    flex: 1,
    minHeight: 50,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'blue',
    minHeight: 150,
    borderRadius: 10,
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

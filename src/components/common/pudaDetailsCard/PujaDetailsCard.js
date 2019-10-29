import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Block } from '../../core';
import { Button } from 'galio-framework'
import DescriptionCard from './DescriptionCard';
// import {Button} from 'galio-framework';
class PujaDetailsCard extends React.Component {
  static navigationOptions = {
    title: 'Home',
    header: (navigation, header) => {
      let right = <Button>Bla</Button>;
      return { ...header, right };
    },
    drawer: () => ({
      label: 'Main',
    }),
  };
  constructor(props) {
    super(props)
  }

  render() {
    const { puja, navigation } = this.props;
    const imgUrl =
      'https://mygate.s3.amazonaws.com/mgmedia/society/4214/notices/32e90f48bae9c60b340265537636d1dfdcc13b1f/4b502be7e7645937c95d3d6232506975.jpg';

    const img = {
      uri: imgUrl
    }
    console.log(12)
    return (
      <Block style={{ borderColor: 'red', borderWidth: 3 }} shadow flex={1} safe={true} >
        <ScrollView style={styles.scrollView}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={img} />
          </View>
          <View style={styles.actionsContainer}>
            <View style={{ flex: 1 }} >
              <Text style={{ color: '#2699FB', fontWeight: "bold" }}>Annaprasanna 12</Text>
              <Text style={{ color: '#2699FB' }}>Total Hrs: 5Hrs</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row-reverse' }}>
              <Button
                color="info"
                activeOpacity={.5}
                loading={false}
                radius={10}
                width={10}
                style={{ width: 150, backgroundColor: '#2699FB' }}
                onPress={() => navigation.navigate('Checkout')} >book</Button>

            </View>
          </View>
          <View style={styles.detailsConatiner}>
            <DescriptionCard title="About">
              <Text style={{ color: '#2699FB' }}>Aksharabhyasam is one of the 16 sanskaras to be performed, in which the baby when attains age above two years is initiated to write the first letter with the blessings for mata saraswati and lord ganesh and start their schooling life.</Text>
            </DescriptionCard>
            <DescriptionCard title="Key Insights">
              <Text style={{ color: '#2699FB' }}>1. Baby writes for the first time.</Text>
              <Text style={{ color: '#2699FB' }}>2. t helps the baby to grow healthy and strong.</Text>
              <Text style={{ color: '#2699FB' }}>3. Performed on 2nd or 3rd month on any auspicious day.</Text>
              <Text style={{ color: '#2699FB' }}>4. Mantras are chanted for the baby’s well-being.</Text>
            </DescriptionCard>

            <DescriptionCard title="Puja Samagri">
              <Text style={{ color: '#2699FB' }}>1. Pasupu - 100mg.</Text>
              <Text style={{ color: '#2699FB' }}>2. Kumkuma - 100mg.</Text>
              <Text style={{ color: '#2699FB' }}>3. Biyyam - 1Kg.</Text>
              <Text style={{ color: '#2699FB' }}>4. Tenkayalu - 3.</Text>
            </DescriptionCard>
          </View>
        </ScrollView>
        <View style={{}}>
          <Button
            color="info"
            onPress={() => { alert(1) }}
            activeOpacity={.5}
            loading={false}
            style={{ alignSelf: 'stretch', width: '100%', borderRadius: 0, backgroundColor: '#2699FB' }}
            onPress={() => navigation.openDrawer()} >book</Button>
        </View>
      </Block>
    );

  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'yellow',
    borderRadius: 10,
    margin: 10,
  },
  image: {
    height: 140,
    width: 140,
    justifyContent: 'center',
    //borderColor: 'green',
    //borderWidth: 1,

  },
  actionsContainer: {
    //flex: 1,
    flexDirection: 'row',
    minHeight: 100,
    backgroundColor: '#F1F9FF',
    alignItems: 'center',
    justifyContent: 'center',
    //marginVertical: 10,
    marginHorizontal: 10,
    color: '#2699FB',
    alignContent: 'space-between'
  },
  imageContainer: {
    minHeight: 150,
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: '#BCE0FD'
  },
  detailsConatiner: {
    flex: 1,
    // borderColor: 'red',
    // borderWidth: 3,
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

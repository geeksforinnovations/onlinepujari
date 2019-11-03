import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Block } from '../../core';
import { Button } from 'galio-framework'
import DescriptionCard from './DescriptionCard';
import { SafeAreaView, StackActions } from 'react-navigation';
import { DrawerActions, useNavigation } from 'react-navigation-drawer'
// import {Button} from 'galio-framework';
class PujaDetailsCard extends React.Component {

  onclickd() {
    const pushAction = StackActions.push({
      routeName: 'Checkout',
      params:{
        selectedPuja: this.props.navigation.state.params.selectedPuja
      }
    });
    this.props.navigation.navigate(pushAction)
  }

  componentDidUpdate() {
    // this.props.navigation.setParams({ title: ' 12222' })
  }
  c() {
    this.props.navigation.dispatch(DrawerActions.toggleDrawer())
  }
  render() {
    const { puja, navigation } = this.props;
    const { selectedPuja } = navigation.state.params

    const imgUrl = 'https://picsum.photos/200'
    // 'https://mygate.s3.amazonaws.com/mgmedia/society/4214/notices/32e90f48bae9c60b340265537636d1dfdcc13b1f/4b502be7e7645937c95d3d6232506975.jpg';

    const img = {
      uri: imgUrl
    }
    console.log(12)
    return (
      <Block shadow flex={1} safe={true} >
        <ScrollView style={styles.scrollView}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={img} />
          </View>
          <View style={styles.actionsContainer}>
            <View style={{ flex: 1 }} >
              <Text style={{ color: '#2699FB', fontWeight: "bold" }}>{selectedPuja.name}</Text>
              <Text style={{ color: '#2699FB' }}>Total Hrs: {selectedPuja.timeInHrs}Hrs</Text>
              <Text style={{ color: '#2699FB' }}>Price: ${selectedPuja.cost}</Text>
            
            </View>
            <View style={{ flex: 1, flexDirection: 'row-reverse' }}>
              <Button
                color="info"
                activeOpacity={.5}
                loading={false}
                radius={10}
                width={10}
                style={{ width: 150, backgroundColor: '#2699FB' }}
                onPress={() => this.onclickd()} >book</Button>

            </View>
          </View>
          <View style={styles.detailsConatiner}>
            <DescriptionCard title="About">
              <Text style={{ color: '#2699FB' }}>{selectedPuja.about}</Text>
            </DescriptionCard>
            <DescriptionCard title="Key Insights">
              <Text style={{ color: '#2699FB' }}>1. Baby writes for the first time.</Text>
              <Text style={{ color: '#2699FB' }}>2. t helps the baby to grow healthy and strong.</Text>
              <Text style={{ color: '#2699FB' }}>3. Performed on 2nd or 3rd month on any auspicious day.</Text>
              <Text style={{ color: '#2699FB' }}>4. Mantras are chanted for the baby’s well-being.</Text>
            </DescriptionCard>
            <DescriptionCard title="Available Languages">
              <Text style={{ color: '#2699FB' }}>Telugu</Text>
              <Text style={{ color: '#2699FB' }}>Hindi</Text>
              <Text style={{ color: '#2699FB' }}>Tamil</Text>
            </DescriptionCard>

            <DescriptionCard title="Worship materials required">
              {selectedPuja.requiredThings.map((thing, index)=> {
                return <Text key={`${index}_puja`} style={{ color: '#2699FB' }}>{++index}. {thing}.</Text>
              })}
              
            </DescriptionCard>
          </View>
          <View style={{marginVertical:20}}></View>
        </ScrollView>
        {/* <View style={{}}>
          <Button
            color="info"
            onPress={() => { alert(1) }}
            activeOpacity={.5}
            loading={false}
            style={{ alignSelf: 'stretch', width: '100%', borderRadius: 0, backgroundColor: '#2699FB' }}
            onPress={() => this.c()} >book</Button>
        </View> */}
        
      </Block>
    );

  }
}
// PujaDetailsCard.navigationOptions = {
//   headerStyle: {
//     backgroundColor: '#BCE0FD',
//     color:'white'
//   },
// };


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
    minHeight: 100,
  },
  pujaDescription: {
    flex: 1,
  },
});

export default PujaDetailsCard;

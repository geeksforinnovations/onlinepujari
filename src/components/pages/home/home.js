import React from 'react';
import {StyleSheet, View, SectionList, FlatList} from 'react-native';
import Puja from '../../common/pujaCard/PujaCard';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaView} from 'react-navigation';
import PujaDetailsCard from '../../common/pudaDetailsCard/PujaDetailsCard';
import {Block, Text} from '../../core';
const availablePujas = [
  {name: 'puja1', price:'2400', description: 'puja description', requiredTime:'5'},
  {name: 'pujsdadd2',price:'2400', description: 'puja description', requiredTime:'15'},
];

class Home extends React.Component {
  // static navigationOptions = {
  //   title: 'Home1',
  //   headerStyle: {
  //     backgroundColor: '#f4511e',
  //   },
  //   headerTintColor: '#fff',
  //   headerTitleStyle: {
  //     fontWeight: 'bold',
  //   },
  // };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Block>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text h4>Available Pujas</Text>
            </View>

            <FlatList
              style={styles.list}
              data={availablePujas}
              renderItem={({item}) => {
                return <Puja puja={item} />;
              }}
              keyExtractor={item => item.name}
            />
          </View>
        </Block>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    // flex:1
    //backgroundColor: 'yellow',
    marginLeft: 3,
    marginRight: 3,
  },
  container: {
    flex: 1,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.black,
  },
});

export default Home;

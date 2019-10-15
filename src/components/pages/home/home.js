import React from 'react';
import {StyleSheet, View, Text, SectionList, FlatList} from 'react-native';
import Puja from '../../common/pujaCard/PujaCard'

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaView} from 'react-navigation';
const availablePujas = [
  {name: 'puja1', description: 'puja description'},
  {name: 'pujsdadd2', description: 'puja description'},
];


class Home extends React.Component {
  static navigationOptions = {
    title: 'Home1',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Hello Home Page</Text>
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
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  list: {
   // flex:1
   backgroundColor: 'yellow',
   marginLeft:3,
   marginRight:3
  },
  container: {
    flex: 1,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    alignItems:'center',
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.black,
  },
});

export default Home;

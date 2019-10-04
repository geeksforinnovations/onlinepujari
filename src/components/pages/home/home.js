import React from 'react';
import {StyleSheet, View, Text, SectionList, FlatList} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaView} from 'react-navigation';
const availablePujas = [
  {name: 'puja1', description: 'puja description'},
  {name: 'puja2', description: 'puja description'},
];
const Puja = ({puja}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{puja.name}</Text>
    </View>
  );
};

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
  container: {
    flex: 1,
    marginTop: 51,
    marginHorizontal: 16,
    alignItems:"center"
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.black,
  },
});

export default Home;

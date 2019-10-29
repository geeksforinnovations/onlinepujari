import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Puja from '../../common/pujaCard/PujaCard';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SafeAreaView } from 'react-navigation';
import { Block, Input } from '../../core';
import Icon from 'react-native-vector-icons/FontAwesome5'
const availablePujas = [
  { id: 1, name: 'pujassd1', price: '2400', description: 'puja description', requiredTime: '5' },
  { id: 2, name: 'pujsdadd2', price: '2400', description: 'puja description', requiredTime: '15' },
];

class Home extends React.Component {
  static navigationOptions = {
    title: 'home'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <Block>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Input type="default" style={{ borderColor: 'blue' }} placeholder={'Search'} right
                icon="search1" family="antdesign" iconSize={25}
                onChangeText={(text) => { console.log(text) }}
                iconColor="skyblue" ></Input>
            </View>

            <FlatList
              style={styles.list}
              data={availablePujas}
              renderItem={({ item }) => {
                return <Puja puja={item} onClick={() => navigate('PujaDetails', { id: item.id })} />;
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

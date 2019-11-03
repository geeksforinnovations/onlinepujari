import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, View, FlatList } from 'react-native';
import Puja from '../../common/pujaCard/PujaCard';
// import { createAppContainer , StackActions} from 'react-navigation';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SafeAreaView, StackActions } from 'react-navigation';
import { Block, Input } from '../../core';
import { getAllPujas } from '../../../utils/apis'
import { updateAllPujas } from '../../../actions/pujas.actions';



class Home extends React.Component {

  onClickd(puja) {
    const pushAction = StackActions.push({
      routeName: 'PujaDetails',
      params: {
        selectedPuja: puja
      }
    });
    //this.props.navigation.openDrawer()
    this.props.navigation.navigate(pushAction)
  }
  async componentDidMount() {
    const results = await getAllPujas();
    console.log('res', results)
    this.props.updateAllPujas(results)

  }

  render() {
    const { navigate, dispatch } = this.props.navigation;

    return (
      <SafeAreaView style={styles.container}>
        <Block>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Input type="default" style={{ borderColor: '#2699FB' }} placeholder={'Search'} right
                icon="search1" family="antdesign" iconSize={25}
                onChangeText={(text) => { console.log(text) }}
                iconColor="#2699FB" ></Input>
            </View>

            <FlatList
              style={styles.list}
              data={this.props.availablePujas}
              renderItem={({ item }) => {
                return <Puja puja={item} onClick={() => this.onClickd(item)} />;
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
    // marginLeft: 3,
    // marginRight: 3,
    // backgroundColor: Colors.white,
    paddingHorizontal: 5
  },
  container: {
    flex: 1,
    backgroundColor: '#F1F9FF'
  },
  body: {
    // backgroundColor: Colors.white,
  },
  sectionContainer: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.black,
  },
});

const mapStateToProps = (state, ownProps) => ({
  availablePujas: state.pujas.availablePujas
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateAllPujas: (pujas) => dispatch(updateAllPujas(pujas))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);

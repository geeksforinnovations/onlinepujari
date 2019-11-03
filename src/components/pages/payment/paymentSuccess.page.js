import React from 'react';
import { StyleSheet, View } from 'react-native';
// import { createAppContainer , StackActions} from 'react-navigation';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SafeAreaView, StackActions } from 'react-navigation';
 import { Block, Input, Text } from '../../core';
import LottieView from 'lottie-react-native';
import { Button } from 'galio-framework';



class SuccessPage extends React.Component {


    gotoHome(){
        this.props.navigation.navigate("Home")
    }
    render() {
        const { navigate, dispatch } = this.props.navigation;

        return (

            <View style={styles.body}>
                <LottieView style={{ width: 300, height: 300 }} resizeMode="cover" source={require('../../../assets/payment_success.json')} autoPlay loop />
                <Text style={styles.successText}>Payment Success</Text>
                <Button onPress={()=> this.gotoHome()} style={styles.paymentButton}>Home</Button>
            </View>

        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F1F9FF'
    },
    body: {
        flex: 1,
        backgroundColor: '#BCE0FD',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 100
        // borderWidth: 4

    },
    paymentButton: {
       // alignSelf: 'stretch',
       // width: '100%',
        borderRadius: 5,
        paddingVertical:20,
        backgroundColor: '#2699FB'
    },
    primaryButton: {
        
    },
    successText:{
        fontSize:35,
        fontWeight:'bold',
        color:'#2699FB',
        marginVertical:50
    }
});



export default SuccessPage;

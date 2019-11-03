import React, { PureComponent } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, View, SafeAreaView, ScrollView } from 'react-native'
import { StackActions } from 'react-navigation'
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard'
import stripe, { PaymentCardTextField } from 'tipsi-stripe'
import Spoiler from '../../core/Spoiler'
import { Block, Input, Button, Text } from '../../core';
import { payment } from '../../../utils/apis'

const ContainerView = Platform.select({
    ios: KeyboardAvoidingView,
    onProgress: false,
    android: View,
})
export default class CardDetailss extends PureComponent {
    constructor(props) {
        super(props)
        this.onNameChange = this.onNameChange.bind(this)
        this.state = {
            valid: false,
            token: null,
            error: null,
            name: '',
            params: {
                number: '',
                expMonth: 0,
                expYear: 0,
                cvc: '',

            },
        }
    }
    continueToSuccess() {
        const pushAction = StackActions.push({
            routeName: 'SuccessPage',
            params: {
                message: 'payment success'
            }
        });
        this.props.navigation.navigate(pushAction)
    }

    toggleLoader(show) {
        this.setState({ onProgress: show })
    }

    async continueToPayment() {
        this.toggleLoader(true)
        let params = this.state.params;
        params.name = this.state.name;

        try {
            const token = await stripe.createTokenWithCard(params)
            const res = await payment(this.props.navigation.state.params.id, token.tokenId)
            this.toggleLoader(false)
            console.log('response is', res)
            this.reset()
            this.continueToSuccess()

            // console.log('succ', token)
        } catch (error) {
            console.log('err is', error)
            this.toggleLoader(false)
        }


    }


    handleFieldParamsChange = (valid, params) => {
        this.setState({
            valid,
            params,
        })
    }
    onNameChange(name) {
        this.setState({
            name: name
        })
    }
    reset() {
        this.setState(
            {
                valid: false,
                token: null,
                error: null,
                name: '',
                params: {
                    number: '',
                    expMonth: 0,
                    expYear: 0,
                    cvc: '',

                },

            })
    }



    render() {
        const { valid, params } = this.state

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Block style={{flex:1,justifyContent:'center'}}>
                        <ContainerView
                            behavior="padding"
                            style={styles.container1}
                            onResponderGrant={dismissKeyboard}
                            onStartShouldSetResponder={() => true}>
                            <View>
                                {/* <Text style={styles.header}>
                                    {JSON.stringify(this.state.token)}, {JSON.stringify(this.state.error)}
                                </Text> */}
                                {/* <Text style={styles.paymentText}>
                                    Card Details
              </Text> */}
                                <PaymentCardTextField
                                    accessible={false}
                                    style={styles.field}
                                    onParamsChange={this.handleFieldParamsChange}
                                    numberPlaceholder="XXXX XXXX XXXX XXXX"
                                    expirationPlaceholder="MM/YY"
                                    cvcPlaceholder="CVC"

                                />
                                <View style={styles.sectionContainer}>
                                    <Input type="email-address" placeholder={'Name on the Card'} right
                                        //onChangeText={(text) => { console.log(text) }}
                                        onChangeText={text => this.onNameChange(text)}
                                        value={this.state.name}
                                    ></Input>
                                </View>

                                <View style={styles.sectionContainer}>
                                   <Text style={styles.paymentText}>Amount to be paid: ${this.props.navigation.state.params.amount}</Text>
                                </View>
                                
                            </View>
                        </ContainerView>
                    </Block>
                </ScrollView>
                <View style={{ width: '100%' }}>
                    <Button
                        disabled={!this.state.valid}
                        color="info"
                        // onPress={() => { alert(1) }}
                        activeOpacity={.5}
                        loading={this.state.onProgress}
                        style={[styles.paymentButton, this.state.valid ? styles.primaryButton : styles.disabledButton]}
                        onPress={() => this.continueToPayment()} >Pay</Button>

                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    paymentButton: {
        alignSelf: 'stretch',
        width: '100%',
        borderRadius: 0,
    },
    primaryButton: {
        backgroundColor: '#2699FB'
    },
    disabledButton: {
        backgroundColor: '#7F7F7F'
    },
    container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        //justifyContent:'center',
       // alignContent:'center',
       // borderWidth:3
       // vert
        
    },
    container1: {
        justifyContent:'center',
        flex:1,
        flexDirection: 'column',
        marginVertical:100
       // flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        //justifyContent:'center',
       // alignContent:'center',
        //borderWidth:3
       // vert
        
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instruction: {
        textAlign: 'center',
        color: '#2699FB',
        marginBottom: 5,
    },
    token: {
        height: 20,
    },
    spoiler: {
        width: 300,
        color: '#2699FB'
    },
    sectionContainer: {
        alignItems: 'center',
        // paddingHorizontal: 24,
        marginVertical: 5,
    },
    params: {
        alignItems: 'flex-start',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 10,
        margin: 5,
    },
    field: {
        width: 300,
        color: '#2699FB',
        borderColor: '#2699FB',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
    },
    paymentText:{
        fontWeight:'bold',
        fontSize:20,
        color:'#2699FB',
        alignSelf:'center',
        marginBottom:30
    
    }
});



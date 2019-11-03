import React from 'react';
import { StyleSheet, View, FlatList, Picker, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SafeAreaView , StackActions} from 'react-navigation';
import { Block, Input, Button, Text } from '../core';
// import RNPickerSelect from 'react-native-picker-select';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

class CheckoutPage extends React.Component {

    continueToPayment() {
        const pushAction = StackActions.push({
            routeName: 'CardDetails',
            params:{
              id: this.props.navigation.state.params.selectedPuja.id,
              amount: this.props.navigation.state.params.selectedPuja.cost
            }
          });
          this.props.navigation.navigate(pushAction)
         //this.props.navigation.navigate('CardDetails')
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Block>
                        <View style={styles.body}>

                            <View style={styles.sectionContainer}>
                                <View style={{ width: '100%', borderColor: '#2699FB', borderWidth: 1, borderRadius: 10 }}>
                                    <Picker
                                        style={styles.pickerStyle}
                                        //selectedValue={this.state.language}
                                        onValueChange={(itemValue, itemPosition) => { alert(itemValue) }}>
                                        <Picker.Item label="Puja Type" value="" />
                                        <Picker.Item label="At Home" value="te" />
                                        <Picker.Item label="Online" value="en" />
                                    </Picker>
                                </View>
                            </View>
                            <View style={styles.sectionContainer}>
                                <View style={{ width: '100%', borderColor: '#2699FB', borderWidth: 1, borderRadius: 10 }}>
                                    <Picker
                                        style={styles.pickerStyle}
                                        //selectedValue={this.state.language}
                                        onValueChange={(itemValue, itemPosition) => { alert(itemValue) }}>
                                        <Picker.Item label="Language" value="" />
                                        <Picker.Item label="Telugu" value="te" />
                                        <Picker.Item label="English" value="en" />
                                        <Picker.Item label="Hindi" value="en" />
                                        <Picker.Item label="Tamil" value="en" />
                                        <Picker.Item label="Malayalam" value="en" />
                                    </Picker>
                                </View>

                            </View>
                            <View style={styles.sectionContainer}>
                                <Input type="default" placeholder={'Name'} right
                                    onChangeText={(text) => { console.log(text) }}
                                ></Input>
                            </View>

                            <View style={styles.sectionContainer}>
                                <Input type="email-address" placeholder={'Phone Number'} right
                                    onChangeText={(text) => { console.log(text) }}
                                ></Input>
                            </View>
                            <View style={styles.sectionContainer}>
                                <Input family="antdesign" iconColor={"#2699FB"} icon={"calendar"} type="email-address" placeholder={'Date & Time'} right
                                    onChangeText={(text) => { console.log(text) }}
                                ></Input>
                            </View>
                            <View style={styles.sectionContainer}>
                                <Input type="email-address" placeholder={'Address Line1'} right
                                    onChangeText={(text) => { console.log(text) }}
                                ></Input>
                            </View>
                            <View style={styles.sectionContainer}>
                                <Input type="email-address" placeholder={'Address Line 2'} right
                                    onChangeText={(text) => { console.log(text) }}
                                ></Input>
                            </View>
                            <View style={styles.sectionContainer}>
                                <Input type="email-address" placeholder={'City'} right
                                    onChangeText={(text) => { console.log(text) }}
                                ></Input>
                            </View>
                            <View style={styles.sectionContainer}>
                                <Input type="email-address" placeholder={'State'} right
                                    onChangeText={(text) => { console.log(text) }}
                                ></Input>
                            </View>
                        </View>
                        <View style={styles.amountContainer} >
                            <Text style={styles.amount}>Total Amount : ${this.props.navigation.state.params.selectedPuja.cost}</Text>
                        </View>

                    </Block>

                </ScrollView>

                <View style={{}}>
                    <Button
                        color="info"
                        onPress={() => { alert(1) }}
                        activeOpacity={.5}
                        loading={false}
                        style={{ alignSelf: 'stretch', width: '100%', borderRadius: 0, backgroundColor: '#2699FB' }}
                        onPress={() => this.continueToPayment()} >Continue To Payment</Button>
                </View>
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
    scrollView: {

    },
    container: {
        flex: 1,
    },
    pickerStyle: {
        height: 50,
        width: "100%",
        color: '#2699FB',
        // justifyContent: 'center',  
        borderWidth: 1,
        borderColor: '#2699FB',
        padding: 1,
        margin: 1,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        alignItems: 'center',
        paddingHorizontal: 24,
        marginVertical: 5,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.black,
    },
    amountContainer: {
        //flex:1
        alignItems: 'center',
        height: 50,
    },
    amount: {
        color: '#2699FB',
        fontWeight:'bold',
        fontSize:20
    }
});

export default CheckoutPage;

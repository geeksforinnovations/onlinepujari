import React from 'react';
import { StyleSheet, View, FlatList, Picker, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SafeAreaView } from 'react-navigation';
import { Block, Input } from '../core';
import RNPickerSelect from 'react-native-picker-select';

class CheckoutPage extends React.Component {
    static navigationOptions = {
        title: 'Checkout',
        headerStyle: {
            backgroundColor: 'transparent',
        },
        // headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Block>
                        <View style={styles.body}>
                            <View style={styles.sectionContainer}>
                                <Input type="default" style={{ borderColor: 'blue' }} placeholder={'Name'} right
                                    onChangeText={(text) => { console.log(text) }}
                                ></Input>
                            </View>
                            <View style={styles.sectionContainer}>
                                <Input type="numeric" style={{ borderColor: 'blue' }} placeholder={'Language'} right

                                    onChangeText={(text) => { console.log(text) }}
                                ></Input>
                            </View>
                            <View style={styles.sectionContainer}>
                                <Input type="email-address" style={{ borderColor: 'blue' }} placeholder={'Phone Number'} right
                                    onChangeText={(text) => { console.log(text) }}
                                ></Input>
                            </View>

                            <View style={styles.sectionContainer}>
                                <View style={{ width: '100%', borderColor: 'blue', borderWidth: 1, borderRadius: 10 }}>


                                    <Picker
                                        style={styles.pickerStyle}
                                        //selectedValue={this.state.language}
                                        onValueChange={(itemValue, itemPosition) => { alert(itemValue) }}>
                                        <Picker.Item label="Java" value="java" />
                                        <Picker.Item label="JavaScript" value="js" />
                                        <Picker.Item label="React Native" value="rn" />
                                    </Picker>
                                </View>
                            </View>


                        </View>
                    </Block>
                </ScrollView>
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
        color: 'red',
        // justifyContent: 'center',  
        borderWidth: 1,
        borderColor: 'blue',
        padding: 1,
        margin: 1,
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

export default CheckoutPage;


import React from 'react';
import { StyleSheet, View, Text, SectionList, FlatList } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const Puja = ({ puja }) => {
    return (
        <View style={styles.sectionContainer}>
            <View style={styles.imageContainer}>
                <Text style={styles.sectionTitle}>img here</Text>
            </View>
            <View style={styles.detailsConatiner}>
                <Text style={styles.pujaName}>aksharabyasam</Text>
                <Text style={styles.priceText}>2500/-</Text>
                <Text style={styles.timeText}>Total Time : 5Hrs</Text>
            </View>

        </View>
    );
};


const styles = StyleSheet.create({
   
    sectionContainer: {
       flex: 1,
       flexDirection: 'row',
       borderColor: 'green',
       borderWidth: 1,
       marginVertical:5,
       height:80,
       
    },
    imageContainer: {
        borderColor: 'black',
        borderWidth: 1,
        width:80
    },
    detailsConatiner: {
        borderColor: 'red',
        borderWidth: 1,
        flex:1,
        paddingHorizontal:6,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.black,
    },
    pujaName: {
        color: 'red',
        fontWeight:'bold',
        fontSize: 16,
        marginVertical:1
    },
    priceText: {
        fontSize: 16,
        marginVertical:1
    },
    timeText: {
        fontSize: 13,
        marginVertical:1
    }
});

export default Puja
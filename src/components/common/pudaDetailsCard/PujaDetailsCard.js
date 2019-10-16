
import React from 'react';
import { StyleSheet, View, Text, SectionList, FlatList } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const PujaDetailsCard = ({ puja }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Text style={styles.sectionTitle}>img here</Text>
            </View>
            <View style={styles.actionsContainer}>
                <Text style={styles.sectionTitle}>actions here</Text>
            </View>
            <View style={styles.detailsConatiner}>

                <View style={styles.aboutPujaWrapper}>
                    <Text style={styles.sectionTitle}>about puja jere</Text>
                </View>
                <View style={styles.pujaDescription}>
                    <Text style={styles.sectionTitle}>Puja description</Text>
                </View>
                <Text style={styles.pujaName}>details</Text>
                <Text style={styles.priceText}>2500/-</Text>
                <Text style={styles.timeText}>Total Time : 5Hrs</Text>
            </View>

        </View>
    );
};


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    actionsContainer: {
        flex: 1,
        height:50,
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center'
    },
    imageContainer: {
        flex: 1,
        backgroundColor: 'blue',
        height:150
    },
    detailsConatiner: {
        flex: 1,
        
    },
    aboutPujaWrapper:{
        flex:1,
        borderWidth:1,
        borderColor:'red',
        height:100,
    },
    pujaDescription: {
        flex:1
    }
});

export default PujaDetailsCard
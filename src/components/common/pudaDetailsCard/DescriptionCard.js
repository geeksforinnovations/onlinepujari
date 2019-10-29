import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';



const DescriptionCard = ({ title , children}, props) => {
   return( <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.details}>{children}</View>
    </View>)
}

const styles = StyleSheet.create({
    container:{
        margin:10,

    },
    title:{
        color:'#2699FB', 
        fontWeight:"bold",
        marginBottom:10
    },
    details:{
        
    }
});
export default DescriptionCard;
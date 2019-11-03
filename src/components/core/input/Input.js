import React from 'react';
import { StyleSheet } from 'react-native'
import { Input } from 'galio-framework';

const G4I_Input = props => {
  return <Input color={"#2699FB"} placeholderTextColor={"#2699FB"} color={"#2699FB"} style={styles.inputContainer}  {...props}></Input>;
};

const styles = StyleSheet.create({
  inputContainer: {
    height: 50,
    borderColor: '#2699FB',
    borderWidth:1,
    
  }
})
export default G4I_Input
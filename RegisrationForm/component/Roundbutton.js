
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  Alert,
  View,
  TouchableOpacity,
} from 'react-native';

const Roundbutton = props => {
    return(
    <View style={styles.container}>
             <TouchableOpacity onPress={() => alert('Hi😊😉 you Pressed SUBMIT')}>
               <Text style={{fontSize:30,color:'white'}}> {props.title} </Text>
             </TouchableOpacity>
    </View>
)}

const styles = StyleSheet.create({
    container:{
      backgroundColor: 'cyan',
      height: '10%',
      width: '40%',
      borderRadius: 40,
      alignItems: "center",
      justifyContent: "center"
    }
    
        
});

export default Roundbutton;
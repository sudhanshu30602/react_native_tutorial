
import React, {Component, PropTypes,useState } from 'react';
import {
  StyleSheet,
  Text,
  Alert,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';


const EditText = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>{props.title}</Text>
            <TextInput 
                placeholder={props.placename}
                onChangeText={props.onChange}
                value={props.value}
                secureTextEntry={props.bool}
               // {...props}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        borderColor: 'blue',
        borderBottomWidth: 1
    },
    text1: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black'
    }
});


export default EditText;
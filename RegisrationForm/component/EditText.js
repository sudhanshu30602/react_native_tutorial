
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
        <View>
            <Text style={styles.text1}>{props.title}</Text>
            <TextInput 
                placeholder="Enter Your Name"
                onChangeText={props.onChange}
                value={props.value}
                style={styles.container}
                {...props}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 2,
        width: '90%',
        borderColor: 'skyblue',
    },
    text1: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'black'
    }
});


export default EditText;
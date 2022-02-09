
import React, { Component, PropTypes, useState } from 'react';
import {
    StyleSheet,
    Text,
    Alert,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

const Socialicon = props => {
    return (
        
            <TouchableOpacity>
                <Image source={props.icons} style = {styles.buttonIcon} />
            </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    buttonIcon: {
        height: 25,
        width: 25,
        borderRadius: 10,
        marginHorizontal: 8,
       
      },
        
});

export default Socialicon;
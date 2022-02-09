
import React, { Component, PropTypes, useState } from 'react';
import {
    StyleSheet,
    Text,
    Alert,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

const Menu = props => {
    return (
        <View>
            <Image
                style={styles.image}
                source={props.sources}
                title = {props.title}
                resizeMode={"cover"} 
            />
        </View>
    )
}
export default Menu;

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        // overflow: "hidden",//
        borderWidth: 3,
        borderColor: "red"
      }
  });
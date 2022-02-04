
import React,{ Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert, 
  Button,

}from 'react-native';

/*
const App = () =>{
    return(
    <View style = {styles.container}>
      <Text style = {styles.text}> Hello, World !</Text>
    </View>
    )
}
*/

/*
const App = () => {
  return (
     <View style = {styles.container}>
        <View style = {[styles.item,{backgroundColor:'green'}]} />
        <View style = {[styles.item,{backgroundColor:'blue'}]} />
        <View style = {[styles.item,{backgroundColor:'red'}]} />
     </View>
  )
}

export default App;

// const styles = StyleSheet.create({
//    container: {
//     flex : 1,
//    c
//     backgroundColor : "black"
//    },
//    box: {
//       width: 100,
//       hegiht: 100
//    }
// });

const styles = StyleSheet.create ({
  container: {
     flexDirection: 'column',
     alignItems: "center",
     justifyContent: "space-around",
     height: 700
  },
  item:{
    width:50,
    height:50,
  }
});
*/
//

const APP = () => {
  return (
    <View style={{ flex: 2 }}> 
      <View style={{ flex: 1, backgroundColor: 'yellow' }} />
      <View style={{ flex: 2, backgroundColor: 'red' }} />
      <View style={{ flex: 2, backgroundColor: 'green' }} />
    </View>
  );
};
   

export default APP

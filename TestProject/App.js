
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
//     flexDirection: 'column',
//     alignItems : "center",
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

const App = () => {
   // const[name, setname] = useState('');
    const [text, setText] = useState('');
    // change of test feature
    //const[age, setage] = useState('');
    return (
      <View>
       <TextInput
        style={{height: 40}}
        placeholder="Enter Your Name :"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
       <Text style={{justifyContent: "space-around", fontSize: 42}}>
         Name : {text}</Text>
         <Button
        title="Press me"
        onPress={() => Alert.alert(`Hello ${text}`)}
      />
       <Button
        title="Press me"
        onPress={() => Alert.alert('hello' + text)}
      />
      </View>
    )
}

export default App;


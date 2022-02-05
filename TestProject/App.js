
import React,{ Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert, 
  Image,
  Button,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
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

//  const APP = () => {
//    return (
//      <View style = {styles.container}> 
//         <Image source={require('./src/assets/test.png')}  style={{ width: 200, height: 200, alignItems: "flex-start"}} /> 
//         <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
//         style={{width: 200, height: 200}} />
//      </View>
//    )
//  }
//  export default APP


//  const styles = StyleSheet.create({
//      container: {
//      flex : 1,
//      alignItems : "center",
//      justifyContent : "space-evenly"
//      },
//    });



// const APP = () => {
//   return (
//     <View style = {styles.container}> 
//       <Text style = {styles.text} onPress={() => {
//         alert('You tapped the button!');
//        }}> 
//       Press Me
//       </Text> 
//     </View>
//   )
// }
// export default APP

// const styles = StyleSheet.create({
//        container: {
//        flex : 1,
//        alignItems : "center",

//        justifyContent: "center"
//        },
//        text: {
//         fontWeight: 'bold',
//         fontSize: 30,
//        }
//    });


// Text in box comes alert

 const APP = () => {
  return (      
      <View style={styles.container}>
      <View style={styles.button}> 
       <TouchableOpacity onPress={() => alert('Hello 😊😉 !')} style={styles.button}>
            <Text style={styles.text}> SUBMIT </Text> 
      </TouchableOpacity>
       </View>  
     </View> 
   );
 }
 export default APP

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems : 'center'
  },

  button: {    
    backgroundColor:'red',
     height : '10%',
     width: '90%',
     alignItems: 'center',
     borderRadius: 50,
    justifyContent: "center"
    },
  text: {
      fontWeight: 'bold',
         fontSize: 20,
         color: 'yellow',
         
    }
}); 
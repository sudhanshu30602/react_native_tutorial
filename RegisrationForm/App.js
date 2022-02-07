/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  useColorScheme,
  Alert,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

// const image = { uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png"};

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const image = { uri: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" };
  return (
    <ImageBackground source={image} style={styles.image}>
      
      <Text style={styles.text}>Registration</Text>
      <View style={styles.container}>
        <Text style={styles.text1}> Name: </Text>
        <TextInput
          placeholder="Enter Your Name"
          onChangeText={newText => setName(newText)}
          defaultValue={name}
          style={{borderBottomWidth:1}}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.text1}> Email: </Text>
        <TextInput
          placeholder="Enter Your Email"
          onChangeText={newText => setEmail(newText)}
          defaultValue={email}
          style={{borderBottomWidth:1}}

        />
      </View>
      <View style={styles.container}>
        <Text style={styles.text1}> Phone Number: </Text>
        <TextInput
          placeholder="Enter Your Phone no."
          onChangeText={newText => setNumber(newText)}
          defaultValue={number}
          style={{borderBottomWidth:1}}

        />
      </View>
      <View style={styles.container}>
        <Text style={styles.text1}> Password: </Text>
        <TextInput
          placeholder="Enter Your Password"
          onChangeText={newText => setPassword(newText)}
          defaultValue={password}
          style={{borderBottomWidth:1}}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => alert('Successfuly Resgistered!! 😊😉')}>
          <Text style={styles.text1}> SUBMIT </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

export default App;


const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '10%',
    borderColor: 'skyblue'
  },
  text: {
    fontSize: 50,
    color: 'yellow'
  },
  button: {
    backgroundColor: 'blue',
    height: '10%',
    width: '40%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white'
  },
  image: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
});
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
  CheckBox,
  StyleSheet,
  Text,
  Alert,
  Modal,
  Pressable,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  TextInput,
  ImageBackground,
} from 'react-native';
import EditText from './component/EditText';
import Roundbutton from './component/Roundbutton';
import Socialicon from './component/icon';
import Menu from './component/menu';
// import PropTypes from 'prop-types'

// // const image = { uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png"};

// const App = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [number, setNumber] = useState('');
//   const [password, setPassword] = useState('');
//   const image = { uri: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" };
//   return (
//     <ImageBackground source={image} style={styles.image}>

//       <Text style={styles.text}>Registration</Text>
//       <View style={styles.container}>
//         <Text style={styles.text1}> Name: </Text>
//         <TextInput
//           placeholder="Enter Your Name"
//           onChangeText={newText => setName(newText)}
//           defaultValue={name}
//           style={{borderBottomWidth:1}}
//         />
//       </View>
//       <View style={styles.container}>
//         <Text style={styles.text1}> Email: </Text>
//        <TextInput
//           placeholder="Enter Your Email"
//           onChangeText={newText => setEmail(newText)}
//           defaultValue={email}
//           style={{borderBottomWidth:1}}

//         />
//       </View>
//       <View style={styles.container}>
//         <Text style={styles.text1}> Phone Number: </Text>
//         <TextInput
//           placeholder="Enter Your Phone no."
//           onChangeText={newText => setNumber(newText)}
//           defaultValue={number}
//           style={{borderBottomWidth:1}}

//         />
//       </View>
//       <View style={styles.container}>
//         <Text style={styles.text1}> Password: </Text>
//         <TextInput
//           placeholder="Enter Your Password"
//           onChangeText={newText => setPassword(newText)}
//           defaultValue={password}
//           style={{borderBottomWidth:1}}
//           secureTextEntry={true}
//         />
//       </View>
//       <View style={styles.button}>
//         <TouchableOpacity onPress={() => alert('Successfuly Resgistered!! 😊😉')}>
//           <Text style={styles.text1}> SUBMIT </Text>
//         </TouchableOpacity>
//       </View>
//     </ImageBackground>
//   )
// }

// export default App;


// const styles = StyleSheet.create({
//   container: {
//     width: '90%',
//     height: '10%',
//     borderColor: 'skyblue'
//   },
//   text: {
//     fontSize: 50,
//     color: 'yellow'
//   },
//   button: {
//     backgroundColor: 'blue',
//     height: '10%',
//     width: '40%',
//     borderRadius: 30,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   text1: {
//     fontWeight: 'bold',
//     fontSize: 25,
//     color: 'white'
//   },
//   image: {
//     flex: 1,
//     justifyContent: 'space-evenly',
//     alignItems: 'center'
//   }
// });


// const App = () => {
//   return(

//   <View style={styles.container}>
//            <TouchableOpacity onPress={() => alert('Hi😊😉 you Pressed SUBMIT')}style={styles.button}>
//              <Text style={styles.text1}> SUBMIT </Text>
//            </TouchableOpacity>

//            <TouchableOpacity onPress={() => alert('Hi😊😉 you Pressed Press ME')}style={styles.button}>
//              <Text style={styles.text1}> Press Me </Text>
//            </TouchableOpacity>

//            <TouchableOpacity onPress={() => alert('Hi😊😉 you Pressed Enter Me')}style={styles.button}>
//              <Text style={styles.text1}> Enter Me </Text>
//            </TouchableOpacity>
//            <TouchableOpacity onPress={() => alert('Hi😊😉 you Pressed Tap')}style={styles.button}>
//              <Text style={styles.text1}> Tap ME </Text>
//            </TouchableOpacity>
//   </View>
//   )
// }
// export default App;

// const styles = StyleSheet.create({
//   button: {
//          backgroundColor: 'blue',
//          height: '10%',
//          width: '40%',
//          borderRadius: 30,
//          alignItems: 'center',
//          justifyContent: 'center'
//        },
//   container:{
//     justifyContent:'center',
//     alignItems:'center'
//   }
// });


// const App = () =>{
//      return (
//        <View style={{flex:1}}>
//        
//          </View>
//      )
// }


// // export default App;
// Component.propTypes = {
//   title: PropTypes.string.isRequired,
//   value: PropTypes.string
// };


// const App = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [number, setNumber] = useState('');
//   const [password, setPassword] = useState('');
//   return (
//     <View style={styles.conatiner}>
//       <EditText title='Nane:' onChange={text => setName(text)} value={1265} />
//       <EditText title='Email:' onChange={text => setEmail(text)} value={email} />
//       <EditText title='Number:' onChange={text => setNumber(text)} value={number} />
//       <EditText title='password:' onChange={text => setPassword(text)} value={password} secureTextEntry={true} />

//     </View>
//   )
// }


// export default App;

// const styles = StyleSheet.create({
//   conatiner: {
//     alignItems: "center",
//     justifyContent: "space-evenly"
//   }
// });

// const App = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <View style={styles.centeredView}>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert("Modal has been closed.");
//           setModalVisible(!modalVisible);
//         }}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>Hello World😁😂😂😁!</Text>
//             <Pressable
//               style={[styles.button, styles.buttonClose]}
//               onPress={() => setModalVisible(!modalVisible)}
//             >
//               <Text style={styles.textStyle}>Hide Modal</Text>
//             </Pressable>
//           </View>
//         </View>
//       </Modal>
//       <Pressable
//         style={[styles.button, styles.buttonOpen]}
//         onPress={() => setModalVisible(true)}
//       >
//         <Text style={styles.textStyle}>Show Modal</Text>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22,

//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "skyblue",
//     borderRadius: 20,
//     padding: 100,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 4,
//       height: 8
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2
//   },
//   buttonOpen: {
//     backgroundColor: "#F194FF",
//   },
//   buttonClose: {
//     backgroundColor: "#2196F3",
//   },
//   textStyle: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center"
//   },
//   modalText: {
//     marginBottom: 15,
//     fontSize : 40,
//     textAlign: "center"
//   }
// });

// export default App;




// //************(**((********8)))
// // login form

// const image = { uri: "https://upload.wikimedia.org/wikipedia/en/8/8b/Purplecom.jpg" };

// const fb = { uri: "https://image.flaticon.com/icons/png/512/1076/1076990.png?w=740" };

// const google = { uri: "https://www.sketchappsources.com/resources/source-image/google-g-logo.jpg" };

// const twitter = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgG3sQOmmsaW7wffjnuo_zCHHSTjqsUpiEFA&usqp=CAU" };

// const App = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   return (

//     <ImageBackground source={image} style={styles.image}>
//       <View style={styles.conatiner}>
//         <Image
//           style={styles.imageLogo}
//           source={{
//             uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT75ULL5H__OxAyqJHrGl6NHYILXNKDQqf0fg&usqp=CAU',
//           }}
//         />
//         <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>Vision Go</Text>
//       </View>
//       <View style={styles.content}>
//         <View>
//           <Text style={styles.form}>Login Form</Text>
//         </View>
//         <View style={styles.set}>
//           <Text style={styles.text1}> Email: </Text>
//           <TextInput
//             placeholder="Enter Your email."
//             onChangeText={text => setEmail(text)}
//             defaultValue={email}
//           />
//         </View>

//         <View style={styles.set}>
//           <Text style={styles.text1}> Password: </Text>
//           <TextInput
//             placeholder="Enter Your Password"
//             onChangeText={text => setPassword(text)}
//             defaultValue={password}
//             secureTextEntry={true}
//           />
//         </View>

//         {/* <View style={styles.checkboxContainer}>
//         <CheckBox
//           value={isSelected}
//           onValueChange={setSelection}
//          style={styles.checkbox}
//         />
//         <Text style={styles.label}>Do you like React Native?</Text>
//       </View>  */}

//         <View style={styles.button}>
//           <TouchableOpacity onPress={() => alert('You Login in it😂🤣😁')}>
//             <Text style={{ fontSize: 20, color: 'black' }}>Submit </Text>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.icon}>
//           <TouchableOpacity>
//             <Image source={fb} style={styles.buttonIcon} />
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Image source={google} style={styles.buttonIcon} />
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Image source={twitter} style={styles.buttonIcon} />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ImageBackground>
//   )
// }

// const styles = StyleSheet.create({
//   conatiner: {
//     flex: 0.3,
//     // color: 'white',
//     alignItems: 'center',
//     justifyContent: 'center'

//   },
//   image: {
//     flex: 1
//   },
//   content: {
//     flex: 0.7,
//     backgroundColor: 'white',
//     borderTopRightRadius: 50,
//     borderTopLeftRadius: 50,
//     alignItems: 'center',
//     justifyContent: 'space-evenly'

//   },
//   form: {
//     fontSize: 25,
//     fontWeight: 'bold',
//     color: 'black'
//   },
//   set: {
//     width: '80%',
//     borderColor: 'blue',
//     borderBottomWidth: 1
//   },
//   text1: {
//     fontWeight: 'bold',
//     fontSize: 20,
//     color: 'black'
//   },
//   button: {
//     backgroundColor: 'cyan',
//     height: '10%',
//     width: '40%',
//     borderRadius: 40,
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   buttonIcon: {
//     height: 25,
//     width: 25,
//     borderRadius: 10,
//     marginHorizontal: 8
//   },
//   icon: {
//     flexDirection: 'row',
//     marginVertical: 5
//   },
//   imageLogo: {
//     height: 80,
//     width: 80,
//     borderRadius: 50,
//   }
// });

// export default App;






//************(**((********8)))
// login form with help of Components

// const image = { uri: "https://upload.wikimedia.org/wikipedia/en/8/8b/Purplecom.jpg" };

// const fb = { uri: "https://image.flaticon.com/icons/png/512/1076/1076990.png?w=740" };

// const google = { uri: "https://www.sketchappsources.com/resources/source-image/google-g-logo.jpg" };

// const twitter = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgG3sQOmmsaW7wffjnuo_zCHHSTjqsUpiEFA&usqp=CAU" };

// const App = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   return (

//     <ImageBackground source={image} style={styles.image}>
//       <View style={styles.conatiner}>
//         <Image
//           style={styles.imageLogo}
//           source={{
//             uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT75ULL5H__OxAyqJHrGl6NHYILXNKDQqf0fg&usqp=CAU',
//           }}
//         />
//         <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>Vision Go</Text>
//       </View>
//       <View style={styles.content}>
//         <View>
//           <Text style={styles.form}>Login Form</Text>
//         </View>
//         <EditText
//           title=" Email :"
//           onChange={text => setEmail(text)}
//           cont={email}
//           placename="Enter your Email"
//         />
//         <EditText
//           title=" Password :"
//           onChange={text => setPassword(text)}
//           cont={password}
//           bool = {true}
//           placename="Enter your password"
//         />
//         <Roundbutton
//           title='Submit' />
//       <View style={styles.icon}>
//         <Socialicon
//           icons={fb} />
//         <Socialicon
//           icons={twitter} />
//         <Socialicon
//           icons={google} />
//         </View>
//       </View>
//     </ImageBackground>

//   )
// }

// export default App;



// const styles = StyleSheet.create({
//   conatiner: {
//     flex: 0.3,
//     // color: 'white',
//     alignItems: 'center',
//     justifyContent: 'center'

//   },
//   image: {
//     flex: 1
//   },
//   content: {
//     flex: 0.7,
//     backgroundColor: 'white',
//     borderTopRightRadius: 50,
//     borderTopLeftRadius: 50,
//     alignItems: 'center',
//     justifyContent: 'space-evenly'
//   },
//   form: {
//     fontSize: 25,
//     fontWeight: 'bold',
//     color: 'black'
//   },
//   imageLogo: {
//     height: 80,
//     width: 80,
//     borderRadius: 50,
//   },
//   icon: {
//     flexDirection: 'row',
//     marginVertical: 5
//    }

// });



// // WhatsApp menu

// const image = { uri: "https://upload.wikimedia.org/wikipedia/en/8/8b/Purplecom.jpg" };
  
// const App = () =>{
//     return(
//         <View style={styles.container}>
//         <FlatList 
//        //horizontal
//         data={[
//           {key: 'Devin'},
//           {key: 'Dan'},
//           {key: 'Dominic'},
//           {key: 'Jackson'},
//           {key: 'James'},
//           {key: 'Joel'},
//           {key: 'John'},
//           {key: 'Jillian'},
//           {key: 'Jimmy'},
//           {key: 'Julie'},
//           {key: 'Devin'},
//           {key: 'Dan'},
//           {key: 'Dominic'},
//           {key: 'Jackson'},
//           {key: 'James'},
//           {key: 'Joel'},
//           {key: 'John'},
//           {key: 'Jillian'},
//           {key: 'Jimmy'},
//           {key: 'Julie'},
//         ]} 
//         numColumns ={2}
//         renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
//         />
//     </View>
       
//     )
// }
// export default App;

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//   },
//   item: {
//     padding: 10,
//     marginLeft:90,
//     fontSize: 18,
//     height: 44,
//   },
// });


//******************************###################### */
// In App.js in a new project

// /// Workin on multiple Screens
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Text>😎😎😎</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function DetailsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Scren</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() => navigation.push('Details')}
//       />
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//       <Button
//         title="Go back to first screen in stack"
//         onPress={() => navigation.popToTop()}
//       />
//     </View>
//   );
// }


// function CentalScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() => navigation.push('Details')}
//       />
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//         <Stack.Screen name="Cental" component={CentalScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

//************************################################ */

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => {
//           /* 1. Navigate to the Details route with params */
//           navigation.navigate('Details', {
//             itemId: 86,
//             otherParam: 'anything you want here',
//           });
//         }}
//       />
//     </View>
//   );
// }

// function DetailsScreen({ route, navigation }) {
//   /* 2. Get the param */
//   const { itemId } = route.params;
//   const { otherParam } = route.params;
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <Text>itemId: {JSON.stringify(itemId)}</Text>
//       <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() =>
//           navigation.push('Details', {
//             itemId: Math.floor(Math.random() * 100),
//           })
//         }
//       />
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


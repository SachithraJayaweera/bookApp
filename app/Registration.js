import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React, {useState} from "react";
import { useNavigation } from "@react-navigation/native";
import {firebase } from "../FirebaseConfig";

const Registration = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    registerUser = async(email, password, firstName, lastName) =>{
        await firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(()=>{
            firebase.auth().currentUser.sendEmailVerification({
                handleCodeInApp: true,
                URL: 'https://book-app-87cac.firebaseapp.com',
            })
            .then(()=>{
                alert('Verification email sent')
            }).catch((error) =>{
                alert(error.message)
            })
            .then(()=>{
                firebase.firestore().collection('users')
                .doc(firebase.auth().currentUser.uid)
                .set({
                    firstName,
                    lastName,
                    email,
                })
            })
            .catch((error) => {
                alert(error.message)
            })
        })

        .catch((error) => {
            alert(error.message)
        })
    }

    return(
        <View style = {styles.container}>
        <Text style = {{fontWeight: 'bold', fontSize:23}}>
            Register Here!!!
        </Text>
        <View style = {{marginTop:40}}>
            <TextInput
              style = {styles.TextInput}
              placeholder = "FirstName"
              onChangeText = {(firstName)=> setFirstName(firstName)}
              autoCorrect = {false}
            />
  
            <TextInput
              style = {styles.TextInput}
              placeholder = "LastName"
              onChangeText = {(lastName)=> setLastName(lastName)}
              autoCorrect = {false}
            />

            <TextInput
              style = {styles.TextInput}
              placeholder = "Email"
              onChangeText = {(email)=> setEmail(email)}
              autoCorrect = {false}
              autoCapitalize="none"
              keyboardType="email-address"
            />

            <TextInput
              style = {styles.TextInput}
              placeholder = "Password"
              onChangeText = {(password)=> setPassword(password)}
              autoCorrect = {false}
              autoCapitalize="none"
              secureTextEntry= {true}
            />

        </View>
  
        <TouchableOpacity
          onPress = {() => registerUser(email, password, firstName, lastName)}
          style = {styles.button}
        >
          <Text style = {{fontWeight:'bold', fontSize:22}}>Register</Text>
        </TouchableOpacity>
  
      </View>
    )
}  

export default Registration;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 100,
    },
    TextInput: {
      paddingTop: 20,
      paddingBottom:10,
      width:400,
      fontSize:20,
      borderBottomWidth:1,
      borderBottomColor:'#000',
      marginBottom:10,
      textAlign: 'center'
    },
    button:{
      marginTop: 50,
      height:70,
      width:250,
      backgroundColor: '#26efd',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
    }
  
  })
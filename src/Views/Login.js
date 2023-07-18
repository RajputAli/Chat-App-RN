import { View, Text, Button, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { auth } from '../Config/firebase';
import { signInWithEmailAndPassword} from 'firebase/auth';




export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errormessage, setErrorMessage] = useState("");
  // useEffect(() =>{
  //     const unsubscribe = auth.onAuthStateChanged(function (user) {
  //         if (user) {
  //           // User is signed in, see docs for a list of available properties
  //           // https://firebase.google.com/docs/reference/js/auth.user
  //           const uid = user.uid;
  //           // ...
  //         } else {
  //           // User is signed out
  //           // ...
  //         }
  //       });
  //       return unsubscribe
  // },[])

  const handlePress = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
        navigation.push("dashboard")
        alert("Login Sucess Fully")
        setErrorMessage("")
      }).catch((error) => {
        console.log(error)
        setErrorMessage("Fill All The Fields")
      })
  }


  const handleScreen = () => {
    navigation.push("signup")
  }

  return (


    <ScrollView>
      <View style={{
        height: 900,
        alignItems: "center",
        backgroundColor: "#7b7c7b"
      }}>
        <Image source={require('../../assets/7542181.png')}
          style={{
            width: 150,
            height: 150,
            alignItems: "center",
            marginTop: 120,
            borderRadius: 80
          }} />
        <View>
          <Text style={{
            fontSize: 30,
            paddingLeft: 70,
            paddingTop: 10,
            color: "#000"
          }}>
            Login Page
          </Text>
          <Text style={{
            marginTop: 10,
            fontSize: 20,
            color: "#000"
          }}>Email</Text>
          <TextInput onChangeText={(text) => setEmail(text)} value={email} placeholder="Enter Your Email" require style={{
            borderWidth: 1,
            borderRadius: 4,
            width: 300,
            height: 40,
            paddingLeft: 5,
            color: "#000"
          }} />
          <Text style={{
            marginTop: 10,
            fontSize: 20,
            color: "#000"
          }}>Password</Text>
          <TextInput onChangeText={(text) => setPassword(text)} value={password} placeholder="Enter Your Password" secureTextEntry
            style={{
              borderWidth: 1,
              borderRadius: 4,
              width: 300,
              height: 40,
              paddingLeft: 5,
              color: "#000"
            }} />
          <Text style={{
            color: 'red',
            margin: 5,
            paddingLeft: 82
          }}>{errormessage}</Text>
          <TouchableOpacity>
            <Button title="Log in" onFormSubmit={Login} onPress={handlePress} style={{
              alignItems: "center",
              fontSize: 50
            }} color="#000"></Button>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleScreen}>
            <Text style={{
              color: "red",
              marginTop: 10,
              marginLeft: 53,
              fontSize: 18
            }}>Create A New Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

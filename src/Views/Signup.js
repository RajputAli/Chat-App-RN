import { View, Button, Text, TextInput, Image, ScrollView, TouchableOpacity, Alert } from "react-native"
import { auth } from "../Config/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"


export default function Signup({ navigation }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handlePress1 = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                navigation.push("login")
                alert('Signu Up Sucess Fully')
                setName("")
                setEmail("")
                setPassword("")
                setErrorMessage("")
                console.log(userCredential)
            }).catch((error) => {
                console.log(error)
                Alert.alert("Email Already Reigister")
                // setErrorMessage("Fill All The Fields")
            })
    }

    const handlePress2 = () => {
        navigation.push("login")
    }


    return (
        <ScrollView>
            <View style={{ backgroundColor: "#7b7c7b", height: 900, alignItems: "center" }}>
                <Image source={require('../../assets/7542181.png')}
                    style={{
                        width: 150,
                        height: 150,
                        alignItems: "center",
                        marginTop: 80,
                        borderRadius: 100
                    }} />
                <View style={{ marginTop: 10 }}>
                    <Text style={{
                        fontSize: 30,
                        paddingLeft: 100,
                        color: "#000"
                    }}>
                        Sign Up
                    </Text>
                    <Text style={{
                        marginTop: 1,
                        fontSize: 20,
                        color: "#000"
                    }}>Name</Text>
                    <TextInput onChangeText={(text) => setName(text)} value={name} placeholder="Enter Your Name" style={{
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
                    }}>Email</Text>
                    <TextInput onChangeText={(text) => setEmail(text)} value={email} placeholder="Enter Your Email" style={{
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
                    <TextInput onChangeText={(text) => setPassword(text)} value={password} placeholder="Enter Your Password" secureTextEntry style={{
                        borderWidth: 1,
                        borderRadius: 4,
                        width: 300,
                        height: 40,
                        paddingLeft: 5,
                        color: "#000"
                    }} />
                    {/* <Text style={{ marginTop: 10, fontSize: 20, color: "#fff" }}>Image</Text>
                    <TextInput onChangeText={(text) => setImageURL(text)} value={imageURL} placeholder="Enter Your Image Url" style={{ borderWidth: 1, borderRadius: 4, width: 300, height: 40, paddingLeft: 5, color: "#fff" }} /> */}
                    <Text style={{
                        color: 'red',
                        margin: 5,
                        paddingLeft: 80
                    }}>{errorMessage}</Text>
                    <View>
                        <TouchableOpacity>
                            <Button title="Sign up" onFormSubmit={Signup} onPress={handlePress1} style={{
                                alignItems: "center",
                                fontSize: 50,
                            }} color="#000"></Button>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={handlePress2}>
                        <Text style={{
                            color: "red",
                            marginTop: 10,
                            marginLeft: 40,
                            fontSize: 18
                        }}>Already Have An Account</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>
    )
}
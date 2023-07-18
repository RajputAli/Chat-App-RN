import { View, Text, Button, TouchableOpacity, Image, StyleSheet } from 'react-native'

function Sidebar({ navigation }) {

    const handelLogout = () => {
        navigation.push("login")
    }


    return (
        <View style={{ flex: 1, backgroundColor: "#2d2e2e", color: "#fff", }}>
            <View style={{ flex: 1 }}>
                <TouchableOpacity>
                    <Image source={require("../../assets/elegant-initialmonogram-ca-logo-design-260nw-1392568601.webp")} style={{
                        marginLeft: 90,
                        marginTop: 25,
                        width: 75,
                        borderRadius: 40,
                        height: 75,
                    }} />
                </TouchableOpacity>
                <Text style={{
                    color: "#fff",
                    fontSize: 19, paddingBottom: 20, paddingLeft: 80, paddingTop: 5, borderBottomColor: '#fff',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }}>Arsalan Ali</Text>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TouchableOpacity onPress={handelLogout}>
                        <Image source={require("../../assets/5509651.png")} style={{
                            marginLeft: 15,
                            marginTop: 10 ,
                            width: 35,
                            height: 35,
                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handelLogout}>
                        <Text style={{ color: "#fff", fontSize: 17, marginLeft: 9, marginTop: 15 }}>LogOut</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


export {Sidebar }


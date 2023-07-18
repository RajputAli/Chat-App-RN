import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, ScrollView, Image, FlatList, TouchableOpacity, Button } from "react-native";
import { useState, useEffect } from "react";


export default function BottomNavigator() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: '#fff',
            tabBarStyle: { backgroundColor: "#2d2e2e", paddingBottom: 5, paddingTop: 5 }
        }}>
            <Tab.Screen name="Add Cart" component={AddCart} options={{headerShown: false, tabBarIcon: () =>{
                return(
                    <Image source={require("../../assets/shopping-cart.png")} style={{ width: 20, height: 20 }} />
                )
            }}}/>
            <Tab.Screen name="Cart" component={Cart} options={{headerShown: false, tabBarIcon: () =>{
                return(
                    <Image source={require("../../assets/shopping-cart.png")} style={{ width: 20, height: 20 }} />
                )
            }}}/>
        </Tab.Navigator>
    );
}



function AddCart({navigation}) {
    const [data, setData] = useState([])

    const DataItem = () => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((response) => setData(response))
    }

    useEffect(() => {
        DataItem()
    }, [])


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#7b7c7b' }}>
             <View style={{ backgroundColor: "#7b7c7b", width: 450, height: 70, borderWidth: 2, alignItems: "center", flexDirection: "row", justifyContent: "space-between"}}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image source={require("../../assets/elegant-initialmonogram-ca-logo-design-260nw-1392568601.webp")} style={{
                        marginLeft: 10,
                        // marginTop: 15,
                        width: 50,
                        height: 50,
                        borderRadius: 40
                    }} />
                </TouchableOpacity>
                <Text style={{ color: "#000", fontSize: 20, textAlign: "center", }}>Redux Store</Text>
                <TouchableOpacity>
                    <Image source={require("../../assets/shopping-cart.png")} style={{
                        marginRight: 40,
                        // marginTop: 15,
                        width: 40,
                        height: 40,
                        // borderRadius: 40
                    }} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View style={{width: 380, height: 280, backgroundColor: "#fff", borderRadius: 10, alignItems: "center", marginTop: 10}}>
                            <Image source={{ uri: item.image }} style={{ width: 150, height: 170}} />
                            <Text style={{}}>{item.price}</Text>
                            <Text style={{marginBottom: 10}}>{item.title}</Text>
                            <TouchableOpacity>
                                <Button title="Add Cart" color="#000" ></Button>
                            </TouchableOpacity>
                        </View>

                    )
                }}
            />
        </View>
    );
}

function Cart() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#7b7c7b' }}>
            <Text>Settings!</Text>
        </View>
    );
}

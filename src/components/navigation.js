import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Views/Login";
import Signup from "../Views/Signup";
import DashBoard from "../Views/Dashboard";


const Navigation = () => {
    return (
        <View style={{ flex: 1 }}>
            <MyStack />
        </View>
    )
}


const MyStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="dashboard" component={DashBoard} options={{ headerShown: false }} />
            <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="signup" component={Signup} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Navigation
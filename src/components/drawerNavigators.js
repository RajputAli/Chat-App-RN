import { createDrawerNavigator } from "@react-navigation/drawer"
import Main from "./main"
import { Sidebar } from './sidebar'


export default function DrawerNavigator() {
    const Drawer = createDrawerNavigator()
    return(
        <Drawer.Navigator drawerContent={props => <Sidebar {...props}/>}>
            <Drawer.Screen name="myprofile" component={Main} options={{headerShown : false}}/>
        </Drawer.Navigator>
    )
}


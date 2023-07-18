import Bottom from "../components/Bottom";
import DrawerNavigator from "../components/drawerNavigators";



const { View, Text } = require("react-native");

function Dashboard(){
    return(
        <View style={{flex: 1}}>
         <DrawerNavigator/>
        </View>
    )
}

export default Dashboard
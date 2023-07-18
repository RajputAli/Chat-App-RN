import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/components/navigation';
import { View, StyleSheet } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});



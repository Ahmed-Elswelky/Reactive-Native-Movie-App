import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet } from 'react-native';
import { MovieDetails } from './components/movieDetails';
import { Movies } from './components/movieApp';



export default function App({navigation}) {

  const Stack = createNativeStackNavigator();
  return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Movies}/>
          <Stack.Screen name="MovieDetails" component={MovieDetails}/>
        </Stack.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

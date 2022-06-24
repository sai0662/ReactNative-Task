import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import Login from './components/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

const Stack = createNativeStackNavigator(); 
export default function App() {

  return ( 
  <>
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" /*options={{headerShown:false,}}*/ component={Home}/>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Register" component={Register}/>
      <Stack.Screen name="Dashboard" component={Dashboard}/>
    </Stack.Navigator>
  </NavigationContainer>
  </>
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

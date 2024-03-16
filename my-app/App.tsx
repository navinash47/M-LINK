import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login'; // Adjust the path as necessary
import RegisterScreen from './screens/Register'; // Adjust the path as necessary


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={({ navigation }) => ({
            title: 'Register', // Optional: Customize the title
            headerLeft: () => (
              <Button
                onPress={() => navigation.goBack()}
                title="Back"
                color="#000" // Optional: Customize button color
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// import React from "react"
// import { View, Text } from 'react-native'

// const App = () => {
//  return (
//   <View>
//     <Text> Mlink test</Text>
//   </View>
//  )
// }
// export default App;

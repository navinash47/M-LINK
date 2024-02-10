import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Login from './screens/Login';

export default function App() {
  return (
    <Login />
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


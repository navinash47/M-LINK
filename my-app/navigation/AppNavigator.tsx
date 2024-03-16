import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from '../screens/Register';
// Import other screens

export type RootStackParamList = {
  RegisterScreen: undefined; // Add other screens here as needed, e.g., HomeScreen: undefined;
  // If a screen takes parameters, define them here, e.g., DetailScreen: { itemId: number };
};

const Stack = createStackNavigator<RootStackParamList>();

// Your stack navigator setup here

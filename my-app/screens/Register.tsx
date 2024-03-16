import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, ScrollView, Button } from 'react-native';
import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  StyledFormArea,
  StyledInputLabel,
  StyledTextInput,
  StyledSubmitButton,
  SubmitButtonText,
} from '../components/style';
import { RootStackParamList } from '../navigation/AppNavigator'; // Adjust the path as necessary

// Define the types for your navigation prop here
// Assuming you have a stack navigator, replace 'RootStackParamList' and 'RegisterScreen' with your actual types
type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RegisterScreen'>;

interface RegisterScreenProps {
  navigation: RegisterScreenNavigationProp;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  return (
    <StyledContainer>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <InnerContainer>
          <Button title="Back to Login" onPress={() => navigation.goBack()} />
          <PageTitle>Register</PageTitle>
          <StyledFormArea>
            <StyledInputLabel>First Name</StyledInputLabel>
            <StyledTextInput placeholder="John" />

            <StyledInputLabel>Last Name</StyledInputLabel>
            <StyledTextInput placeholder="Doe" />

            <StyledInputLabel>Email or Phone</StyledInputLabel>
            <StyledTextInput placeholder="Email or Phone" keyboardType="email-address" />

            <StyledInputLabel>Password</StyledInputLabel>
            <StyledTextInput placeholder="Password" secureTextEntry={true} />

            <StyledInputLabel>Confirm Password</StyledInputLabel>
            <StyledTextInput placeholder="Confirm Password" secureTextEntry={true} />

            <StyledSubmitButton>
              <SubmitButtonText>Register</SubmitButtonText>
            </StyledSubmitButton>
          </StyledFormArea>
        </InnerContainer>
      </ScrollView>
    </StyledContainer>
  );
};

export default RegisterScreen;
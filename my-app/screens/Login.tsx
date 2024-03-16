import React, { useState } from "react";
import styled from 'styled-components/native'; // Ensure you have this import for styled-components
import { StackNavigationProp } from '@react-navigation/stack';

// Define the types for your navigation stack
type RootStackParamList = {
  Register: undefined; // Add other screens as needed
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;

interface LoginProps {
  navigation: LoginScreenNavigationProp;
}

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    StyledInput,
    StyledButton,
    ButtonText // Add this line
} from './../components/style.js'


const Login: React.FC<LoginProps> = ({ navigation }) => { // Ensure navigation is received here
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); // Add this line

    const handleLogin = () => {
        if (!email && !password) {
            console.error("Please enter both email and password.");
        } else if (!email) {
            console.error("Please enter an email.");
        } else if (!password) {
            console.error("Please enter a password.");
        } else {
            console.log("Login pressed", email, password);
        }
    };

    const handleRegister = () => {
        navigation.navigate('Register'); // Use the name of the Register screen as defined in your navigator
    };

    const handleGoogleSignup = () => {
        // Add your Google signup logic here
        console.log("Google Signup pressed");
    };

    return (
        <StyledContainer>
            <InnerContainer>
                <PageLogo source ={require('./../assets/favicon.png')}/>
                <PageTitle>Mentor Mentee</PageTitle>
                <StyledInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"/>
                <StyledInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    />
                <StyledButton onPress={handleLogin}>
                    <ButtonText>Login</ButtonText>
                </StyledButton>
                <StyledButton onPress={handleRegister}> {/* Modify this line */}
                    <ButtonText>Register</ButtonText>
                </StyledButton>
                <StyledButton onPress={handleGoogleSignup}>
                    <ButtonText>Signup with Google</ButtonText>
                </StyledButton>
            </InnerContainer>
        </StyledContainer>
    );
}
export default Login;
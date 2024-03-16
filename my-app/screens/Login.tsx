import React, { useState } from "react";
import styled from 'styled-components/native'; // Ensure you have this import for styled-components

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    StyledInput,
    StyledButton,
    ButtonText // Add this line
} from './../components/style.js'


const Login = () => {
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
        // Add your register logic here
        console.log("Register pressed");
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
                <StyledButton onPress={handleRegister}>
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
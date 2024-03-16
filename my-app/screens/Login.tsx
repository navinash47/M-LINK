import React, { useState } from "react";
import styled from 'styled-components/native'; // Ensure you have this import for styled-components

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    StyledInput,
    StyledButton // Add this line
} from './../components/style.js'

// Define ButtonText if it's a styled component
const ButtonText = styled.Text`
  color: #fff; // Example styling, adjust as needed
`;

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); // Add this line

    const handleLogin = () => {
        // Add your login logic here
        console.log("Login pressed", email, password);
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
                {/* <ButtonText>Login</ButtonText> */}
                </StyledButton>
            </InnerContainer>
        </StyledContainer>
    );
}
export default Login;
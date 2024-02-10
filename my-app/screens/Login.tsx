import React from "react";

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle
} from './../components/style.js'

const Login = () => {
    return (
        <StyledContainer>
            <InnerContainer>
                <PageLogo source ={require('./../assets/favicon.png')}/>
                <PageTitle>Mentor Mentee</PageTitle>
            </InnerContainer>
        </StyledContainer>
    );
}
export default Login;
import styled from 'styled-components';
import {View, Text, Image} from 'react-native';
import Constants from 'expo-constants';


const StatusBarHeight = Constants.StatusBarHeight;
//colors
export const Colors= {
    primary: "#ffffff",
    secondary: "#E5E7EB",
    tertiary: "#1F2937",
    darklight: "#9CA3AF",
    brand: "#6D28D9",
    green: "#10B981",
    red: "#EF4444",
};

const { primary, secondary, tertiary, darklight, brand, green, red }= Colors;

export const StyledContainer = styled.View `
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight+10}px;
    background-color: ${primary};
`;

export const InnerContainer =styled.View `
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const PageLogo = styled.Image `
    width: 50px;
    height: 50px;
`;

export const PageTitle =styled.Text `
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding: 10px
`;

export const StyledInput = styled.TextInput`
  /* Your styles here */
`;
export const StyledButton = styled.TouchableOpacity`
  /* Your button styling here */
  padding: 10px;
  background-color: #3498db;
  align-items: center;
`;

export const ButtonText = styled.Text`
  
`;
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import Login from './Login';

describe('Login Screen', () => {
  it('should display error when login is pressed without entering email and password', () => {
    const { getByText } = render(<Login />);
    const loginButton = getByText('Login');
    fireEvent.press(loginButton);
    // Assuming you have a way to display error messages to the user, you would check for that here.
    // For example, if errors are displayed in a Text component, you might check:
    // expect(getByText('Please enter both email and password.')).toBeTruthy();
  });

  it('should log email and password when both are provided and login is pressed', () => {
    const { getByPlaceholderText, getByText } = render(<Login />);
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Login');

    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'password123');
    fireEvent.press(loginButton);

    // This is where you would check that the email and password are logged.
    // Logging to the console isn't directly testable with Jest in this context.
    // You might consider mocking the console.log method or better yet,
    // refactor your handleLogin to return values or set state that can be tested.
  });
});
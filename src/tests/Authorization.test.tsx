import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Authorization from '../components/Authorization';

describe('Authorization Component', () => {
  test('renders login form and handles login', () => {
    const mockSetLogin = jest.fn();

    render(<Authorization setLogin={mockSetLogin} />);

    const usernameInput = screen.getByLabelText(/Username/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    const loginButton = screen.getByText(/Log In/i);

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();

    fireEvent.change(usernameInput, { target: { value: 'testUser' } });
    fireEvent.change(passwordInput, { target: { value: 'testPassword' } });

    fireEvent.click(loginButton);

    expect(mockSetLogin).toHaveBeenCalledTimes(1);
    expect(mockSetLogin).toHaveBeenCalledWith('testUser', 'testPassword');
  });
});

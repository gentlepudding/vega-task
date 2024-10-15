import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders vega app', () => {
  render(<App />);
  const linkElement = screen.getByText(/vega app/i);
  expect(linkElement).toBeInTheDocument();
});

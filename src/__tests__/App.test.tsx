import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import App from '../App';

test('demo', () => {
  expect(true).toBe(true);
});

test('Renders the main page', () => {
  const { getByText } = render(<App />);
  expect(getByText('¡Hello World!')).toBeInTheDocument();
});

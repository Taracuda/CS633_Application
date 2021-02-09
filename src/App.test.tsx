import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('aws-amplify-react');
jest.mock('aws-amplify');

test('renders learn react link', () => {
  const app = render(<App />);
  
  expect(app).not.toBeNull();
});

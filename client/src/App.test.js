import React from 'react';
import App from './App';
import * as rtl from "@testing-library/react";
import { render } from '@testing-library/react'

it('renders without crashing', () => {
  render(<App />);
});

it('App renders "World Cup" text', () => {
  const wrapper = rtl.render(<App />);
  expect(wrapper.getByText(/World Cup/i));
});

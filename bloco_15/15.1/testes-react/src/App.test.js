import { render, screen } from '@testing-library/react';
import App from './App';

test('verifica se há um campo email', () => {
  const { getByLabelText } = render(<App />);
  const inputEmail = getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe('email');
});

test('verifica se há um botão send', () => {
  const { getByTestId } = render(<App />);
  const button = getByTestId('id-send');
  expect(button).toBeInTheDocument();
  expect(button.type).toBe('button');
  expect(button).toHaveValue('Send');
});

test('verifica se há dois botões', () => {
  const { getAllByRole } = render(<App />);
  const buttons = getAllByRole('button');
  expect(buttons.length).toBe(2);
});

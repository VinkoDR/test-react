import { render, screen } from '@testing-library/react';
import App from './App';

///////////////////////////////////////////////////////////////////////////
// tests using differents queries

//getBytext looking for an ellemnt by his text
//<h2>Meme Generator</h2>
test('renders Meme Generator', () => {
  render(<App />);
  const titleElement = screen.getByText(/Meme Generator/i);
  expect(titleElement).toBeInTheDocument();
});

//getByTestId the element you are looking for need a data-testid and your a looking for it by his value, here header--title
//data-testid="header--title"
test('renders Meme Generator', () => {
  render(<App />);
  const titleElement = screen.getByTestId(/header--title/i);
  expect(titleElement).toBeInTheDocument();
});

//getByTitle the element you are looking for need a title attribute
//title='header'
test('renders App', () => {
  render(<App />);
  const titleElement = screen.getByTitle("header");
  expect(titleElement).toBeInTheDocument();
});

//findBy use it to test async
test('renders App', () => {
  render(<App />);
  const titleElement = screen.getByTitle("header");
  expect(titleElement).toBeInTheDocument();
});
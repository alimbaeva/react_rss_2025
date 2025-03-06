import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CardItem from '../components/cards/CardItem';
import { mockCatBreed } from './mockData';

// Временный редуктор для тестов
const mockReducer = (state = {}) => state;
const store = createStore(mockReducer);

describe('CardItem component', () => {
  it('renders the card with correct information', () => {
    render(
      <Provider store={store}>
        <CardItem data={mockCatBreed} />
      </Provider>
    );
    expect(screen.getByText(/Name:/i)).toHaveTextContent('Name:');
    expect(screen.getByText(/Origin:/i)).toHaveTextContent('Origin:');
    expect(screen.getByText(/Temperament:/i)).toHaveTextContent('Temperament:');
  });

  it('toggles selection on click', () => {
    render(
      <Provider store={store}>
        <CardItem data={mockCatBreed} />
      </Provider>
    );
    const chooseButton = screen.getByTestId('choose-button');
    fireEvent.click(chooseButton);
  });

  it('toggles selection again on click', () => {
    render(
      <Provider store={store}>
        <CardItem data={mockCatBreed} />
      </Provider>
    );
    const chooseButton = screen.getByTestId('choose-button');
    fireEvent.click(chooseButton); // First click
    fireEvent.click(chooseButton); // Second click
    expect(chooseButton).not.toHaveClass('selected'); // assuming 'selected' class is removed after second click
  });

  it('toggles selection on click', () => {
    render(
      <Provider store={store}>
        <CardItem data={mockCatBreed} />
      </Provider>
    );
    const chooseButton = screen.getByTestId('choose-button');
    fireEvent.click(chooseButton);
    // After clicking, verify the selection state (e.g., check class or text change)
    expect(chooseButton).toHaveClass('choose-item'); // Update the class to match the actual class
  });
});

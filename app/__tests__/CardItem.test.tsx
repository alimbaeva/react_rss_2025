import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CardItem from '../components/cards/CardItem';
import { mockCatBreed } from './mockData';

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
    fireEvent.click(chooseButton);
    fireEvent.click(chooseButton);
    expect(chooseButton).not.toHaveClass('selected');
  });

  it('toggles selection on click', () => {
    render(
      <Provider store={store}>
        <CardItem data={mockCatBreed} />
      </Provider>
    );
    const chooseButton = screen.getByTestId('choose-button');
    fireEvent.click(chooseButton);
    expect(chooseButton).toHaveClass('choose-item');
  });
});

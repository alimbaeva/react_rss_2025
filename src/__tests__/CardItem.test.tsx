import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import CardItem from '../components/cards/CardItem';
import { mockCatBreed } from './mockData';

const mockDispatch = vi.fn();

vi.mock('react-redux', async (importOriginal) => {
  const actual = (await importOriginal()) as {
    useDispatch: () => unknown;
    Provider: typeof Provider;
  };
  return {
    ...actual,
    useDispatch: () => mockDispatch,
    Provider: actual.Provider,
  };
});

it('toggles chooseItem state and updates color on click', async () => {
  const mockDispatch = vi.fn();

  render(
    <Provider store={store}>
      <CardItem data={mockCatBreed} />
    </Provider>
  );

  const chooseButton = screen.getByTestId('choose-button');

  let initialColor = chooseButton.querySelector('svg')?.getAttribute('fill');
  expect(initialColor).toBe('#f3f798');

  fireEvent.click(chooseButton);

  await waitFor(() => {
    const updatedColor = chooseButton
      .querySelector('svg')
      ?.getAttribute('fill');
    expect(updatedColor).toBe('#f3f798');
  });

  fireEvent.click(chooseButton);
  initialColor = chooseButton.querySelector('svg')?.getAttribute('fill');
  expect(initialColor).toBe('#f3f798');

  expect(mockDispatch).toHaveBeenCalledTimes(0);
});

it('should render the correct text for Name, Origin, and Temperament', () => {
  render(
    <Provider store={store}>
      <CardItem data={mockCatBreed} />
    </Provider>
  );

  expect(screen.getByText(/Name:/i)).toBeInTheDocument();
  expect(screen.getByText(/Origin:/i)).toBeInTheDocument();
  expect(screen.getByText(/Temperament:/i)).toBeInTheDocument();
});

it('should change class based on idValue', () => {
  render(
    <Provider store={store}>
      <CardItem data={mockCatBreed} />
    </Provider>
  );

  const card = screen.getByTestId('card');

  expect(card).toHaveClass('card');
  store.dispatch({ type: 'abys', payload: 2 });

  expect(card).toHaveClass('card');
});

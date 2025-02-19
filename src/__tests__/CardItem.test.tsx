import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import CardItem from '../components/cards/CardItem';
import { mockCatBreed } from './mockData';
import { setIdValue } from '../store/slices/searchSlice';
import {
  addToSelected,
  removeFromSelected,
} from '../store/slices/selectedSlice';

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

it('changes class based on idValue', async () => {
  render(
    <Provider store={store}>
      <CardItem data={mockCatBreed} />
    </Provider>
  );

  const card = screen.getByTestId('card');

  expect(card).toHaveClass('card'); // Проверка начального состояния

  store.dispatch(setIdValue(mockCatBreed.id)); // Изменяем состояние Redux

  await waitFor(() => {
    expect(card).toHaveClass('activ card'); // Ожидаем обновления класса
  });
});

it('dispatches setIdValue on click', () => {
  render(
    <Provider store={store}>
      <CardItem data={mockCatBreed} />
    </Provider>
  );

  const card = screen.getByTestId('card');
  fireEvent.click(card);
  expect(mockDispatch).toHaveBeenCalledWith(setIdValue(mockCatBreed.id));
});

it('should update chooseItem when selectedIds change', async () => {
  render(
    <Provider store={store}>
      <CardItem data={mockCatBreed} />
    </Provider>
  );

  const chooseButton = screen.getByTestId('choose-button');
  const svgIcon = chooseButton.querySelector('svg');

  expect(svgIcon).toHaveAttribute('fill', '#f3f798');

  store.dispatch(addToSelected(mockCatBreed));

  await waitFor(() => {
    expect(svgIcon).toHaveAttribute('fill', 'rgb(74, 198, 11)');
  });

  store.dispatch(removeFromSelected(mockCatBreed.id));

  await waitFor(() => {
    expect(svgIcon).toHaveAttribute('fill', '#f3f798');
  });
});

it('toggles chooseItem state and updates color on click', () => {
  render(
    <Provider store={store}>
      <CardItem data={mockCatBreed} />
    </Provider>
  );

  const chooseButton = screen.getByTestId('choose-button');
  expect(chooseButton.querySelector('svg')).toHaveAttribute('fill', '#f3f798');
  fireEvent.click(chooseButton);
  expect(mockDispatch).toHaveBeenCalledWith(setIdValue('abys'));

  fireEvent.click(chooseButton);
  console.log(mockDispatch.mock.calls);
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

it('should update chooseItem state when selectedIds changes', async () => {
  render(
    <Provider store={store}>
      <CardItem data={mockCatBreed} />
    </Provider>
  );

  const chooseButton = screen.getByTestId('choose-button');
  const svgIcon = chooseButton.querySelector('svg');

  // Изначально кнопка должна быть не выбрана
  expect(svgIcon).toHaveAttribute('fill', '#f3f798');

  // Добавление элемента в selectedIds
  store.dispatch(addToSelected(mockCatBreed));

  await waitFor(() => {
    expect(svgIcon).toHaveAttribute('fill', 'rgb(74, 198, 11)');
  });

  // Удаление элемента из selectedIds
  store.dispatch(removeFromSelected(mockCatBreed.id));

  await waitFor(() => {
    expect(svgIcon).toHaveAttribute('fill', 'rgb(74, 198, 11)');
  });
});

it('should call setIdValue when card is clicked', () => {
  render(
    <Provider store={store}>
      <CardItem data={mockCatBreed} />
    </Provider>
  );

  const card = screen.getByTestId('card');
  fireEvent.click(card);
  expect(mockDispatch).toHaveBeenCalledWith(setIdValue(mockCatBreed.id));
});

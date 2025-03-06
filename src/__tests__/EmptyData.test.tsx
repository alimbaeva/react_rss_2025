import React from 'react';
import { render, screen } from '@testing-library/react';
import EmptyData from '../components/EmptyData';

test('renders EmptyData component correctly', () => {
  render(<EmptyData />);

  expect(screen.getByTestId('empty-data-1')).toHaveTextContent(
    'Нет данных для отображения!'
  );
  expect(screen.getByTestId('empty-data-2')).toHaveTextContent(
    'Введите запрос в поле поиска.'
  );
  expect(screen.getByTestId('empty-data-3')).toHaveTextContent(
    'Выберите из выподающего списка.'
  );
});

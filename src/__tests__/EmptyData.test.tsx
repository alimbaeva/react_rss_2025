import { render, screen } from '@testing-library/react';
import EmptyData from '../components/EmptyData'; // Путь к компоненту

describe('EmptyData', () => {
  it('should render all empty data messages correctly', () => {
    // Рендерим компонент
    render(<EmptyData />);

    // Проверяем наличие всех элементов с правильными testid
    expect(screen.getByTestId('empty-data-1')).toBeInTheDocument();
    expect(screen.getByTestId('empty-data-2')).toBeInTheDocument();
    expect(screen.getByTestId('empty-data-3')).toBeInTheDocument();
  });

  it('should render correct text for each message', () => {
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
});

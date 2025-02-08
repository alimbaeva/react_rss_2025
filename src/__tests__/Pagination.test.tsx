import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../components/pagination/Pagination';
import { useSearch } from '../components/context/useSearch';
import { describe, it, vi, expect, beforeEach, Mock } from 'vitest';

// Мокаем useSearch контекст
vi.mock('../components/context/useSearch', () => ({
  useSearch: vi.fn(),
}));

describe('Pagination Component', () => {
  beforeEach(() => {
    // Мокаем возвращаемые значения из useSearch
    (useSearch as Mock).mockReturnValue({
      currentPage: 1,
      setCurrentPage: vi.fn(),
    });
  });

  it('renders the correct number of pages', () => {
    const pages = [1, 2, 3, 4, 5];

    render(<Pagination pages={pages} />);

    // Проверяем, что на странице отображаются все номера страниц
    pages.forEach((_, index) => {
      expect(screen.getByText(index + 1)).toBeInTheDocument();
    });
  });

  it('highlights the current page', () => {
    const pages = [1, 2, 3, 4, 5];

    render(<Pagination pages={pages} />);

    const activePage = screen.getByText('2');
    expect(activePage).toHaveClass('activ');
  });

  it('changes the current page when clicked', () => {
    const pages = [1, 2, 3, 4, 5];
    const setCurrentPage = vi.fn();
    (useSearch as Mock).mockReturnValue({
      currentPage: 1,
      setCurrentPage,
    });

    render(<Pagination pages={pages} />);

    fireEvent.click(screen.getByText('3'));

    expect(setCurrentPage).toHaveBeenCalledWith(2);
  });

  it('does not highlight any page when currentPage is not in the list', () => {
    const pages = [1, 2, 3, 4, 5];
    const setCurrentPage = vi.fn();
    (useSearch as Mock).mockReturnValue({
      currentPage: 10,
      setCurrentPage,
    });

    render(<Pagination pages={pages} />);
    expect(screen.queryByText('10')).toBeNull();
  });
});

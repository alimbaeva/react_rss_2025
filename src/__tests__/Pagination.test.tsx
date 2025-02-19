import { fireEvent, render, screen } from '@testing-library/react';
import { store } from '../store/store';
import Pagination from '../components/pagination/Pagination';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { vi } from 'vitest';
import { setCurrentPage } from '../store/slices/searchSlice';

vi.mock('react-redux', async (importOriginal) => {
  const actual = (await importOriginal()) as {
    useDispatch: () => unknown;
    useSelector: typeof useSelector;
    Provider: typeof Provider;
  };

  return {
    ...actual,
    useDispatch: vi.fn(),
    useSelector: vi.fn(),
    Provider: actual.Provider,
  };
});

describe('Pagination Component', () => {
  it('should render correct number of pages', () => {
    const pages = [1, 2, 3, 4, 5];

    vi.mocked(useSelector).mockReturnValue({ search: { currentPage: 0 } });

    render(
      <Provider store={store}>
        <Pagination pages={pages} />
      </Provider>
    );

    const pageItems = screen.getAllByText(/^\d+$/);
    expect(pageItems).toHaveLength(pages.length);
  });

  it('should highlight the current page', () => {
    const pages = [1, 2, 3, 4, 5];
    const currentPage = 2;
    vi.mocked(useSelector).mockReturnValue({ search: { currentPage } });

    render(
      <Provider store={store}>
        <Pagination pages={pages} />
      </Provider>
    );

    const activePage = screen.getByText(`${currentPage + 1}`);

    expect(activePage).toHaveClass('page-item');
  });

  it('should highlight the current page', () => {
    const pages = [1, 2, 3, 4, 5];
    const currentPage = 2;
    vi.mocked(useSelector).mockReturnValue({ search: { currentPage } });

    render(
      <Provider store={store}>
        <Pagination pages={pages} />
      </Provider>
    );

    const activePage = screen.getByText(`${currentPage + 1}`);

    expect(activePage).toBeInTheDocument();
    expect(activePage).toHaveClass('page-item');
  });

  it('should render correct number of pages', () => {
    const pages = [1, 2, 3, 4, 5];

    vi.mocked(useSelector).mockReturnValue({ search: { currentPage: 0 } });

    render(
      <Provider store={store}>
        <Pagination pages={pages} />
      </Provider>
    );

    const pageItems = screen.getAllByText(/^\d+$/);
    expect(pageItems).toHaveLength(pages.length);
  });

  it('should update current page on page click', () => {
    const pages = [1, 2, 3, 4, 5];
    const newPage = 3;

    vi.mocked(useSelector).mockReturnValue({ search: { currentPage: 0 } });

    const dispatch = vi.fn();

    vi.mocked(useDispatch).mockReturnValue(dispatch);

    render(
      <Provider store={store}>
        <Pagination pages={pages} />
      </Provider>
    );

    const pageToClick = screen.getByText(`${newPage + 1}`);

    fireEvent.click(pageToClick);

    expect(dispatch).toHaveBeenCalledWith(setCurrentPage(newPage));
  });
});

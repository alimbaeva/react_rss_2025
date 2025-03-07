import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import Pagination from '../components/pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { type Mock, vi } from 'vitest';
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
  const pages = [1, 2, 3, 4, 5];
  let dispatch: Mock;

  beforeEach(() => {
    dispatch = vi.fn();
    vi.mocked(useDispatch).mockReturnValue(dispatch);
  });

  it('renders correct number of pages', () => {
    vi.mocked(useSelector).mockReturnValue({ search: { currentPage: 0 } });

    render(
      <Provider store={store}>
        <Pagination pages={pages} />
      </Provider>
    );

    expect(screen.getAllByText(/^[1-5]$/)).toHaveLength(pages.length);
  });

  it('highlights the current page', () => {
    const currentPage = 2;
    vi.mocked(useSelector).mockReturnValue({ search: { currentPage } });

    render(
      <Provider store={store}>
        <Pagination pages={pages} />
      </Provider>
    );

    const activePage = screen.getByText(`${currentPage + 1}`);
    expect(activePage.className).toContain('page-item');
  });

  it('updates current page on click', () => {
    vi.mocked(useSelector).mockReturnValue({ search: { currentPage: 0 } });

    render(
      <Provider store={store}>
        <Pagination pages={pages} />
      </Provider>
    );

    const newPage = 3;
    const pageToClick = screen.getByText(`${newPage + 1}`);

    fireEvent.click(pageToClick);
    expect(dispatch).toHaveBeenCalledWith(setCurrentPage(newPage));
  });
});

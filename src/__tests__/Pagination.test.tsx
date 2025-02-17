import { render, screen } from '@testing-library/react';
import { store } from '../store/store';
import Pagination from '../components/pagination/Pagination';
import { Provider, useSelector } from 'react-redux';
import { vi } from 'vitest';

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
});

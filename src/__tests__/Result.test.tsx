import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Result from '../components/Result';
import { useResultData } from '../components/useResultData';
import { useDispatch, useSelector } from 'react-redux';
import { mockCatBreed } from './mockData';

// Мокаем хуки и Redux dispatch
vi.mock('../components/useResultData', () => ({
  useResultData: vi.fn(),
}));

vi.mock('react-redux', () => ({
  useDispatch: vi.fn(),
  useSelector: vi.fn(),
}));

describe('Result Component', () => {
  const mockDispatch = vi.fn();

  beforeEach(() => {
    vi.mocked(useDispatch).mockReturnValue(mockDispatch);
  });

  it('should render loading state when data is loading', async () => {
    vi.mocked(useResultData).mockReturnValue({
      data: [],
      pages: [],
      isLoad: true,
      error: null,
      idValue: '',
      currentPage: 0,
      limit: 10,
    });

    render(<Result />);
    const loadItem1 = await screen.findByTestId('load-item-1');
    expect(loadItem1).toBeInTheDocument();

    const loadItem2 = await screen.findByTestId('load-item-2');
    expect(loadItem2).toBeInTheDocument();

    const loadItem3 = await screen.findByTestId('load-item-3');
    expect(loadItem3).toBeInTheDocument();
  });

  it('should render error message when there is an error', () => {
    vi.mocked(useResultData).mockReturnValue({
      data: [],
      pages: [],
      isLoad: false,
      error: 'Some error occurred',
      idValue: '',
      currentPage: 0,
      limit: 10,
    });

    render(<Result />);
    expect(screen.getByText('Some error occurred')).toBeInTheDocument();
  });

  it('should render empty state when there is no data', () => {
    vi.mocked(useResultData).mockReturnValue({
      data: [],
      pages: [],
      isLoad: false,
      error: null,
      idValue: '',
      currentPage: 0,
      limit: 10,
    });

    render(<Result />);
    expect(screen.getByTestId('empty-data-1')).toBeInTheDocument();
    expect(screen.getByTestId('empty-data-2')).toBeInTheDocument();
    expect(screen.getByTestId('empty-data-3')).toBeInTheDocument();
  });
});

vi.mock('../components/useResultData', () => ({
  useResultData: vi.fn(),
}));

vi.mock('react-redux', () => ({
  useDispatch: vi.fn(),
  useSelector: vi.fn(),
}));

describe('Result Component', () => {
  const mockDispatch = vi.fn();

  beforeEach(() => {
    vi.mocked(useDispatch).mockReturnValue(mockDispatch);
    vi.mocked(useSelector).mockReturnValue({ currentPage: 0 });
  });

  it('should dispatch setIdValue when clicking outside an element', () => {
    vi.mocked(useResultData).mockReturnValue({
      data: [mockCatBreed],
      pages: [1],
      isLoad: false,
      error: null,
      idValue: '123',
      currentPage: 0,
      limit: 10,
    });
    // vi.mocked(useResultData).mockReturnValue({
    //   data: [{ id: '1', title: 'Card 1' }] as CatBreed[],
    //   pages: [1],
    //   isLoad: false,
    //   error: null,
    //   idValue: '123',
    //   currentPage: 0,
    //   limit: 10,
    // });

    render(<Result />);
    fireEvent.click(screen.getByTestId('result-container'));
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'search/setIdValue',
      payload: '',
    });
  });
});

import { render, screen } from '@testing-library/react';
import { vi, MockedFunction } from 'vitest';
import Result from '../components/Result';
import { useResultData } from '../components/useResultData';

vi.mock('../components/useResultData');

const mockUseResultData = useResultData as MockedFunction<typeof useResultData>;

describe('Result Component', () => {
  it('renders loading state', () => {
    mockUseResultData.mockReturnValue({
      isLoad: true,
      data: [],
      error: null,
      pages: [],
      idValue: '',
      setIdValue: vi.fn(),
      currentPage: 0,
      limit: 0,
    });
    render(<Result />);
    expect(screen.getByTestId('load-item-1')).toBeInTheDocument();
    expect(screen.getByTestId('load-item-2')).toBeInTheDocument();
    expect(screen.getByTestId('load-item-3')).toBeInTheDocument();
  });

  it('renders error state', () => {
    mockUseResultData.mockReturnValue({
      isLoad: false,
      data: [],
      error: 'Something went wrong!',
      pages: [],
      idValue: '',
      setIdValue: vi.fn(),
      currentPage: 0,
      limit: 0,
    });
    render(<Result />);
    expect(screen.getByText('Something went wrong!')).toBeInTheDocument();
  });

  it('renders empty data state', () => {
    mockUseResultData.mockReturnValue({
      isLoad: false,
      data: [],
      error: null,
      pages: [],
      idValue: '',
      setIdValue: vi.fn(),
      currentPage: 0,
      limit: 0,
    });
    render(<Result />);
    expect(screen.getByTestId('empty-data-1')).toBeInTheDocument();
    expect(screen.getByTestId('empty-data-2')).toBeInTheDocument();
    expect(screen.getByTestId('empty-data-3')).toBeInTheDocument();
  });
});

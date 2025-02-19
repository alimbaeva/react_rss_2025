import { render, screen, fireEvent } from '@testing-library/react';
import { store } from '../store/store';
import DownloadFile from '../components/dropDownInfo/DownloadFile';
import { ThemeProvider } from '../components/context/ThemeContext ';
import { useSelector, Provider } from 'react-redux';
import { vi } from 'vitest';

const mockDispatch = vi.fn();

vi.mock('../components/icons/DownloadIcon', () => ({
  default: () => <div>Download Icon</div>,
}));

vi.mock('react-redux', async (importOriginal) => {
  const actual = (await importOriginal()) as {
    useDispatch: () => unknown;
    useSelector: typeof useSelector;
    Provider: typeof Provider;
  };

  return {
    ...actual,
    useDispatch: () => mockDispatch,
    useSelector: vi.fn(),
    Provider: actual.Provider,
  };
});

describe('DownloadFile Component', () => {
  it('should render the Download button', () => {
    const mockSelectedData = { item1: { field1: 'value1', field2: 'value2' } };
    const mockSelectedIds = [1, 2, 3];

    vi.mocked(useSelector).mockReturnValue({
      selectedData: mockSelectedData,
      selectedIds: mockSelectedIds,
    });

    render(
      <Provider store={store}>
        <ThemeProvider>
          <DownloadFile />
        </ThemeProvider>
      </Provider>
    );

    const downloadButton = screen.getByRole('button');
    expect(downloadButton).toBeInTheDocument();
  });

  it('should call URL.revokeObjectURL on component unmount', () => {
    const mockSelectedData = { item1: { field1: 'value1', field2: 'value2' } };
    const mockSelectedIds = [1, 2, 3];

    vi.mocked(useSelector).mockReturnValue({
      selectedData: mockSelectedData,
      selectedIds: mockSelectedIds,
    });

    const { unmount } = render(
      <Provider store={store}>
        <ThemeProvider>
          <DownloadFile />
        </ThemeProvider>
      </Provider>
    );
    const fileUrl = 'mocked-url';
    global.URL.createObjectURL = vi.fn(() => fileUrl);
    global.URL.revokeObjectURL = vi.fn();

    const button = screen.getByRole('button');
    fireEvent.click(button);

    unmount();

    expect(global.URL.revokeObjectURL).toHaveBeenCalledWith(fileUrl);
  });

  it('should trigger file download when the button is clicked', async () => {
    const mockSelectedData = { item1: { field1: 'value1', field2: 'value2' } };
    const mockSelectedIds = [1, 2, 3];

    vi.mocked(useSelector).mockReturnValue({
      selectedData: mockSelectedData,
      selectedIds: mockSelectedIds,
    });

    render(
      <Provider store={store}>
        <ThemeProvider>
          <DownloadFile />
        </ThemeProvider>
      </Provider>
    );

    const downloadButton = screen.getByRole('button');
    expect(downloadButton).toBeInTheDocument();

    const downloadLinkMock = vi.fn();
    global.URL.createObjectURL = vi.fn(() => 'mocked-url');

    const linkElement = {
      click: downloadLinkMock,
      setAttribute: vi.fn(),
      href: '',
      download: '',
    };

    global.document.createElement = vi.fn(() => linkElement as never);

    fireEvent.click(downloadButton);

    expect(downloadLinkMock).toHaveBeenCalled();
    expect(global.URL.createObjectURL).toHaveBeenCalled();
  });
});

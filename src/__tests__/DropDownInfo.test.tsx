import { render, screen, fireEvent } from '@testing-library/react';
import { store } from '../store/store';
import DropDownInfo from '../components/dropDownInfo/DropDownInfo';
import { ThemeProvider } from '../components/context/ThemeContext ';
import { useSelector, Provider } from 'react-redux';
import { vi } from 'vitest';

const mockDispatch = vi.fn();

vi.mock('../components/icons/TrashIcon', () => ({
  default: () => <div>Trash Icon</div>,
}));
vi.mock('../components/dropDownInfo/DownloadFile', () => ({
  default: () => <div>Download File</div>,
}));
vi.mock('../components/dropDownInfo/MoreInformation', () => ({
  default: () => <div>More Information</div>,
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

describe('DropDownInfo Component', () => {
  it('should render correctly when there are selected items', () => {
    const mockSelectedIds = [1, 2, 3];

    vi.mocked(useSelector).mockReturnValue({ selectedIds: mockSelectedIds });

    render(
      <Provider store={store}>
        <ThemeProvider>
          <DropDownInfo />
        </ThemeProvider>
      </Provider>
    );

    const itemCount = screen.getByTestId('item-count');

    expect(itemCount).toHaveTextContent('3 items selected');
  });

  it('should not render anything when there are no selected items', () => {
    const mockSelectedIds: number[] = [];

    vi.mocked(useSelector).mockReturnValue({ selectedIds: mockSelectedIds });

    render(
      <Provider store={store}>
        <ThemeProvider>
          <DropDownInfo />
        </ThemeProvider>
      </Provider>
    );

    expect(screen.queryByTestId('item-count')).toBeNull();

    expect(screen.queryByTestId('dropdown-info-section')).toBeNull();
  });

  it('should toggle More Information when the button is clicked', async () => {
    const mockSelectedIds = [1, 2, 3];

    vi.mocked(useSelector).mockReturnValue({ selectedIds: mockSelectedIds });

    render(
      <Provider store={store}>
        <ThemeProvider>
          <DropDownInfo />
        </ThemeProvider>
      </Provider>
    );

    const revealMoreInfoButton = await screen.findByTestId(
      'dropdown-info-section'
    );
    expect(revealMoreInfoButton).toBeInTheDocument();

    fireEvent.click(revealMoreInfoButton);
    expect(
      screen.queryByTestId('reveal-more-info-btn')
    ).not.toBeInTheDocument();
  });

  it('should clear selected items when the trash button is clicked', async () => {
    const mockSelectedIds = [1, 2, 3];

    vi.mocked(useSelector).mockReturnValue({ selectedIds: mockSelectedIds });

    render(
      <Provider store={store}>
        <ThemeProvider>
          <DropDownInfo />
        </ThemeProvider>
      </Provider>
    );

    const trashButton = screen.getByTestId('trash-button');
    expect(trashButton).toBeInTheDocument();

    fireEvent.click(trashButton);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'selected/clearSelected',
    });
  });
});

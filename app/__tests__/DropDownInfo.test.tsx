import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import DropDownInfo from '../components/dropDownInfo/DropDownInfo';
import { ThemeProvider } from '../components/context/ThemeContext ';

const mockStore = createStore(() => ({
  selected: {
    selectedData: {
      cat1: { name: 'Persian', origin: 'Iran', temperament: 'Calm' },
    },
    selectedIds: ['cat1'],
  },
}));

vi.mock('../context/useSearch', () => ({
  useTheme: vi.fn().mockReturnValue({ theme: 'light' }),
}));

global.URL.createObjectURL = vi.fn(() => 'mockObjectURL');
global.URL.revokeObjectURL = vi.fn();
global.Blob = vi.fn().mockImplementation(() => ({
  text: () => Promise.resolve('mock data'),
}));

describe('DropDownInfo component', () => {
  it('renders the correct selected items count', () => {
    render(
      <Provider store={mockStore}>
        <ThemeProvider>
          <DropDownInfo />
        </ThemeProvider>
      </Provider>
    );
    expect(screen.getByTestId('item-count')).toHaveTextContent(
      '1 items selected'
    );
  });

  it('shows the "Reveal more information" button initially', () => {
    render(
      <Provider store={mockStore}>
        <ThemeProvider>
          <DropDownInfo />
        </ThemeProvider>
      </Provider>
    );
    expect(
      screen.getByRole('button', { name: /Reveal more information/i })
    ).toBeInTheDocument();
  });

  it('handles the file download in the DownloadFile component', () => {
    render(
      <Provider store={mockStore}>
        <ThemeProvider>
          <DropDownInfo />
        </ThemeProvider>
      </Provider>
    );

    const downloadButton = screen
      .getByTestId('downloadIcon')
      .closest('button') as HTMLButtonElement;
    fireEvent.click(downloadButton);

    expect(URL.createObjectURL).toHaveBeenCalledWith(
      expect.objectContaining({})
    );
    const downloadLink = document.createElement('a');
    downloadLink.href = 'mockObjectURL';
    downloadLink.download = 'Cute_Cats_Data_Select-1.csv';

    expect(downloadLink.href).toBe('http://localhost:3000/mockObjectURL');
    expect(downloadLink.download).toBe('Cute_Cats_Data_Select-1.csv');
  });

  it('toggles the "more information" section visibility when clicked', async () => {
    render(
      <Provider store={mockStore}>
        <ThemeProvider>
          <DropDownInfo />
        </ThemeProvider>
      </Provider>
    );

    const revealButton = screen.getByRole('button', {
      name: /Reveal more information/i,
    });
    fireEvent.click(revealButton);
    expect(screen.queryByText(/More information/i)).not.toBeInTheDocument();
  });
});

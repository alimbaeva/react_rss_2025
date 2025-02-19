import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import MoreInformation from '../components/dropDownInfo/MoreInformation';

const mockSetShowMoreInfo = vi.fn();

describe('MoreInformation Component', () => {
  it('should render selected items and close button', () => {
    render(
      <Provider store={store}>
        <MoreInformation setShowMoreInfo={mockSetShowMoreInfo} />
      </Provider>
    );

    expect(screen.getByText(/Close/i)).toBeInTheDocument();

    const selectedIds = store.getState().selected.selectedIds;
    selectedIds.forEach((id, index) => {
      expect(
        screen.getByText(
          `${index + 1}- Name: ${store.getState().selected.selectedData[id].name}`
        )
      ).toBeInTheDocument();
    });
  });

  it('should call setShowMoreInfo with false when close button is clicked', () => {
    render(
      <Provider store={store}>
        <MoreInformation setShowMoreInfo={mockSetShowMoreInfo} />
      </Provider>
    );

    fireEvent.click(screen.getByText(/Close/i));

    expect(mockSetShowMoreInfo).toHaveBeenCalledWith(false);
  });
});

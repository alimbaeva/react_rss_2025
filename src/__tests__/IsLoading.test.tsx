import { render, screen } from '@testing-library/react';
import IsLoading from '../components/IsLoading';

describe('IsLoading', () => {
  it('renders the modal and loading items', async () => {
    render(<IsLoading />);

    const loadItem1 = await screen.findByTestId('load-item-1');
    expect(loadItem1).toBeInTheDocument();

    const loadItem2 = await screen.findByTestId('load-item-2');
    expect(loadItem2).toBeInTheDocument();

    const loadItem3 = await screen.findByTestId('load-item-3');
    expect(loadItem3).toBeInTheDocument();
  });
});

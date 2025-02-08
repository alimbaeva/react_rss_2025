import { render, screen } from '@testing-library/react';
import EmptyData from '../components/EmptyData';

describe('EmptyData component', () => {
  it('renders the correct text when there is no data', async () => {
    render(<EmptyData />);

    const emptyData1 = await screen.findByTestId('empty-data-1');
    expect(emptyData1).toBeInTheDocument();

    const emptyData2 = await screen.findByTestId('empty-data-2');
    expect(emptyData2).toBeInTheDocument();

    const emptyData3 = await screen.findByTestId('empty-data-3');
    expect(emptyData3).toBeInTheDocument();
  });
});

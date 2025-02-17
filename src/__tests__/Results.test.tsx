import { screen } from '@testing-library/react';
import { vi } from 'vitest';
import { Provider, useSelector } from 'react-redux';

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

test('должен обновлять отображение Result и Details при изменении idValue', async () => {
  vi.mocked(useSelector).mockReturnValueOnce({
    search: { idValue: '', data: [] },
  });

  expect(screen.queryByText('Result')).not.toBeInTheDocument();
  expect(screen.queryByText('Details')).not.toBeInTheDocument();
});

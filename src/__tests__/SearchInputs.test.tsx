import { render, screen, fireEvent } from '@testing-library/react';
import SearchInputs from '../components/SearchInputs';
import { vi } from 'vitest';

const mockSetSearchValueState = vi.fn();
const mockSetShowListBreeds = vi.fn();

const mockBreeds = [
  { id: '1', name: 'Abyssinian' },
  { id: '2', name: 'Bengal' },
];

describe('SearchInputs', () => {
  it('renders input fields', () => {
    render(
      <SearchInputs
        searchValueState={{ searchValue: '', searchValueKey: '', idValue: '' }}
        breeds={mockBreeds}
        showListBreeds={false}
        setSearchValueState={mockSetSearchValueState}
        setShowListBreeds={mockSetShowListBreeds}
      />
    );

    expect(
      screen.getAllByPlaceholderText('Введите текст для поиска')
    ).toHaveLength(2);
  });

  it('updates searchValueKey when typing in the first input', () => {
    render(
      <SearchInputs
        searchValueState={{ searchValue: '', searchValueKey: '', idValue: '' }}
        breeds={mockBreeds}
        showListBreeds={false}
        setSearchValueState={mockSetSearchValueState}
        setShowListBreeds={mockSetShowListBreeds}
      />
    );

    const input = screen.getAllByPlaceholderText('Введите текст для поиска')[0];
    fireEvent.change(input, { target: { value: 'Aby' } });

    expect(mockSetSearchValueState).toHaveBeenCalledWith({
      searchValueKey: 'aby',
      searchValue: '',
      idValue: '',
    });
  });

  it('displays breed suggestions when typing in the second input', () => {
    render(
      <SearchInputs
        searchValueState={{ searchValue: '', searchValueKey: '', idValue: '' }}
        breeds={mockBreeds}
        showListBreeds={true}
        setSearchValueState={mockSetSearchValueState}
        setShowListBreeds={mockSetShowListBreeds}
      />
    );

    const input = screen.getAllByPlaceholderText('Введите текст для поиска')[1];
    fireEvent.change(input, { target: { value: 'Ben' } });

    expect(mockSetSearchValueState).toHaveBeenCalledWith({
      searchValue: 'ben',
      searchValueKey: '',
      idValue: '',
    });
  });

  it('selects a breed from the list', () => {
    render(
      <SearchInputs
        searchValueState={{ searchValue: '', searchValueKey: '', idValue: '' }}
        breeds={mockBreeds}
        showListBreeds={true}
        setSearchValueState={mockSetSearchValueState}
        setShowListBreeds={mockSetShowListBreeds}
      />
    );

    const breedItem = screen.getByText('Bengal');
    fireEvent.click(breedItem);

    expect(mockSetSearchValueState).toHaveBeenCalledWith({
      searchValue: 'Bengal',
      searchValueKey: '',
      idValue: '',
    });
    expect(mockSetShowListBreeds).toHaveBeenCalledWith(false);
  });
});

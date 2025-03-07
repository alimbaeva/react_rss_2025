import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import BreedList from '../components/searchInputs/BreedList';
import type { Breed } from '~/types/types';

test('renders "No breeds found" when inputOptions is empty', () => {
  const mockHandleBreedItem = vi.fn();

  render(
    <BreedList
      inputOptions={[]}
      handleBreedItem={mockHandleBreedItem}
      theme="light"
    />
  );

  expect(screen.getByText(/No breeds found/i)).toBeInTheDocument();
});

test('renders a list of breeds when inputOptions has items', () => {
  const mockHandleBreedItem = vi.fn();
  const mockBreeds: Breed[] = [
    { id: '1', name: 'Bengal' },
    { id: '2', name: 'Siamese' },
  ];

  render(
    <BreedList
      inputOptions={mockBreeds}
      handleBreedItem={mockHandleBreedItem}
      theme="light"
    />
  );

  expect(screen.getByText('Bengal')).toBeInTheDocument();
  expect(screen.getByText('Siamese')).toBeInTheDocument();
});

test('calls handleBreedItem when a breed item is clicked', () => {
  const mockHandleBreedItem = vi.fn();
  const mockBreeds: Breed[] = [
    { id: '1', name: 'Bengal' },
    { id: '2', name: 'Siamese' },
  ];

  render(
    <BreedList
      inputOptions={mockBreeds}
      handleBreedItem={mockHandleBreedItem}
      theme="light"
    />
  );

  fireEvent.click(screen.getByText('Bengal'));

  expect(mockHandleBreedItem).toHaveBeenCalledTimes(1);
});

test('applies correct classes based on theme', () => {
  const mockHandleBreedItem = vi.fn();
  const mockBreeds: Breed[] = [
    { id: '1', name: 'Bengal' },
    { id: '2', name: 'Siamese' },
  ];

  const { container } = render(
    <BreedList
      inputOptions={mockBreeds}
      handleBreedItem={mockHandleBreedItem}
      theme="dark"
    />
  );

  expect(container.firstChild).toHaveClass('dark-info wrapper-breed');
});

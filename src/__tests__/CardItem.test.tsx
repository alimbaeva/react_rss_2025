import { render, screen, fireEvent } from '@testing-library/react';
import CardItem from '../components/cards/CardItem';
import SearchContext from '../components/context/SearchContext';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import { CatBreed } from '../types/types';

const mockSearchContext = {
  searchValue: '',
  limit: 10,
  idValue: '',
  breeds: [],
  cats: [],
  searchValueKey: '',
  currentPage: 1,
  setCurrentPage: vi.fn(),
  setSearchValueKey: vi.fn(),
  setCats: vi.fn(),
  setLimit: vi.fn(),
  setSearchValue: vi.fn(),
  setBreedsValue: vi.fn(),
  setIdValue: vi.fn(),
  saveToLocalStorage: vi.fn(),
};

const mockCat: CatBreed = {
  id: 'abys',
  name: 'Abyssinian',
  origin: 'Egypt',
  life_span: '12-15 years',
  cfa_url: 'https://cfa.org/abyssinian/',
  wikipedia_url: 'https://en.wikipedia.org/wiki/Abyssinian_cat',
  country_code: 'EG',
  country_codes: 'EG,US,CA,GB',
  adaptability: 4,
  affection_level: 5,
  child_friendly: 3,
  dog_friendly: 4,
  energy_level: 5,
  grooming: 2,
  health_issues: 2,
  hypoallergenic: 1,
  indoor: 1,
  intelligence: 4,
  lap: 3,
  natural: 1,
  rare: 0,
  shedding_level: 3,
  short_legs: 0,
  social_needs: 3,
  stranger_friendly: 3,
  suppressed_tail: 0,
  vocalisation: 3,
  weight: {
    imperial: '8 - 12 lbs',
    metric: '3.6 - 5.4 kg',
  },
  alt_names: 'Abyssinian Cat, Abyssinian Shorthair, Abys',
  experimental: 0,
  hairless: 0,
  description:
    'The Abyssinian is a breed of domestic short-haired cat with a distinctive ticked coat.',
  temperament: 'Active, Energetic, Independent, Intelligent, Gentle',
  vcahospitals_url: 'https://vcahospitals.com/abyssinian',
  vetstreet_url: 'https://www.vetstreet.com/cats/abyssinian',
};

describe('CardItem', () => {
  it('должен корректно рендериться с данными', () => {
    render(
      <MemoryRouter>
        <SearchContext.Provider value={mockSearchContext}>
          <CardItem data={mockCat} />
        </SearchContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText(/Name:/)).toBeInTheDocument();
    expect(screen.getByText('Abyssinian')).toBeInTheDocument();
    expect(screen.getByText(/Origin:/)).toBeInTheDocument();
    expect(screen.getByText('Egypt')).toBeInTheDocument();
    expect(screen.getByText(/Temperament:/)).toBeInTheDocument();
    expect(
      screen.getByText('Active, Energetic, Independent, Intelligent, Gentle')
    ).toBeInTheDocument();
  });

  it('должен вызывать setIdValue при клике', () => {
    render(
      <MemoryRouter>
        <SearchContext.Provider value={mockSearchContext}>
          <CardItem data={mockCat} />
        </SearchContext.Provider>
      </MemoryRouter>
    );

    const cardElement = screen.getByText('Abyssinian').closest('div');

    if (cardElement) {
      fireEvent.click(cardElement);

      expect(mockSearchContext.setIdValue).toHaveBeenCalledWith('abys');
    } else {
      throw new Error('Card element not found');
    }
  });
});

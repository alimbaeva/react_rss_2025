import {
  Breed,
  CatBreed,
  CatItemType,
  Cats,
  CatsDataType,
  SearchStateType,
  Weight,
} from '../types/types';

export const mockWeight: Weight = {
  imperial: '10 - 15',
  metric: '4.5 - 6.8',
};

export const mockCatBreed: CatBreed = {
  id: 'abys',
  name: 'Abyssinian',
  origin: 'Egypt',
  life_span: '14 - 15',
  cfa_url: 'https://cfa.org/abyssinian',
  wikipedia_url: 'https://en.wikipedia.org/wiki/Abyssinian_cat',
  country_code: 'EG',
  country_codes: 'EG',
  adaptability: 5,
  affection_level: 5,
  child_friendly: 4,
  dog_friendly: 4,
  energy_level: 5,
  grooming: 2,
  health_issues: 2,
  hypoallergenic: 1,
  indoor: 0,
  intelligence: 5,
  lap: 1,
  natural: 1,
  rare: 0,
  shedding_level: 3,
  short_legs: 0,
  social_needs: 5,
  stranger_friendly: 5,
  suppressed_tail: 0,
  vocalisation: 3,
  weight: mockWeight,
  alt_names: 'Aby',
  experimental: 0,
  hairless: 0,
  description: 'Abyssinians are playful, intelligent and love people.',
  temperament: 'Active, Energetic, Independent, Intelligent, Gentle',
  vcahospitals_url: 'https://vcahospitals.com/know-your-pet/abyssinian',
  vetstreet_url: 'https://www.vetstreet.com/cats/abyssinian',
};

export const mockCats: Cats = {
  ...mockCatBreed,
  reference_image_id: 'abys123',
};

export const mockCatsData: CatsDataType = {
  breeds: [mockCatBreed],
  height: 600,
  id: 'image123',
  url: 'https://cdn2.thecatapi.com/images/abys123.jpg',
  width: 800,
};

export const mockCatItem: CatItemType = {
  id: 'abys',
  description: 'Abyssinians are very playful and social cats.',
  name: 'Abyssinian',
  origin: 'Egypt',
};

export const mockBreed: Breed = {
  id: 'abys',
  name: 'Abyssinian',
};

export const mockSearchState: SearchStateType = {
  searchValue: 'Abyssinian',
  limit: 10,
};

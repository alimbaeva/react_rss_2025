import type {
  Breed,
  BreedAllInfo,
  BreedExtra,
  CatBreed,
  CatBreedExtra,
  CatItemType,
  Cats,
  CatsDataType,
  SearchStateType,
  Weight,
} from '~/types/types'

export const mockWeight: Weight = {
  imperial: '10 - 15',
  metric: '4.5 - 6.8',
}

export const mockCatBreedExtra: CatBreedExtra = {
  reference_image_id: 'abys123',
}

export const mockBreedExtra: BreedExtra = {
  description: 'A playful and affectionate breed.',
  temperament: 'Friendly, Energetic, Intelligent',
  vcahospitals_url: 'https://vcahospitals.com/abys',
  vetstreet_url: 'https://www.vetstreet.com/abys',
}

export const mockBreedAllInfo: BreedAllInfo = {
  id: 'abys',
  name: 'Abyssinian',
  origin: 'Egypt',
  life_span: '12 - 15',
  cfa_url: 'https://cfa.org/abyssinian',
  wikipedia_url: 'https://en.wikipedia.org/wiki/Abyssinian_cat',
  country_code: 'EG',
  country_codes: 'EG',
  adaptability: 5,
  affection_level: 5,
  child_friendly: 4,
  dog_friendly: 5,
  energy_level: 5,
  grooming: 2,
  health_issues: 2,
  hypoallergenic: 1,
  indoor: 1,
  intelligence: 5,
  lap: 3,
  natural: 1,
  rare: 0,
  shedding_level: 2,
  short_legs: 0,
  social_needs: 5,
  stranger_friendly: 5,
  suppressed_tail: 0,
  vocalisation: 3,
  weight: mockWeight,
  alt_names: 'Aby',
  experimental: 0,
  hairless: 0,
}

export const mockCatBreed: CatBreed = {
  ...mockBreedAllInfo,
  ...mockBreedExtra,
}

export const mockCats: Cats = {
  ...mockBreedAllInfo,
  ...mockCatBreedExtra,
}

export const mockCatsDataType: CatsDataType = {
  breeds: [mockCatBreed],
  height: 500,
  id: 'image123',
  url: 'https://example.com/cat.jpg',
  width: 800,
}

export const mockCatItemType: CatItemType = {
  id: 'abys',
  description: 'A sleek and agile breed with a love for climbing.',
  name: 'Abyssinian',
  origin: 'Egypt',
}

export const mockBreed: Breed = {
  id: 'abys',
  name: 'Abyssinian',
}

export const mockSearchState: SearchStateType = {
  searchValue: 'Abyssinian',
  limit: 10,
}

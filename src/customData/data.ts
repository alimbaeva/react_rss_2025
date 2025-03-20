import { FilterData } from '../types/types';

export const sortLabel = [
  'A-Z',
  'Z-A',
  'population ascending',
  'population descending',
];

export const filterData: FilterData[] = [
  {
    label: 'Filter by region:',
    type: 'text',
    forInput: 'filter',
  },
  {
    label: 'Search countries by name:',
    type: 'text',
    forInput: 'search',
  },
  {
    label: 'Sort countries by population or name:',
    type: 'text',
    forInput: 'sort',
  },
];

import { FilterData } from '../types/types';

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

import { CuntryData } from '../../types/types';

export const sortData = (data: CuntryData[], sortText: string) => {
  let sortData: CuntryData[] = [];

  switch (sortText) {
    case 'A-Z':
      sortData = [...data].sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
      break;
    case 'Z-A':
      sortData = [...data].sort((a, b) =>
        b.name.common.localeCompare(a.name.common)
      );
      break;
    case 'population ascending':
      sortData = [...data].sort((a, b) => a.population - b.population);
      break;
    case 'population descending':
      sortData = [...data].sort((a, b) => b.population - a.population);
      break;
  }

  return sortData;
};

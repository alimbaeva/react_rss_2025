import { CuntryData } from '../../types/types';

const sortCache = new Map<string, CuntryData[]>();

export const sortData = (
  data: CuntryData[],
  sortText: string,
  filterKey?: string
) => {
  const cacheKey = `${sortText}-${data.length}-${filterKey}`;

  if (sortCache.has(cacheKey)) {
    return sortCache.get(cacheKey);
  }

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

  sortCache.set(cacheKey, sortData);
  return sortData;
};

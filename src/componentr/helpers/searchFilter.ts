import { CuntryData } from '../../types/types';

const filterCache = new Map<string, CuntryData[]>();

export const searchFilter = (data: CuntryData[], key: string) => {
  const cacheKey = `${key}-${data.length}`;

  if (filterCache.has(cacheKey)) {
    return filterCache.get(cacheKey);
  }

  const filterData = data.filter((el) =>
    el.name.common.toLowerCase().includes(key.toLowerCase())
  );

  filterCache.set(cacheKey, filterData);
  return filterData;
};

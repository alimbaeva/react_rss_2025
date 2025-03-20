import { CuntryData } from '../../types/types';

const filterCache = new Map<string, CuntryData[]>();

export const filterDataRegion = (data: CuntryData[], key: string) => {
  const cacheKey = `${key}-${data.length}`;

  if (filterCache.has(cacheKey)) {
    return filterCache.get(cacheKey);
  }

  const filterData = data.filter((el) => el.region === key);

  filterCache.set(cacheKey, filterData);
  return filterData;
};

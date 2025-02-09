import { Breed, CatBreed, CatsDataType } from '../types/types';
import { APIKEY, URLAPI, URLAPI_SEARCH } from '../veriables';

export const fetchCatsAll = async () => {
  const breedsRaw = localStorage.getItem('breedsValue');
  const breeds: Breed[] = breedsRaw ? JSON.parse(breedsRaw) : [];

  if (!breeds.length) return [];

  const results: CatsDataType[] = [];
  for (let i = 0; i < Math.min(12, breeds.length); i++) {
    try {
      const response = await fetch(
        `${URLAPI_SEARCH}limit=100&breed_ids=${breeds[i].id}&api_key=${APIKEY}`
      );
      if (!response.ok) throw new Error('Ошибка загрузки данных');
      const data: CatsDataType[] = await response.json();
      results.push(...data);
      await new Promise((res) => setTimeout(res, 600));
    } catch (err) {
      console.error(err);
      return [];
    }
  }
  return results;
};

export const fetchCats = async () => {
  try {
    const response = await fetch(URLAPI);
    if (!response.ok) {
      throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
    }
    const data: CatBreed[] = await response.json();
    const dataBread: Breed[] = data.map((el) => ({
      id: el.id,
      name: el.name,
    }));

    localStorage.setItem('breedsValue', JSON.stringify(dataBread));
    localStorage.setItem('dataCats', JSON.stringify(data));

    return { data: data, breeds: dataBread };
  } catch (error: unknown) {
    console.error(error);
    return { data: [], breeds: [] };
  }
};

export const fetchGetCatsData = async (idValue: string) => {
  try {
    const response = await fetch(
      `${URLAPI_SEARCH}limit=10&breed_ids=${idValue}&api_key=${APIKEY}`
    );
    if (!response.ok) {
      throw new Error(
        `Ошибка ${response.status}: ${response.statusText}. Не удалось загрузить данные.`
      );
    }
    const data: CatsDataType[] = await response.json();

    localStorage.setItem('data', JSON.stringify(data));
    return data;
  } catch (err) {
    console.error(err);
  }
};

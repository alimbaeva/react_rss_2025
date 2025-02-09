import { useState, useEffect, useCallback } from 'react';
import { CatBreed } from '../types/types';
import { useSearchParams } from 'react-router-dom';
import { fetchCats } from '../customhooks/useFetchCats';
import { useSearch } from './context/useSearch';

export const useResultData = () => {
  const {
    searchValueKey,
    searchValue,
    cats,
    limit,
    currentPage,
    idValue,
    setCurrentPage,
    setIdValue,
  } = useSearch();
  const [searchParams, setSearchParams] = useSearchParams();

  const dataLocSt = localStorage.getItem('dataCurent') ? true : false;
  const [data, setData] = useState<CatBreed[]>(
    dataLocSt ? JSON.parse(localStorage.getItem('dataCurent') as string) : []
  );
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [pages, setPages] = useState<number[]>([]);

  const getCatsData = useCallback(async () => {
    setIsLoad(true);
    setError(null);

    const keySearch = searchValueKey ? searchValueKey : searchValue;
    const filteredCat = cats.filter((el) =>
      el.name.toLowerCase().includes(keySearch.toLowerCase())
    );

    setData(filteredCat);
    setTimeout(() => setIsLoad(false), 300);
    localStorage.setItem('dataCurent', JSON.stringify(filteredCat));
  }, [cats, searchValue, searchValueKey]);

  useEffect(() => {
    if (searchValue || searchValueKey) getCatsData();
    if (!searchValue && !searchValueKey) setData([]);
  }, [searchValue, searchValueKey, getCatsData]);

  useEffect(() => {
    const arr = Array.from(
      { length: Math.ceil(data.length / limit) },
      (_, i) => i
    );
    setPages(arr);
    if (arr.length === 1) {
      setCurrentPage(0);
      localStorage.setItem('currentPage', `${0}`);
    }
  }, [data, limit, pages.length, setCurrentPage]);

  useEffect(() => {
    const page = Number(searchParams.get('page'));
    if (data.length <= 0) {
      setSearchParams();
      return;
    }
    if (idValue) {
      setSearchParams({ page: `${currentPage + 1}`, details: `${idValue}` });
      return;
    }

    if (!page || currentPage !== page) {
      setSearchParams({ page: `${currentPage + 1}` });
      return;
    }
  }, [currentPage, searchParams, setSearchParams, idValue, data.length]);

  useEffect(() => {
    if (!dataLocSt) {
      const getCats = async () => {
        const { data: catsAll } = await fetchCats();
        setData(catsAll);
      };
      getCats();
    }
  }, [dataLocSt]);

  return {
    data,
    pages,
    isLoad,
    error,
    idValue,
    setIdValue,
    currentPage,
    limit,
  };
};

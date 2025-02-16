import { useState, useEffect, useCallback } from 'react';
import { CatBreed } from '../types/types';
import { useSearchParams } from 'react-router-dom';
import { RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, setPages } from '../store/slices/searchSlice';

export const useResultData = () => {
  const dispatch = useDispatch();
  const { searchValueKey, searchValue, pages, limit, currentPage, idValue } =
    useSelector((state: RootState) => state.search);
  const cats = useSelector((state: RootState) => state.breeds.cats);

  const [searchParams, setSearchParams] = useSearchParams();

  const dataLocSt = localStorage.getItem('dataCurent') ? true : false;
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [data, setData] = useState<CatBreed[]>(
    dataLocSt ? JSON.parse(localStorage.getItem('dataCurent') as string) : cats
  );

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
    dispatch(setPages(arr));
    if (arr.length === 1) {
      dispatch(setCurrentPage(0));
    }
  }, [data.length, dispatch, limit]);

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
    if (!dataLocSt) setData(cats);
  }, [cats, dataLocSt]);

  return {
    data,
    pages,
    isLoad,
    error,
    idValue,
    currentPage,
    limit,
  };
};

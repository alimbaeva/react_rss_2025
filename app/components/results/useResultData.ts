import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from '~/customhooks/localActions';
import type { RootState } from '~/store/store';
import type { CatBreed } from '~/types/types';
import { setCurrentPage, setPages } from '~/store/slices/searchSlice';
import { useSearchParams, useNavigate } from 'react-router-dom';

export const useResultData = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const { searchValueKey, searchValue, pages, limit, currentPage, idValue } =
    useSelector((state: RootState) => state.search);
  const cats = useSelector((state: RootState) => state.breeds.cats);

  const dataLocSt = getFromLocalStorage<CatBreed[]>('dataCurent')
    ? true
    : false;
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<CatBreed[]>(
    getFromLocalStorage<CatBreed[]>('dataCurent') ?? cats
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
    saveToLocalStorage('dataCurent', filteredCat);
  }, [cats, searchValue, searchValueKey]);

  useEffect(() => {
    if (searchValue || searchValueKey) getCatsData();
    if (!searchValue && !searchValueKey) setData([]);
  }, [searchValue, searchValueKey, getCatsData]);

  useEffect(() => {
    const validLimit = limit > 0 ? limit : 10;
    const arr = Array.from(
      { length: Math.ceil(data.length / validLimit) },
      (_, i) => i
    );
    dispatch(setPages(arr));
    if (arr.length === 1) {
      dispatch(setCurrentPage(0));
    }
  }, [data.length, dispatch, limit]);

  useEffect(() => {
    const page = Number(searchParams.get('page'));

    if (data.length === 0) {
      setSearchParams({});
      return;
    }

    const params: Record<string, string> = { page: `${currentPage + 1}` };

    if (idValue) {
      params.details = idValue;
    }

    if (!page || currentPage !== page) {
      setSearchParams(params, { replace: true });
    }
  }, [currentPage, idValue, data.length, searchParams, setSearchParams]);

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

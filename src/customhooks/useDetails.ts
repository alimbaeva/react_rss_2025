'use client';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { setIdValue } from '@/store/slices/searchSlice';
import {
  addToSelected,
  removeFromSelected,
} from '@/store/slices/selectedSlice';
import { setDetaileCards } from '@/store/slices/breedsSlice';
import { useGetCatsDataByBreedQuery } from '@/store/queryApi/breedIdApi';

const chooseColorTrue = 'rgb(74, 198, 11)';
const chooseColorFalse = '#f3f798';

export const useDetails = (idValue: string) => {
  const dispatch = useDispatch();
  const selectedIds = useSelector(
    (state: RootState) => state.selected.selectedIds
  );
  const [loading, setIsLoading] = useState(false);
  const [chooseItem, setChooseItem] = useState(selectedIds.includes(idValue));

  const { data: detaileCards = [], error = null } = useGetCatsDataByBreedQuery(
    idValue || ''
  );

  useEffect(() => {
    if (idValue === null || idValue === '') return;
    setIsLoading(true);
    setChooseItem(selectedIds.includes(idValue));
    setTimeout(() => setIsLoading(false), 300);
  }, [idValue, selectedIds]);

  useEffect(() => {
    if (detaileCards) {
      dispatch(setDetaileCards(detaileCards));
    }
  }, [detaileCards, dispatch]);

  const handleCloseDetail = () => {
    dispatch(setIdValue(''));
  };

  const handleChoose = () => {
    if (!detaileCards.length) return;

    const saveData = {
      id: idValue,
      description: detaileCards[0].breeds[0].description,
      name: detaileCards[0].breeds[0].name,
      origin: detaileCards[0].breeds[0].origin,
    };
    if (!chooseItem) {
      dispatch(addToSelected(saveData));
      setChooseItem(true);
    }
    if (chooseItem) {
      dispatch(removeFromSelected(idValue));
      setChooseItem(false);
    }
  };

  const res = {
    loading,
    chooseItem,
    handleCloseDetail,
    handleChoose,
    detaileCards,
    error,
    chooseColorTrue,
    chooseColorFalse,
  };

  return res || {};
};

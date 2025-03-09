import {
  useState,
  useEffect,
  type ChangeEvent,
  type MouseEvent,
  type FormEvent,
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { Breed } from '~/types/types'
import type { RootState } from '~/store/store'
import {
  setCleanSearch,
  setCurrentPage,
  setSearchValue,
  setSearchValueKey,
} from '~/store/slices/searchSlice'

export const useSearchInputs = () => {
  const dispatch = useDispatch()
  const breeds = useSelector((state: RootState) => state.breeds.breeds)
  const { searchValue, searchValueKey } = useSelector(
    (state: RootState) => state.search
  )

  const [inputOptions, setInputOptions] = useState<Breed[]>([])
  const [showListBreeds, setShowListBreeds] = useState<boolean>(true)
  const [valueKey, setValueKey] = useState<string>(searchValueKey)
  const [seaValue, setSeaValue] = useState<string>(searchValue)
  const [breedItem, setBreedItem] = useState<string>(searchValue)

  const handleChangeKey = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase().trim()
    setValueKey(value)
    setSeaValue('')
    setBreedItem('')
    setShowListBreeds(false)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase().trim()
    setSeaValue(value)
    setValueKey('')
    setShowListBreeds(true)

    if (!Array.isArray(breeds)) return

    const filteredBreeds = breeds.filter((el) =>
      el.name.toLowerCase().includes(value)
    )

    setInputOptions(filteredBreeds.length ? filteredBreeds : [])
  }

  const handleBreedItem = (event: MouseEvent<HTMLLIElement>) => {
    const eventName = event.currentTarget.textContent as string
    setBreedItem(eventName)
    setSeaValue(eventName)
    setShowListBreeds(false)
  }

  const handleSubmit = (event: FormEvent<Element>) => {
    event.preventDefault()

    if (!seaValue && !valueKey) {
      dispatch(setCleanSearch())
      return
    }
    if (breedItem) dispatch(setSearchValue(breedItem))
    if (valueKey) dispatch(setSearchValueKey(valueKey))
    dispatch(setCurrentPage(0))
  }

  useEffect(() => {
    if (!seaValue) {
      setInputOptions(breeds)
      setShowListBreeds(false)
    }
  }, [breeds, seaValue])

  return {
    inputOptions,
    showListBreeds,
    valueKey,
    seaValue,
    breedItem,
    handleChangeKey,
    handleChange,
    handleBreedItem,
    handleSubmit,
  }
}

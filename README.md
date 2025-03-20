# react_rss_2025

### Функция `saveAndDispatchData`

Эта функция отвечает за сохранение данных в локальное хранилище и их отправку в Redux хранилище.

- **Параметры**:
  - `data`: Данные типа `countries`.
- **Действия**:
  - Сохраняет данные в локальное хранилище с ключом `'data'`.
  - Отправляет данные в Redux хранилище с использованием `setData`.

```tsx
const saveAndDispatchData = useCallback(
  (data: typeof countries) => {
    if (data) {
      saveToLocalStorage('data', data);
      dispatch(setData(data));
    }
  },
  [dispatch]
);
```


> **Предотвратила ненужные перерисовки с помощью `useCallback`.**

```
const memRegion = useMemo(() => region, [region]);
const memSortLabel = useMemo(() => sortLabel, []);
```

> memRegion и memSortLabel мемоизируются с помощью useMemo. Это предотвращает пересоздание этих значений при каждом рендере компонента, что особенно полезно, если эти значения не меняются часто.

```
const handleSelectChange = useCallback(
  (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilter(event.target.value));
  },
  [dispatch]
);
```

> Хуки useCallback используются для мемоизации обработчиков событий: handleSelectChange, handleSortChange и handleChange.


```
export default memo(Header);
```

> Компонент Header обернут в memo, что позволяет предотвратить его перерисовку, если его пропсы не изменились. memo оптимизирует компонент, избегая повторной отрисовки, если состояние компонента или пропсы не изменились.

```
const renderOptions = useMemo(
  () =>
    options?.map((el, id) => (
      <option key={id} value={el}>
        {el}
      </option>
    )),
  [options]
);
```

> renderOptions мемоизируется с помощью хука useMemo. Это предотвращает пересоздание опций для ```<select>```, если массив options не изменился. Таким образом, если options не изменяется, то при рендерах компонента не будет происходить перерасчета массива опций, что может быть полезно для больших списков.

```
export default memo(InputField);
```

> Компонент InputField обернут в memo, чтобы он не перерисовывался, если его пропсы не изменяются. Это полезно, если InputField используется несколько раз в родительском компоненте и не требует перерисовки при каждом рендере, если его пропсы остаются неизменными.

```
export default memo(List, (prevProps, nextProps) =>
  JSON.stringify(prevProps.data) === JSON.stringify(nextProps.data)
);
```

> Компонент List обернут в memo, чтобы предотвратить его перерисовку, если пропс data не изменился. Это важно, если компонент используется в списке, где каждый элемент может быть перерасчитан, но данные для конкретного элемента не изменились.

```
<img src={data.flags.png} alt="flag" loading="lazy" />
```

> В теге <img> используется атрибут loading="lazy". Это улучшает производительность, так как изображения загружаются только тогда, когда они становятся видимыми в области просмотра. Это особенно полезно для страниц с длинными списками изображений, так как снижает нагрузку на начальную загрузку страницы.

```
const filterCache = new Map<string, CuntryData[]>();
```

> В коде используется filterCache (объект Map), чтобы кэшировать результаты фильтрации данных. Кэширование позволяет избежать повторной фильтрации одних и тех же данных, если те же параметры фильтрации применяются несколько раз.

```
const cacheKey = `${key}-${data.length}`;
if (filterCache.has(cacheKey)) {
  return filterCache.get(cacheKey);

```

> Каждый раз, когда вызывается функция filterDataRegion, проверяется, есть ли уже закэшированные данные для текущего фильтра (с ключом cacheKey).


** В таком же варианте написан: searchFilter, sortData ***
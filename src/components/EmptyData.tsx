import { FC } from 'react';

const EmptyData: FC = () => {
  return (
    <div className="empty-data">
      <p data-testid="empty-data-1"> Нет данных для отображения!</p>
      <p data-testid="empty-data-2"> Введите запрос в поле поиска.</p>
      <p data-testid="empty-data-3"> Выберите из выподающего списка.</p>
    </div>
  );
};

export default EmptyData;

import { FC } from 'react';

const EmptyData: FC = () => {
  return (
    <div className="empty-data">
      <p> Нет данных для отображения!</p>
      <p> Введите запрос в поле поиска.</p>
      <p> Выберите из выподающего списка.</p>
    </div>
  );
};

export default EmptyData;

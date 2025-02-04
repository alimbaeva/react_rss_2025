import { Component, ReactNode } from 'react';

class EmptyData extends Component {
  render(): ReactNode {
    return (
      <div className="empty-data">
        <p> Нет данных для отображения!</p>
        <p> Введите запрос в поле поиска.</p>
        <p> Выберите из выподающего списка.</p>
      </div>
    );
  }
}

export default EmptyData;

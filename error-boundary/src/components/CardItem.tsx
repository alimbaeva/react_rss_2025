import { Component, ReactNode } from 'react';
import { CatsDataType } from '../types/types';

interface CardItemProps {
  data: CatsDataType;
}

class CardItem extends Component<CardItemProps> {
  render(): ReactNode {
    return (
      <div>
        <img src={this.props.data.url} alt={this.props.data.breeds[0].name} />
        <div>
          <p>Name: {this.props.data.breeds[0].name}</p>
          <p>Origin: {this.props.data.breeds[0].origin}</p>
          <p>Temperament: {this.props.data.breeds[0].temperament}</p>
          <p>Weight: {this.props.data.breeds[0].weight.imperial}</p>
          <p>{this.props.data.breeds[0].description}</p>
        </div>
      </div>
    );
  }
}

export default CardItem;

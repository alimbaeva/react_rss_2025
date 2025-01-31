import { Component, ReactNode } from 'react';
import { CatsDataType } from '../types/types';
import './styles/cardItem.scss';

interface CardItemProps {
  data: CatsDataType;
}

class CardItem extends Component<CardItemProps> {
  render(): ReactNode {
    return (
      <div className="card">
        <div className="img-container">
          <img src={this.props.data.url} alt={this.props.data.breeds[0].name} />
        </div>
        <div className="info-wrapper">
          <p>
            <span>Name:</span> {this.props.data.breeds[0].name}
          </p>
          <p>
            <span>Origin:</span> {this.props.data.breeds[0].origin}
          </p>
          <p>
            <span>Temperament:</span> {this.props.data.breeds[0].temperament}
          </p>
          <p>
            <span>Weight:</span> {this.props.data.breeds[0].weight.imperial}
          </p>
          <p>
            <span>Description:</span> {this.props.data.breeds[0].description}
          </p>
        </div>
      </div>
    );
  }
}

export default CardItem;

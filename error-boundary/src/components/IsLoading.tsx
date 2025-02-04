import { Component, ReactNode } from 'react';
import './styles/isLoading.scss';

class IsLoading extends Component {
  render(): ReactNode {
    return (
      <div className="modal">
        <div className="inner-modal">
          <div className="inner">
            <div className="load-item item-1"></div>
            <div className="load-item item-2"></div>
            <div className="load-item item-3"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default IsLoading;

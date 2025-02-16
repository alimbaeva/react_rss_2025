import { FC } from 'react';
import DownloadIcon from '../icons/DownloadIcon';
import TrashIcon from '../icons/TrashIcon';
import '../styles/dropDownInfo.scss';

const headerIconColor = '#e67a7a';

const DropDownInfo: FC = () => {
  return (
    <section className="wrapper-info">
      <div className="down-info">
        <div>
          <p className="count-item">
            <span>3</span> items selected
          </p>
          <button className="reveal-btn">Reveal more information</button>
        </div>
        <div className="button-wrapper">
          <button className="trash-btn">
            <TrashIcon fill={headerIconColor} />
          </button>
          <button className="download-btn">
            <DownloadIcon fill={headerIconColor} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DropDownInfo;

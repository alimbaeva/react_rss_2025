import { FC } from 'react';
import DownloadIcon from '../icons/DownloadIcon';
import TrashIcon from '../icons/TrashIcon';
import '../styles/dropDownInfo.scss';

const DropDownInfo: FC = () => {
  return (
    <section>
      <div>
        <p>
          <span>3</span> items selected
        </p>
        <button>
          <TrashIcon fill={''} />
        </button>
        <button>
          <DownloadIcon fill={''} />
        </button>
      </div>
    </section>
  );
};

export default DropDownInfo;

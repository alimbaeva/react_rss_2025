import { FC, useEffect, useState } from 'react';
import TrashIcon from '../icons/TrashIcon';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { clearSelected } from '@/store/slices/selectedSlice';
import '@styles/dropDownInfo.scss';
import DownloadFile from './DownloadFile';
import MoreInformation from './MoreInformation';
import { headerIconColor } from '../../veriables';
import { useTheme } from '../context/useSearch';

const DropDownInfo: FC = () => {
  const dispatch = useDispatch();
  const { selectedIds } = useSelector((state: RootState) => state.selected);
  const { theme } = useTheme();

  const [count, setCount] = useState(0);
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const hadleTrashSelected = () => {
    dispatch(clearSelected());
  };

  useEffect(() => {
    setCount(selectedIds.length);
    setShowMoreInfo(false);
  }, [selectedIds]);

  if (!count) return;

  return (
    <section className="wrapper-info" data-testid="dropdown-info-section">
      <div
        className={
          theme === 'light' ? 'light-info down-info' : 'dark-info down-info'
        }
      >
        <div>
          <p className="count-item" data-testid="item-count">
            <span>{count}</span> items selected
          </p>
          {showMoreInfo && (
            <MoreInformation setShowMoreInfo={setShowMoreInfo} />
          )}
          {!showMoreInfo && (
            <button
              onClick={() => setShowMoreInfo(true)}
              className="reveal-btn"
            >
              Reveal more information
            </button>
          )}
        </div>
        <div className="button-wrapper">
          <button
            data-testid="trash-button"
            onClick={hadleTrashSelected}
            className="trash-btn"
          >
            <TrashIcon fill={headerIconColor} data-testid="trash-icon" />
          </button>
          <DownloadFile data-testid="download-file" />
        </div>
      </div>
    </section>
  );
};

export default DropDownInfo;

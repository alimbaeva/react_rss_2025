import { FC, useEffect, useState } from 'react';
import TrashIcon from '../icons/TrashIcon';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { clearSelected } from '../../store/slices/selectedSlice';
import '../styles/dropDownInfo.scss';
import DownloadFile from './DownloadFile';

const headerIconColor = '#e67a7a';

const DropDownInfo: FC = () => {
  const dispatch = useDispatch();
  const { selectedIds } = useSelector((state: RootState) => state.selected);

  const [count, setCount] = useState(0);

  const hadleTrashSelected = () => {
    dispatch(clearSelected());
  };

  useEffect(() => {
    setCount(selectedIds.length);
  }, [selectedIds]);

  if (!count) return;

  return (
    <section className="wrapper-info">
      <div className="down-info">
        <div>
          <p className="count-item">
            <span>{count}</span> items selected
          </p>
          <button className="reveal-btn">Reveal more information</button>
        </div>
        <div className="button-wrapper">
          <button onClick={hadleTrashSelected} className="trash-btn">
            <TrashIcon fill={headerIconColor} />
          </button>
          <DownloadFile />
        </div>
      </div>
    </section>
  );
};

export default DropDownInfo;

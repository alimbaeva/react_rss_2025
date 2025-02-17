import { FC, useEffect, useState } from 'react';
import DownloadIcon from '../icons/DownloadIcon';
import { RootState } from '../../store/store';
import '../styles/dropDownInfo.scss';
import { useSelector } from 'react-redux';
import { headerIconColor } from '../../veriables';

const DownloadFile: FC = () => {
  const { selectedData, selectedIds } = useSelector(
    (state: RootState) => state.selected
  );

  const [fileUrl, setFileUrl] = useState<string | null>(null);

  const handleDownload = () => {
    const formatData = Object.entries(selectedData)
      .map(([key, item]) => {
        const formattedKey = `**${key.toUpperCase()}**\n`;

        const formattedDetails = Object.entries(item)
          .map(([field, value]) => `**${field}:** ${value}`)
          .join('\n');

        return `${formattedKey}\n${formattedDetails}\n`;
      })
      .join('\n');

    const blob = new Blob([formatData], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);

    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = `Cute_Cats_Data_Select-${selectedIds.length}.csv`;
    downloadLink.click();
    setFileUrl(url);
  };

  useEffect(() => {
    return () => {
      if (fileUrl) {
        URL.revokeObjectURL(fileUrl);
      }
    };
  }, [fileUrl]);

  return (
    <button onClick={handleDownload} className="download-btn">
      <DownloadIcon fill={headerIconColor} />
    </button>
  );
};

export default DownloadFile;

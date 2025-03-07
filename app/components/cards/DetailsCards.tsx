import { type FC } from 'react';
import '~/styles/details.scss';

interface DetailsCardsProps {
  url?: string;
}

const DetailsCards: FC<DetailsCardsProps> = ({ url }) => {

  return (
    <div data-testid="details-card" className="image-wrapper">
    <img
      data-testid="details-img"
      src={url}
      alt="cat image"
      className="w-full h-full object-cover"
    />
    </div>
  );
};

export default DetailsCards;

import { FC } from 'react';

interface DetailsCardsProps {
  url: string;
}

const DetailsCards: FC<DetailsCardsProps> = ({ url }) => {
  return (
    <div data-testid="details-card" className="image-wrapper">
      <img src={url} alt="cat image" />
    </div>
  );
};

export default DetailsCards;

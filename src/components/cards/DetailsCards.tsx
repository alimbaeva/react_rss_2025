'use client';

import React, { FC } from 'react';
import Image from 'next/image';

interface DetailsCardsProps {
  url: string;
}

const DetailsCards: FC<DetailsCardsProps> = ({ url }) => {
  return (
    <div data-testid="details-card" className="image-wrapper">
      <Image
        src={url}
        alt="cat image"
        width={300}
        height={200}
        priority
        layout="responsive"
        objectFit="cover"
      />
    </div>
  );
};

export default DetailsCards;

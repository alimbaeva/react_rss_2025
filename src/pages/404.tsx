import React, { FC } from 'react';
import '@styles/page404.scss';
import Link from 'next/link';

const Page404: FC = () => {
  return (
    <section>
      <div className="container">
        <h1 className="title">This page does not exist</h1>
        <Link href={'/'} className="link-page">
          Main page
        </Link>
      </div>
    </section>
  );
};

export default Page404;

import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import '../../components/styles/page404.scss';

const Page404: FC = () => {
  return (
    <section>
      <div className="container">
        <h1 className="title">This page does not exist</h1>
        <NavLink className="link-page" to={'/'}>
          Main page
        </NavLink>
      </div>
    </section>
  );
};

export default Page404;

import { FC } from 'react';
import Logo from '../logo/Logo';
import '../styles/footer.scss';

const Footer: FC = () => {
  return (
    <footer>
      <div className="footer">
        <Logo />
      </div>
    </footer>
  );
};

export default Footer;

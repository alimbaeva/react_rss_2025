import { Link } from "react-router-dom";
import './header.scss';

const Header = () => {
  return (
    <header>
      <section className="container header">
        <h1 className="logoText">Forms</h1>
        <nav className="wrapperLink">
          <Link to="/">
            Main
          </Link>
          <Link to="/uncontrolled-form">
            Form Uncontrolled
          </Link>
          <Link to="/controlled-form">
            Form Controlled
          </Link>
        </nav>
      </section>
    </header>
  )
}

export default Header;
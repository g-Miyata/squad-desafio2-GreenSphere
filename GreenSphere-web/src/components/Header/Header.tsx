import { Link, NavLink } from 'react-router-dom';
import { UserButton } from '@clerk/clerk-react';
import { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import style from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={style.header}>
      <div>
        <Link to={'/'}>
          <img src={logo} title="Green Sphere Logo" alt="Green Sphere Logo" />
        </Link>
      </div>
      <button className={style.menuButton} onClick={toggleMenu} aria-label="Toggle menu">
        ☰
      </button>
      <nav className={`${style.nav} ${menuOpen ? style.open : ''}`}>
        <ul>
          <li>
            <NavLink onClick={toggleMenu} className={({ isActive }) => `${style.navLink} ${isActive ? style.activeLink : ''}`} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink onClick={toggleMenu} className={({ isActive }) => `${style.navLink} ${isActive ? style.activeLink : ''}`} to="/register">
              Register
            </NavLink>
          </li>
          <li>
            <NavLink onClick={toggleMenu} className={({ isActive }) => `${style.navLink} ${isActive ? style.activeLink : ''}`} to="/products">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink onClick={toggleMenu} className={({ isActive }) => `${style.navLink} ${isActive ? style.activeLink : ''}`} to="/about-us">
              About Us
            </NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: {
                width: '35px',
                height: '35px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              },
            },
          }}
        />
      </div>
    </header>
  );
};

export default Header;

import { NavLink } from 'react-router-dom';
import { UserButton } from '@clerk/clerk-react';
import logo from '../../assets/images/logo.svg';
import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <div>
        <img src={logo} title="Green Sphere Logo" alt="Green Sphere Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink className={({ isActive }) => `${style.navLink} ${isActive ? style.activeLink : ''}`} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => `${style.navLink} ${isActive ? style.activeLink : ''}`} to="/register">
              Register
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => `${style.navLink} ${isActive ? style.activeLink : ''}`} to="/products">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => `${style.navLink} ${isActive ? style.activeLink : ''}`} to="/about-us">
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

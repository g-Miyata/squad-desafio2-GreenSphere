import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import style from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={style.container}>
      <section>
        <div className={style.footerContent}>
          <div className={style.contact}>
            <h1>Stay Fresh</h1>
            <p>compassinhos@gmail.com</p>
            <p>+55 41 99999-9999</p>
          </div>

          <div className={style.linksContainer}>
            <div className={style.links}>
              <h3>Links</h3>
              <Link to="/aboutUs" className={style.none}>
                About us
              </Link>
              <Link to="/products" className={style.none}>
                Products
              </Link>
              <Link to="/blogs" className={style.none}>
                Blogs
              </Link>
            </div>

            <div className={style.community}>
              <h3>Community</h3>
              <Link to="/aboutUs" className={style.none}>
                About us
              </Link>
              <Link to="/Products" className={style.none}>
                Products
              </Link>
              <Link to="/blogs" className={style.none}>
                Blogs
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className={style.footerLine}>
            <hr />
          </div>

          <div className={style.footerBottom}>
            <img src={logo} alt="Green Sphere Logo" />
            <p>
              Compassinhos&reg;. All rights <br />
              <span className="reserved">reserved.</span>
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

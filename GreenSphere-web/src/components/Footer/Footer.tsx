import {Link} from 'react-router-dom'
import "./Footer.css"
import logo from '../../assets/images/logo.svg';



const Footer = () => {
  return (
  <footer className='footer'>
  <div className='footer-nav'></div>

  <div className='contato'> 
    <h1>Stay Fresh</h1>
    <p>compassinhos@gmail.com</p>
    <p>+55 41 99999-9999</p>
    </div>

  <nav className='nav'>           
      <h3>Links</h3>
      <Link to="/about" className="links">About us</Link>
      <Link to="/products" className="links">Products</Link>
      <Link to="/blogs" className="links">Blogs</Link>
  </nav>

  <nav className='nav1'>
      <h3>Community</h3> 
      <Link to="/about" className="links">About us</Link>
      <Link to="/products" className="links">Products</Link>
      <Link to="/blogs" className="links">Blogs</Link>
  </nav>
  <div className='footer-line'></div>
  
  <div className='final-footer'>
  <img src={logo} alt="Green Sphere Logo" />
    <p>
      Compassinhos ®. All rights <br />
      <span className="reserved">reserved.</span>
    </p>
  </div>

</footer>

  );

};

export default Footer;


import { Link } from 'react-router-dom';
import { useState } from 'react';
import Login from './Login/Login';
import { FaShoppingCart } from 'react-icons/fa';
import './Navigation.css';

const Navigation = ({ cartCount }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <nav className="container">
        <div className="logo">
          <Link to="/">
            <img src="/images/brand_logo.png" alt="logo" />
          </Link>
        </div>
        <ul>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/location">Location</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="nav-right">
          <div className="cart-icon">
            <FaShoppingCart size={20} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>
          <button onClick={() => setIsLoginOpen(true)}>login</button>
        </div>
      </nav>
      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};

export default Navigation;

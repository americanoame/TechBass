import { useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './navigation.css';

const Navigation = ({ setNavigation }) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.navi-container')) {
        setNavigation(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [setNavigation]);
  

  return (
    
    <div className="navi-wrapper">
      <div className="navi-container">
        <span className="navi-close-btn" onClick={() => setNavigation(false)}>
          <MdClose />
        </span>

        <ul className="navi-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>

        <div>
          <ul className="navi-items">
            <li>
              <p>Search</p>
            </li>
            <li>
              <p>Terms of Service</p>
            </li>
            <li>
              <p>Refund policy</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
  );
};

export default Navigation;







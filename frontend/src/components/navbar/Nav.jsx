import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TbSearch } from 'react-icons/tb';
import { AiOutlineShopping } from 'react-icons/ai';
import Navigation from '../../components/navigation/Navigation';

import './navbar.css';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [navigation, setNavigation] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <>
      <header className={`main-nav ${scrolled ? 'sticky-nav' : ''}`}>
        <div className="nav-content">
        <span className="navigation" onClick={() => setNavigation(true)}>
            <GiHamburgerMenu />
          </span>
          <Link to="/" className="center">
            TechBass
          </Link>
          <div className="nav-content-right">
            <button type="button" className="search-icon">
              <TbSearch />
            </button>
            <button type="button" className="cart-icon">
              <AiOutlineShopping />
              <span>1</span>
            </button>
            <button className="log-out-btn" title="Log Out">
              LogOut
            </button>
            {/* <div className="nav-btn">
            <Link className="create-btn" to="/login">
              Login
            </Link>
          </div>
          <div className="nav-btn">
            <Link className="create-btn" to="/register">
              Register
            </Link>
          </div> */}
          </div>
        </div>
      </header>
      {navigation && <Navigation setNavigation={setNavigation} />}
    </>
  );
};

export default Nav;

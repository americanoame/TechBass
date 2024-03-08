
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TbSearch} from 'react-icons/tb';
import { AiOutlineShopping } from 'react-icons/ai';

import './navbar.css';


const Nav = () =>  {
  return (
    <header className="main-nav">
        <div className="nav-content">
        <span className="navigation" >
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
 
  )
}

export default Nav;
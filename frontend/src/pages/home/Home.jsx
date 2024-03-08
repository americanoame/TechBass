import { Link } from 'react-router-dom';
import img1 from '../../assets/shop_left.avif';
import './home.css';

const Home = () => {
  return (
    <section className="section">
      <div className="product-banner">
        <div className="left">
          <div className="left-content">
            <h2>
              <span className="discount">70% </span> SALE OFF
            </h2>

            <h1>
              <span>MacBook Pro</span>
              <span>
                <br></br>13.3 inches for 599.00
              </span>
            </h1>
            <Link to="/register" className="left-btn">
              REGISTER
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="content">
            <h2>
              <span className="discount">50% </span> OFF Whole store
            </h2>
            <h1>
              <span>EveryThing Must Go!</span>
              <span></span>
            </h1>
            <Link to="/login" className="right-btn">
              LOG IN
            </Link>
          </div>
        </div>
      </div>

      {/* ADVERTISE */}
      <div className="advertise-bannar">
        <div className="img-background"></div>
        <div className="advertise-left">
          <div className="advertise-content-left">
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="advertise-right">
          <div className="advertise-content-right">
            <h1>MacBook Pro</h1>
            <p>Apple 2020 MacBook Air Laptop M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Gold</p>
          </div>
          <Link to="/login" className="shop-now-btn">
            Shopp Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;

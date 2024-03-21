import  { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import img20 from '../../assets/shop_left.avif';
import img1 from '../../assets/p1.webp';
import img2 from '../../assets/p2.png';
import img3 from '../../assets/p3.jpg';
import img4 from '../../assets/p4.png';
import img5 from '../../assets/p5.webp';
import img6 from '../../assets/p6.jpg';
import img10 from '../../assets/p10.png';
import img8 from '../../assets/p8.jpg';
import img9 from '../../assets/p9.jpg';

import './home.css';

const Home = () => {
  const images = [img6, img1, img4, img10, img2, img3, img5, img8, img9];

  const sliderRef = useRef(null); // Ref to the products slider container

  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();
      sliderRef.current.scrollLeft += event.deltaY;
    };

    const scrollContainer = document.querySelector('.products');
    scrollContainer.addEventListener('wheel', handleWheel);

    return () => {
      scrollContainer.removeEventListener('wheel', handleWheel);
    };
  }, []); 


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

      {/* Products Slider */}

      <div className="products-slider">
        <div className="products" ref={sliderRef}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Product ${index + 1}`} />
          ))}
        </div>
      </div>

      {/* ADVERTISE */}
      <div className="advertise-bannar">
        <div className="img-background"></div>
        <div className="advertise-left">
          <div className="advertise-content-left">
            <img src={img20} alt="" />
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





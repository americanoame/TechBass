import Card from '../../pages/card/Card';
import productData from '../../../productData';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

// this code will not allow the user to see the product page
// they are not login

const Product = () => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const storedData = localStorage.getItem('data');
    if (!storedData) {
      setIsLoggedIn(false);
      navigate('/'); // Redirect to home if not logged in
    }
  }, [navigate]);

  if (!isLoggedIn) {
    return null; // Return null or any other component if not logged in
  }

  return (
    <div>
      <div className="product">
        <div className="layout">
          <Card products={productData} />
        </div>
      </div>
    </div>
  );
};

export default Product;

import { useState } from 'react';
import { Link } from 'react-router-dom';

import './card.css';

const Card = ({ products }) => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleMouseEnter = (productId) => {
    setHoveredProduct(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  return (
    <div className="card-container">
      {products.map((product) => (
        <Link
          to={`/product/${product._id}`}
          className="product-card-item"
          key={product._id}
          onMouseEnter={() => handleMouseEnter(product._id)}
          onMouseLeave={handleMouseLeave}
        >
          <img src={product.image} alt={product.name} />
          {hoveredProduct === product._id && (
            <div className="product_name_overlay">
              <p>{product.name}</p>
              <small>{product.price}</small>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Card;

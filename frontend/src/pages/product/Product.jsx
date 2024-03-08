import Card from '../../pages/card/Card';
import productData from '../../../productData'; 

const Product = () => {
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
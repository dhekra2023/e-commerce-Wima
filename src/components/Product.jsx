import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import ProductHdr from '../components/ProductHdr';
import ProductDisplay from './ProductDisplay';
import ProductDescription from './ProductDescription';

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const {productId} =useParams();
  const product = all_products.find((e)=>e.id === Number (productId));
  if(!product) {
    return <div>Product not found!</div>

  }
  return (
    <section>
    <div>
        <ProductHdr product={product}/>
        <ProductDisplay product={product}/>
        <ProductDescription product={product}/>
    </div>
    </section>
  );
};

export default Product;
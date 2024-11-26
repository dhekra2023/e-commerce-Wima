import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import ProductHdr from '../components/ProductHdr';
import ProductDisplay from './ProductDisplay';
import ProductDescription from './ProductDescription';
import RelatedProducts from './RelatedProducts';

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));

  if (!product) {
    return <div>Product not found!</div>;
  }

  
  const productWithStringId = { ...product, id: String(product.id) };

  return (
    <section className='max_padd_container py-28'>
      <div>
        <ProductHdr product={productWithStringId} />
        <ProductDisplay product={productWithStringId} />
        <ProductDescription product={productWithStringId} />
        <RelatedProducts />
      </div>
    </section>
  );
};

export default Product;
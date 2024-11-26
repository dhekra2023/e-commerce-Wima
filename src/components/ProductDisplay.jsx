import { useContext } from 'react';
import product_rt_1 from '../assets/product_rt_1.png';
import product_rt_2 from '../assets/product_rt_2.png';
import product_rt_3 from '../assets/product_rt_3.png';
import product_rt_4 from '../assets/product_rt_4.png';
import { MdStar } from 'react-icons/md';
import PropTypes from 'prop-types';
import { ShopContext } from '../Context/ShopContext';

const ProductDisplay = ( props ) => {
  const {product} =props;
  const {addToCart} =useContext(ShopContext);


  return (
    <section className='flex flex-col gap-14 xl:flex-row'>
      {/* left side */}
      <div className='flex gap-x-2'>
        <div className='flex flex-col gap-[7px]'>
          <img src={product_rt_1} alt='productImg' className='w-24 h-auto object-cover' />
          <img src={product_rt_2} alt='productImg' className='w-24 h-auto object-cover' />
          <img src={product_rt_3} alt='productImg' className='w-24 h-auto object-cover' />
          <img src={product_rt_4} alt='productImg' className='w-24 h-auto object-cover' />
        </div>
        <div>
          <img src={product.img} alt={product.name} className='w-full h-auto object-cover' />
        </div>
      </div>
      {/* right side */}
      <div className='flex-col flex'>
        <h3 className='h3'>{product.name}</h3>
        <div className='flex gap-x-2 text-secondary medium-22'>
        <MdStar />
        <MdStar />
        <MdStar />
        <p>(111)</p>
        </div>
        <div className='flex gap-x-2 medium-20 my-4'>
        <div className='line-through'>{product.old_price}</div>
        <div className='text-secondary'>{product.new_price}</div>
        </div>
        <div className='mb-4'>
        <h4 className='bold-16'>Select Size:</h4>
        <div className='flex gap-3 my-3'>
            <div className='ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer'>S</div>
            <div className='ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer'>M</div>
            <div className='ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer'>L</div>
            <div className='ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer'>XL</div>
        </div>
        <div className='flex flex-col gap-y-3 mb-4 max-w-[555px]'>
            <button onClick={()=> {addToCart(product.id)}} className="btn_dark_outline !rounded-none uppercase regular-14">Add to cart</button>
            <button className="btn_dark_rounded !rounded-none uppercase regular-14 tracking-widest">Buy it now</button>
        </div>
        <p><span className='medium-16 text-tertiary'>Category: </span> Women | Jacket | Winter</p>
        <p><span className='medium-16 text-tertiary'>Tags: </span> Modern | Latest</p>
        </div>
    </div>
    </section>
  );
}

ProductDisplay.propTypes = {
    product: PropTypes.shape({
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        old_price: PropTypes.number,
        new_price: PropTypes.number,
      id: PropTypes.string.isRequired, // Add this line
    }).isRequired,
    };

export default ProductDisplay;
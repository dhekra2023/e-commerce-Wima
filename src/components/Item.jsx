
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';


const Item = ({ id, name, image, old_price, new_price }) => {
    return (
    <div className='rounded-xl overflow-hidden shadow-lg'>
        <div className='relative flexCenter group overflow-hidden 
        transition-all duration-100 '>
            <Link to={`/product/${id}`} className='h-12 w-12 bg-white 
            rounded-full flexCenter absolute top-1/2 bottom-1/2 !py-2 
            z-20 transition-all duration-700'><FaSearch className='scale-125 hover:rotate-90 
            transation-all duration-200'/></Link>
            <img onClick={window.scrollTo(0, 0)} src={image} alt='productImage' className='w-full block object-cover 
            group-hover:scale-110 transition-all duration-1000'/>
            
        </div>
        <div className='p-4 overflow-hidden'>
            <h4 className='my-[6xp] medium-16 line-clamp-2 
            text-gray-30'>{name}</h4>
            <div className='flex-gap-5'>
                <div className='blod-16'>{new_price}.00</div>
                <div className='text-secondary blod-16 line-through'>
                    {old_price}.00</div>
            </div>
        </div>
    </div>
)
}

Item.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  old_price: PropTypes.number.isRequired,
  new_price: PropTypes.number.isRequired,
};

export default Item;
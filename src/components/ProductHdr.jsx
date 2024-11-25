
import { TbArrowRight } from 'react-icons/tb'

const ProductHdr =(props) => {

    const {product} = props;

  return (
    <div className='flex items-center flex-wrap gap-x-2 medium-16'>
        Home<TabArrowRight/> Shop <TbArrowRight/> {product.category} 
        <TabArrowRight/> {product.name}
    </div>
  )
}

export default ProductHdr
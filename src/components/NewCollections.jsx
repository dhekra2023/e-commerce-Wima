import LATEST from '../assets/latest';
import Item from './Item';

const NewCollections = () => {
  return (
    <section>
      <h3>Latest Products</h3>
      <section className='bg-primmary'>
        <div className='max_padd_container py-12 xl:py28 xl:w-[88%]'>
          <h3 className='h3 text-center'>Latest Products</h3>
          <hr className='h-[3px] md:w1/2 max-auto bg-gradient-to-l 
          from-transparent via-black to-transparent mb-16'/>
          {/* container */}
          <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
            {LATEST.map((item) => (
              <Item key={item.id} id={item.id} image={item.img} name=
              {item.name} new_price={item.new_price} old_price={item.
              old_price}/>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

export default NewCollections;
import p1_img from './product_1.png';
import p2_img from './product_2.png';
import p3_img from './product_3.png';
import p4_img from './product_4.png';

const POPULAR = [
    { 
    id: 1,
    name: 'Product 1',
    image: p1_img, // Use the imported image
    new_price: 100.00,
    old_price: 80.00,
},
{ 
    id: 2,
    name: 'Product 2',
    image: p2_img, // Use the imported image
    old_price: 85.00,
    new_price: 120.00,
},
{  
    id: 3,
    name: 'Product 3',
    image: p3_img, // Use the imported image
    old_price: 60.00,
    new_price: 100.00,
},
{    
    id: 4,
    name: 'Product 4',
    image: p4_img, // Use the imported image
    old_price: 400.00,
    new_price: 480.00, 
},
];

export default POPULAR;
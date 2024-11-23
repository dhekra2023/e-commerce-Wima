// popular
import p1_img from './product_1.png';
import p2_img from './product_2.png';
import p3_img from './product_3.png';
import p4_img from './product_4.png';

// latest 
import p5_img from './product_5.png';
import p6_img from './product_6.png';
import p7_img from './product_7.png';
import p8_img from './product_8.png';
import p9_img from './product_9.png';
import p10_img from './product_10.png';
import p11_img from './product_11.png';
import p12_img from './product_12.png';

// Footer
import facebook from './facebook.svg';
import twitter from './twitter.svg';
import instagram from './instagram.svg';
import youtube from './youtube.svg';
import linkedin from './linkedin.svg';

const POPULAR = [
    { 
    id: 1,
    img: p1_img,
    name: 'Product 1',
    new_price: 100.00,
    old_price: 80.00,
},
{ 
    id: 2,
    img: p2_img,
    name: 'Product 2',
    old_price: 85.00,
    new_price: 120.00,
},
{  
    id: 3,
    img: p3_img,
    name: 'Product 3',
    old_price: 60.00,
    new_price: 100.00,
},
{    
    id: 4,
    img: p4_img,
    name: 'Product 4',
    old_price: 400.00,
    new_price: 480.00, 
},
];

const LATEST = [
    {   
        id: 5,
        img: p5_img,
        name: 'Product 5',
        old_price: 100.00,
        new_price: 80.00,
    },{
        id: 6,
        img: p6_img,
        name: 'Product 6',
        old_price: 85.00,
        new_price: 120.00,
    },{
        id: 7,
        img: p7_img,
        name: 'Product 7',
        old_price: 60.00,
        new_price: 100.00,
    },{
        id: 8,
        img: p8_img,
        name: 'Product 8',
        old_price: 400.00,
        new_price: 480.00,
    },{
        id: 9,
        img: p9_img,
        name: 'Product 9',
        old_price: 100.00,
        new_price: 80.00,
    },{
        id: 10,
        img: p10_img,
        name: 'Product 10',
        old_price: 85.00,
        new_price: 120.00,
    },{
        id: 11,
        img: p11_img,
        name: 'Product 11',
        old_price: 60.00,
        new_price: 100.00,
    },{
        id: 12,
        img: p12_img,
        name: 'Product 12',
        old_price: 400.00,
        new_price: 480.00,
    },
]; 

// Footer SECTION
const FOOTER_LINKS = [
    {
        title: 'Learn More',
        link: [
            'About Us',
            'Categories',
            'Exchange Policy',
            'Order Policy',
            'FAQ',
            'Privancy Policy',
        ],
    },{
        title: 'Our Community',
        link: [
            'Terms and Conditions',
            'Special Offers',
            'Customer Reviews',
        ],
    },
];

const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
        { label: 'Contact Number', value: '27-420-681' },
        { label: 'Contact Adress', value: 'info@wima.com' },
    ],
};

export const SOCIALS ={
    title: 'Social  ',
    links: [
        facebook,
        instagram,
        twitter,
        youtube,
        linkedin,
    ],
};

export { POPULAR, LATEST, FOOTER_LINKS, FOOTER_CONTACT_INFO };
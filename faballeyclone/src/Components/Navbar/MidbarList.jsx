import React from 'react'
import './Navbar.css';
import MidbarCard from './MidbarCard';

const MidbarList = () => {
  return (
    <div>
        <ul className='navList'>
            <li>NEW IN
              <MidbarCard 
               list={['Clothing', 'Curve', 'Accessories', 'Bestselling']}
               img='https://img.faballey.com/images/menu/newinsmenuimg1.jpg'
              />
            </li>
            <li>NEW INRIMZIM DADU X FABALLEY
              <MidbarCard 
               list={['Shop The Collection', 'Explore The Lookbook']}
               img='https://img.faballey.com/images/menu/aw22rdmenuimg1.jpg'
              />
            </li>
            <li>WINTERWEAR </li>
            <li>CLOTHING 
              <MidbarCard 
               list={['All styles','Dresses', 'Co-ords','Skirts','Bottoms','Basics','Classics','Workwear','Loungewear','Winterwear']}
               list2={['Party', 'Vacation','Work','Loungewear']}
               h2='SHOP BY OCCASION'
               img='https://img.faballey.com/images/menu/fapartywear.jpg'
              />
            </li>   
            <li>TOPS
            <MidbarCard 
               list={['Crop Tops', 'Tank Tops','T-Shirts','Shirts','Basics','Blouses','Maxi Tops']}
               list2={['Off Shoulder Tops', 'Cold Shoulder Tops','One Shoulder Tops']}
               h1='SHOP BY STYLE'
              />
            </li>
            <li>DRESSES</li>
            <li>CO-ORDS</li>
            <li>PARTYWEAR</li>
            <li>CURVE</li>
            <li>LOOKBOOKS</li>
            <li>SALE</li>
        </ul>
    </div>
  )
}

export default MidbarList

//








// 
// 
// 
// 

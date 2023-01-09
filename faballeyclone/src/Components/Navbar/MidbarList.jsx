import React from 'react'
import './Navbar.css';
import MidbarCard from './MidbarCard';
import { Link } from 'react-router-dom';

const MidbarList = () => {
  return (
    <div>
        <ul className='navList'>
            <li><Link to={'/products'}> NEW IN </Link>
              <MidbarCard 
               list={['Clothing', 'Curve', 'Accessories', 'Bestselling']}
               img='https://img.faballey.com/images/menu/newinsmenuimg1.jpg'
              />
            </li>
            <li><Link to={'/products'}>NEW INRIMZIM DADU X FABALLEY</Link>
              <MidbarCard 
               list={['Shop The Collection', 'Explore The Lookbook']}
               img='https://img.faballey.com/images/menu/aw22rdmenuimg1.jpg'
              />
            </li>
            <li><Link to={'/products'}>WINTERWEAR</Link> </li>
            <li><Link to={'/products'}>CLOTHING </Link>
              <MidbarCard 
               list={['All styles','Dresses', 'Co-ords','Skirts','Bottoms','Basics','Classics','Workwear','Loungewear','Winterwear']}
               list2={['Party', 'Vacation','Work','Loungewear']}
               h2='SHOP BY OCCASION'
               img='https://img.faballey.com/images/menu/fapartywear.jpg'
              />
            </li>   
            <li><Link to={'/products'}>TOPS</Link>
            <MidbarCard 
               list={['Crop Tops', 'Tank Tops','T-Shirts','Shirts','Basics','Blouses','Maxi Tops']}
               list2={['Off Shoulder Tops', 'Cold Shoulder Tops','One Shoulder Tops']}
               h1='SHOP BY STYLE'
              />
            </li>
            <li><Link to={'/products'}>DRESSES</Link></li>
            <li className='hideLists'><Link to={'/products'}>CO-ORDS</Link></li>
            <li className='hideLists'><Link to={'/products'}>ALLSTYLES</Link></li>
            <li className='hideLists'><Link to={'/products'}>CURVE</Link></li>
            <li className='hideLists'><Link to={'/products'}>LOOKBOOKS</Link></li>
            <li><Link to={'/products'}>SALE</Link></li>
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

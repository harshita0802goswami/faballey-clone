import React, {useEffect, useState} from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ProductCarousel = () => {
    const [products, setProducts] = useState([]);
    useState(()=>{
        fetch('https://sunrise-deeply-makemake.glitch.me/products?_page=2&_limit=20')
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            setProducts(data);
        })
    },[])
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1200 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1200, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div style={{ backgroundColor:'#FBFBFB', padding:' 10px 0'}}>
        {/* <h1>Product Carousel</h1> */}
        <div>
        <Carousel responsive={responsive}>
            {
                products.map((elem, ind)=>{
                    return <div style={{padding:'8px'}}>
                        <img src={elem.img1} alt="" />
                        <p style={{textAlign:"left", fontSize:'13px', marginTop:'5px', fontWeight:'600', overflowY:'hidden', height:'25px'}}>{elem.title}</p>
                        <div style={{display:'flex'}}>
                            <p style={{fontSize:'14px', fontWeight:'600', color: '#fc6486', padding:' 0 5px'}}>₹ {elem.price1}</p>
                            <p><s>₹ {elem.price2}</s></p>
                        </div>
                    </div>
                })
            }
        </Carousel>
        </div>
    </div>
  )
}

export default ProductCarousel
import React, { useEffect } from 'react'
import './Landing.css'
import {GrFormNext,GrFormPrevious} from 'react-icons/gr'

const Banner = () => {
    var box = document.querySelector('.carousel-images');
    // var box = document.querySelector('.carousel-images');
     
    const handlePrev= ()=>{
        let box = document.querySelector('.carousel-images');
        // let boxWidth = box.clientWidth;
        let boxWidth = box.clientWidth;
        console.log(boxWidth,'box width');
        box.scrollLeft -= boxWidth;
        // box.scrollWidth
    }
    const handleNext= ()=>{
        // var w = window.innerWidth;
        // console.log(w)
        let box = document.querySelector('.carousel-images');
        let boxWidth = box.clientWidth;
        box.scrollLeft += boxWidth;
        if(box.scrollLeft >= boxWidth*4){
            box.scrollLeft = 0
        }
    }

    useEffect(()=>{
        setInterval(()=>{   
            handleNext();
        }, 4000)
    },[])

  return (
    <div className='Banner-carousel'>
        <button className='pre-btn' onClick={handlePrev}><p><GrFormPrevious size={'1.8rem'}/></p></button>
        <button className='next-btn' onClick={handleNext}><p><GrFormNext size={'1.8rem'}/></p></button>
        <div className='carousel-images' id='images'>
            <img src="https://img.faballey.com/images/banner/dc0b5a58-e3c8-443b-88b5-1d107f8be592.jpg" alt="" />
            <img src="https://img.faballey.com/images/banner/543a4493-4276-40b9-a44b-9d540da245a9.jpg" alt="" />
            <img src="https://img.faballey.com/images/banner/e5370aac-0b7c-4c78-98f2-6cbde74bc6fe.jpg" alt="" />
            <img src="https://img.faballey.com/images/banner/77c414ea-739d-462e-8e30-70aab9033cba.jpg" alt="" />
            <img src="https://img.faballey.com/images/banner/58a5bfef-5797-48c9-b817-ac3003fe6ee0.jpg" alt="" />
        </div>
    </div>
  )
}

export default Banner

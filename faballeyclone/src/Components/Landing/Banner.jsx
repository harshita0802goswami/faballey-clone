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
            <img src="https://img.faballey.com/images/banner/543a4493-4276-40b9-a44b-9d540da245a9.jpg" alt="" />
            <img src="https://img.faballey.com/images/banner/e5370aac-0b7c-4c78-98f2-6cbde74bc6fe.jpg" alt="" />
            <img src="https://img.faballey.com/images/banner/58a5bfef-5797-48c9-b817-ac3003fe6ee0.jpg" alt="" />
            <img src="https://img.faballey.com/images/banner/39a996fb-f244-4a63-9d4d-8b59aef7df23.jpg" alt="" />
            <img src="https://img.faballey.com/images/banner/4343ee37-346f-4993-9656-0a32596b7e9c.jpg" alt="" />
        </div>
    </div>
  )
}

export default Banner

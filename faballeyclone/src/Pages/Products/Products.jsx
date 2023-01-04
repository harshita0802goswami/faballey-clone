import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const Products = () => {
    const [data,setData] = useState([]);

    const fetchData = async ()=>{
        let res = await fetch('http://localhost:3002/products');
        let data = await res.json();
        console.log(data);
        setData(data);
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div>
        {
            data.map((elem)=>{
                return <div>
                    <img src={elem.img1} alt="" />
                    <img src={elem.img2} alt="" />
                    <img src={elem.img3} alt="" />
                    <img src={elem.img4} alt="" />
                    <h1>{elem.title}</h1>
                    <h2>{elem.price1}</h2>
                    <h3>{elem.discount}</h3>
                    <h4>{elem.category}</h4>
                </div>
            })
        }

    </div>
  )
}

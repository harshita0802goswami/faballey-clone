import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Filters } from '../Filters/Filters';
import { ProductCard } from '../ProductCard/ProductCard'

export const ProductList = () => {
  const [products,setProducts] = useState([]);

  const fetchData = async ()=>{
    let res = await fetch('https://sunrise-deeply-makemake.glitch.me/products');
    let data = await res.json();
    console.log(data);
    setProducts(data);
  }
  
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <Box>
      <Filters/>
    <Box display={"grid"} gridTemplateColumns={"repeat(4,1fr)"} gridRowGap={"15px"} gridColumnGap={"15px"}>
      {
        products.map((elem)=>{
          return <ProductCard data={elem}/>
        })
      }
    </Box>
    </Box>
  )
}

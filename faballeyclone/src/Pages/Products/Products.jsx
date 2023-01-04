import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { CategoryList } from '../../Components/Products/CategoryList/CategoryList'
import { ProductList } from '../../Components/Products/ProductList/ProductList'

export const Products = () => {
  const [prodData,setProdData] = React.useState();

  const fetchData = async ()=>{
    let res = await fetch('http://localhost:3002/products');
    let data = await res.json();
    console.log(data);
    setProdData(data);
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <Box width={"90%"}  m={'auto '} display={'flex'} justifyContent={'space-around'} alignItems={"center"}>
        <CategoryList/>
        <ProductList data = {prodData}/>
    </Box>
  )
}

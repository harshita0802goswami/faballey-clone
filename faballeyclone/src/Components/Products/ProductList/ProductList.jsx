import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Filters } from '../Filters/Filters';
import { ProductCard } from '../ProductCard/ProductCard'

export const ProductList = ({products,addToCart}) => {
  

  return (<div>
  <Box className='productListTitle' h={'30px'}  paddingTop={'4px'} paddingBottom={'25px'} display="flex" justifyContent={'space-between'} borderTop='1px solid gray' borderBottom={'1px solid gray'} mb='20px'>
    <Box display="flex" alignItems={'center'}  height={'20px'}>
      <Box paddingRight={'10px'} borderRight={'1px solid gray'} ><h6>TOPS</h6></Box>
      <Box paddingLeft={'10px'} paddingRight={'10px'} borderRight={'1px solid gray'} ><h6>234 STYLES FOUND</h6></Box>
      <Box paddingLeft={'10px'}><h6>view 201</h6></Box>
    </Box>
    <Box>
      <Box  display="flex" alignItems={'center'} height={'20px'}>
      <h6>SORT BY: PRICE: LOW TO HIGH </h6>
      </Box>
    </Box>
  </Box>
    <Box display={"grid"} gridTemplateColumns={"repeat(4,1fr)"} gridRowGap={"15px"} gridColumnGap={"15px"}>
      {
        products.map((elem)=>{
          return <ProductCard data={elem} addToCart={addToCart}/>
        })
      }
    </Box>
    </div>
  )
}




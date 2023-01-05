import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Filters } from '../Filters/Filters';
import { ProductCard } from '../ProductCard/ProductCard'

export const ProductList = ({products,addToCart}) => {
  

  return (
    <Box>
      <Filters/>
    <Box display={"grid"} gridTemplateColumns={"repeat(4,1fr)"} gridRowGap={"15px"} gridColumnGap={"15px"}>
      {
        products.map((elem)=>{
          return <ProductCard data={elem} addToCart={addToCart}/>
        })
      }
    </Box>
    </Box>
  )
}

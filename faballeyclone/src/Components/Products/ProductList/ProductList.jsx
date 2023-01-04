import { Box } from '@chakra-ui/react'
import React from 'react'
import { ProductCard } from '../ProductCard/ProductCard'

export const ProductList = ({data=[]}) => {
  return (
    <Box width={"70%"}  display={"grid"} gridTemplateColumns={"repeat(3,1fr)"} gridRowGap={"20px"} gridColumnGap={"20px"}>
      {
        data.map((elem)=>{
          return <ProductCard data={elem}/>
        })
      }
    </Box>
  )
}

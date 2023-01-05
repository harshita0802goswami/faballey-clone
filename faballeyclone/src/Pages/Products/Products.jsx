import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { CategoryList } from '../../Components/Products/CategoryList/CategoryList'
import { ProductList } from '../../Components/Products/ProductList/ProductList'

export const Products = () => {
  
  return (
    <Box width={"80%"}  m={'auto '} display={'flex'} justifyContent={'space-around'} >
        <CategoryList/>
        <ProductList/>
    </Box>
  )
}

import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export const CategoryList = () => {
  let arr = ['Tops','Dress','Bottom','Loungewear','Co-ords','Skirts','Classics','Workwear','Autumn-wear','Curve']
  return (
    <Box w={"20%"} border={''}>
      <Box borderBottom={'1px solid gray'}>
        <Text fontSize='2xl' fontWeight={'500'}>CATEGORIES</Text>
      </Box>
      <Box>
      {arr.map((elem)=>{
        return <Box h={'50px'} borderBottom={'1.5px solid gray'} display="flex" alignItems={'center'}>
          <Text>{elem}</Text>
        </Box>
      })}
      </Box>
    </Box>
  )
}

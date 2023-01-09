import { Box, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Filters } from '../Filters/Filters';
import { ProductCard } from '../ProductCard/ProductCard'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
} from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons'
import Pagination from '../Pagination/Pagination';

import Select from 'react-select';
import { CategoryList } from '../CategoryList/CategoryList';

export const ProductList = ({products,addToCart,isLoading,changeSort,sort,totalProducts,filters,currentPage,changeByClick,setCurrentPage}) => {
  let renderingData =[0,0,0,0,0,0,0,0,0,0,0,0];
  return (<div style={{width:"83%",padding:"0px 20px"}}>
    <Box  className='productListTitle' h={'30px'}  paddingTop={'4px'} paddingBottom={'25px'} display="flex" justifyContent={'space-between'} borderTop='1px solid gray' borderBottom={'1px solid gray'} mb='20px'>
    <Box display="flex" alignItems={'center'}  height={'20px'}>
      <Box paddingRight={'10px'} borderRight={'1px solid gray'} ><h6>{filters.category!=""?filters.category.toUpperCase():'ALL'}</h6></Box>
      <Box paddingLeft={'10px'} paddingRight={'10px'} borderRight={'1px solid gray'} ><h6>{totalProducts} STYLES FOUND</h6></Box>
      <Box paddingLeft={'10px'}><h6>VIEW : PAGE {currentPage} OF {Math.ceil(totalProducts/12)!=0?Math.ceil(totalProducts/12):1}</h6></Box>
    </Box>
    <Box>
      <Box width={'190px'}  display="flex" alignItems={'center'} height={'20px'}>
        <Menu>
  <MenuButton  rightIcon={<ChevronDownIcon />}>
    SORT BY PRICE:{sort==''?"RELEVENCE":sort=='asc'?'LOW TO HIGH':"HIGH TO LOW"}  
  </MenuButton>
  <MenuList minWidth='195px'>
    <MenuOptionGroup  defaultValue='' type='radio'>
      <MenuItemOption onClick={(e)=>changeSort('')} value=''>RELEVENCE</MenuItemOption>
      <MenuItemOption onClick={(e)=>changeSort('asc')} value='asc'>LOW TO HIGH</MenuItemOption>
      <MenuItemOption onClick={(e)=>changeSort('desc')} value='desc'>HIGH TO LOW</MenuItemOption>
    </MenuOptionGroup>
  </MenuList>
  
</Menu>
      </Box>
    </Box>
  </Box>
  {isLoading?
    <Box display={"grid"} gridTemplateColumns={"repeat(3,1fr)"} gridRowGap={"15px"} gridColumnGap={"15px"}>
      {
        renderingData.map((elem)=>{
          return <ProductCard data={elem} addToCart={addToCart} isLoading={isLoading}/>
        })
      }
    </Box>:
    <Box display={"grid"} gridTemplateColumns={"repeat(3,1fr)"} gridRowGap={"15px"} gridColumnGap={"15px"} padding="0px 10px">
      {
        products.map((elem)=>{
          return <ProductCard data={elem} addToCart={addToCart} isLoading={isLoading}/>
        })
      }
    </Box>}
    <Pagination currentPage={currentPage} changeByClick = {changeByClick} setCurrentPage={setCurrentPage} totalProducts={totalProducts}/>
        
    </div>
  )
}




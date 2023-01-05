import React from 'react'
import { Box, HStack, Select } from '@chakra-ui/react'
import './Filters.css'

export const Filters = () => {
  return (
    <div><HStack spacing='24px'>
    <Select placeholder='Color' >
  <option value='green'><div></div></option>
  <option value='blue'>blue</option>
  <option value='purple'>purple</option>
  <option value='yellow'>yellow</option>
  <option value='red'>red</option>
</Select>
<Select placeholder='size'>
  <option value='xxl'>XXL</option>
  <option value='xl'>XL</option> 
  <option value='x'>X</option> 
  <option value='m'>M</option>
  <option value='sm'>SM</option>
</Select>
<Select placeholder='Discount'>
  <option value='20'>20% OFF</option>
  <option value='40'>40% OFF</option>
  <option value='50'>50% OFF</option>
  <option value='60'>60% OFF</option>
</Select>
<Select placeholder='Length'>
  <option value='regular'>Regular</option>
  <option value='crop'>Crop</option>
  <option value='long'>Long</option>
  <option value='mini'>MIni 3</option>
</Select>
<Select placeholder='Sleeves'>
  <option value=''>Short</option>
  <option value=''>Sleevless</option>
  <option value=''>Three Quarter</option>
  <option value=''>Full</option>
</Select>
  </HStack>
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
  </div>
  )
}

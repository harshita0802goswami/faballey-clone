import React from 'react'
import { Box, HStack, Select } from '@chakra-ui/react'

export const Filters = () => {
  return (
    <div><HStack spacing='24px'>
    <Select placeholder='Select option' >
  <option value='option1'><div></div></option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
<Select placeholder='Select option'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
<Select placeholder='Select option'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
<Select placeholder='Select option'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
<Select placeholder='Select option'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
  </HStack>
  <Box>

  </Box>
  </div>
  )
}

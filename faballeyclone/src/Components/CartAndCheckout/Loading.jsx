import React from 'react'
import { Spinner } from '@chakra-ui/react'
const Loading = () => {
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center",height:"400px"}}><Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
  /></div>
  )
}

export default Loading
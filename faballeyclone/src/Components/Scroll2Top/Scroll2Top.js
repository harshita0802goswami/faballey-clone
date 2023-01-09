import { Box } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineArrowUp} from "react-icons/ai"

const Scroll2Top = () => {
    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
          
        });
      };
  return <Box onClick={scrollToTop} cursor={"pointer"} bgColor={"rgb(248,201,200)"} color='black' display={"flex"} alignItems="center" justifyContent="center" height="55px" width="55px" borderRadius="50%"  position={"fixed"} bottom="14%" right="2.5%">
    <AiOutlineArrowUp fontSize={"1.8rem"}/>
  </Box>
}

export default Scroll2Top
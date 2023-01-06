import { Box } from '@chakra-ui/layout';
import React from 'react'
import {GrNext, GrPrevious} from 'react-icons/gr';
import "./Pagination.css"

const Pagination = ({totalProducts,currentPage,setCurrentPage,changeByClick}) => {
    let totalPages = Math.ceil(totalProducts/12);
    let arr = [];
    let i = currentPage;
    let j = (currentPage+3)>totalPages?totalPages:(currentPage+3);
    console.log(i, " ", j);
    for(let z=i;z<=j;z++){
        arr.push(z);
    }
    
  return (
    <Box display="flex" justifyContent="space-between" alignitems="center" width="28%" margin="4% auto" >
        <Box onClick={()=>{
            console.log(currentPage);
            if(currentPage>1){
                setCurrentPage(-1);
            }
            }} fontSize="1.5rem"
            _hover={{backgroundColor:"rgba(0, 0, 0, 0.08)"}} 
            display="flex" justifyContent="center" alignItems="center" height="35px" width="35px" borderRadius="50%"
            >
                <GrPrevious/>
            </Box>
        {
            arr.map(ele=>{
                return <Box onClick={()=>changeByClick(ele)} color={ele==currentPage?"white":"black"} border="1px solid grey" backgroundColor={ele==currentPage?"#1976d2":"white"} display="flex" justifyContent="center" alignItems="center" height="35px" width="35px" borderRadius="50%">{ele}</Box>
            })
        }
        <Box onClick={()=>{
            if(currentPage<totalPages){

                setCurrentPage(1);
            }
            }}
            _hover={{backgroundColor:"rgba(0, 0, 0, 0.08)"}} 
             fontSize="1.5rem"
            display="flex" justifyContent="center" alignItems="center" height="35px" width="35px" borderRadius="50%">
                <GrNext />
                </Box>
    </Box>
  )
}

export default Pagination
import { Box, Button, Container, Text, useToast, Wrap, WrapItem } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { CategoryList } from '../../Components/Products/CategoryList/CategoryList'
import { ProductList } from '../../Components/Products/ProductList/ProductList'
import {AiFillCheckCircle} from 'react-icons/ai'
import {MdError} from 'react-icons/md'
import Pagination from '../../Components/Products/Pagination/Pagination'

export const Products = () => {
  const [products,setProducts] = useState([]);
  const [isLoading, setLoading]=useState(true);
  const [currentPage,setCurrentPage] = useState(1);
  const [totalProducts,setTotalProducts] =useState(0);
  const [filters,setFilters] = useState({
    category:'',
    color:'',
    sleeves:'',
    length:'',
    discount:''
  })
  const toast = useToast();
  const [sort,setSort] = useState('');

  const changeFilter = (key,value)=>{
    let newValue = value;
    if(key!="discount"){
      newValue = value.toLowerCase();;
    }
    console.log(key+'clicked'+ newValue)
    setFilters({
      ...filters,[key]:newValue
    })
  }

// console.log(filters);

const changeSort = (value)=>{
  setSort(value);
}
console.log(sort+" sort value")
const changePages =(value)=>{
  setCurrentPage(prev=>prev+value);
}

const changeByClick=(value)=>{
  setCurrentPage(prev=>value);
}
  const fetchData = async ()=>{
    setLoading(true)
    let res = await fetch(`https://cheddar-pentagonal-torta.glitch.me/products?_page=${currentPage}&_limit=12&${(sort!='')?"_sort=price1&_order="+sort:''}&${(filters.category!="")?"category="+filters.category:""}&${(filters.color!="")?"color="+filters.color:""}&${(filters.sleeves!="")?"sleeves="+filters.sleeves:""}&${(filters.length!="")?"length="+filters.length:""}&${(filters.discount!="")?"discount_lte="+filters.discount:""}&`);
    setTotalProducts(res.headers.get('X-Total-Count'));
    let data = await res.json();
    console.log(data);
    // setTotalProducts(data.length);
    setProducts(data);
    // setLoading(false);
      setInterval(()=>{
        setLoading(false);
      },1500)
  }

  console.log(totalProducts+"total poducts");

  const postData =async(propdata)=>{
    let newData={...propdata};
    delete newData.id;
    newData.qty=1;
    let res =await fetch(`https://cheddar-pentagonal-torta.glitch.me/cart`,{
      method:"POST",
      body:JSON.stringify(newData),
      headers:{
        "Content-Type":"application/json"
      }
    })
    let data = await res.json();
    console.log(data,'posted');
    toast({
      title: `Successfully Added to Cart`,
      status: 'success',
      duration: 2000,
      position: 'top',
      containerStyle: {
      }
      
    })

}


  const addToCart=async(e,propdata)=>{
    e.preventDefault();
    
    let res=await fetch(`https://cheddar-pentagonal-torta.glitch.me/cart?uniqueId=${propdata.uniqueId}`)
    let data = await res.json()
    console.log(data);
    if(data.length>0){
      toast({
        title: `Product is Already in Cart`,
        status: 'error',
        duration: 2000,
        position: 'top',
        containerStyle: {
          width: '10%',
          maxWidth: '100%',
        }
        
      })
    }
    else{
      postData(propdata);
    }
  }
  useEffect(()=>{
    fetchData();
  },[filters,sort,currentPage])
  return (
    <Box m={'auto '} marginTop={'30px'} width={"80%"}   display={'flex'} justifyContent={'space-between'} gap={'15px'} >
        <CategoryList changeFilter={changeFilter}/>
        <ProductList products={products} addToCart = {addToCart} isLoading={isLoading} changeSort={changeSort} sort={sort} totalProducts={totalProducts} filters={filters} currentPage={currentPage} changeByClick = {changeByClick} setCurrentPage={changePages}/>
        
        {/* {showSuccess?
            <Container  fontSize="1rem" gap="3px" h={'45px'} width="fit-content" backgroundColor="green" color="white" display="flex" justifyContent ="center" alignItems="center" position="fixed" top="5%" left="45%"  borderRadius="8px">
            <AiFillCheckCircle fontSize={"1.2rem"}/> <Text>
                
                Added To Cart
                </Text>
        </Container>:""}

        {showAlert?
            <Container zIndex={'50'}  fontSize="1rem" gap="3px" h={'45px'} width="fit-content" backgroundColor="red" color="white" display="flex" justifyContent ="center" alignItems="center" position="fixed" top="5%" left="45%"  borderRadius="8px">
            <MdError fontSize={"1.2rem"}/> <Text>
                
                Already in Cart!
                </Text>
            </Container>:""} */}
            
    </Box>
  )
}

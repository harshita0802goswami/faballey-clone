import {
  FormControl,
  FormLabel,
  Input,
  Divider,
  Button,
  Text, Box, Flex, Image
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons"
import { Icon } from '@chakra-ui/react'
import google from "./LoginImages/Login_Image1.png"
import facebook from "./LoginImages/Login_Image2.png"
import { useRef, useState } from "react";


import { useSelector } from "react-redux";


function MyLogin() {


  let storeData = useSelector((storeData) => {
    return storeData.signUpDetails;
  })


  const [loginData, setLogin] = useState({
    email: "",
    password: ""
  });

  const loginHandler = (e) => {
    setLogin({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }


  //HANDLESUBMIT

  const handleSubmit = (e) => {
    e.preventDefault();

    //   if(loginData.email === storeData.email && login)
    if (storeData.length > 1) {
      storeData.map((elem) => {

        if (elem.email === loginData.email && elem.password === loginData.password) {
          alert("LOGIN SUCCESSFULL");
        }
        return 1;
      })
    }
    else {
      alert("GO BACK AND REGISTER")
    }

  }


  const divRef = useRef();


  const inputRef = useRef()
  const inputRef1 = useRef()

  const closeDiv = () => {
    divRef.current.style.display = divRef.current.style.display === 'none' ? 'block' : 'none';
    // ADD NAVIGATE TO HOME PAGE HERE  
  }

  const handleInputClick = () => {
    inputRef.current.style.borderBottom = '2px solid black';
  };
  const handleInputClick1 = () => {
    inputRef1.current.style.borderBottom = '2px solid black';
  };
  return (

    <Box mt={'6%'} >
      <Box ref={divRef} bg={"white"} w={"35%"} boxShadow='md' borderRadius={"5px"} padding={"30px"} margin={"auto"} >
        <Icon w={"12px"} as={CloseIcon} float={"right"} cursor={"pointer"} onClick={closeDiv} /> <br />
        <Text ml={"5%"} paddingBottom={"33px"} textAlign={"center"} fontFamily={"Lato"} fontSize={"24px"} fontWeight={"bold"}> LOGIN </Text>
        <Text ml={"5%"} paddingBottom={"19px"} textAlign={"left"} fontFamily={"Lato"} fontSize={"14px"} fontWeight={"bold"}> for a quicker checkout</Text>

        <FormControl isRequired >
          <FormLabel ml={"5%"}>Email</FormLabel>
          <Input onChange={loginHandler} name={"email"} borderRadius={"none"} ref={inputRef1} onClick={handleInputClick1} w={"90%"} padding={"27px"} type="email" id="email" placeholder="ENTER MOBILE/EMAIL" mb={"24px"} />
          <FormLabel ml={"5%"}>Password</FormLabel>
          <Input onChange={loginHandler} name={"password"} borderRadius={"none"} ref={inputRef} onClick={handleInputClick} w={"90%"} padding={"27px"} type="password" id="password" placeholder="ENTER PASSWORD" />
        </FormControl>
        <Button onClick={handleSubmit} borderRadius={"0px"} w={"90%"} color={"white"} padding={"27px"} marginTop={"35px"} marginBottom={"30px"} type="submit" colorScheme='red' bg={"#fc6486"}>
          CONTINUE
        </Button>

        <Flex align="center" mb={"30px"} fontWeight={"thin"}>
          <Divider />
          <Text opecity fontFamily={"Lato"} fontSize={"13px"} opacity={"0.8"} >Or_continue_with</Text>
          <Divider />
        </Flex >


        <Box margin={"auto"} justifyContent={"center"} gap={"8px"} w="80%" display={"flex"}>
          <Image cursor={"pointer"} w={"42%"} src={google} alt={"google"} />
          <Image cursor={"pointer"} w={"42%"} src={facebook} alt={"facebook"} />


        </Box>

        <Box>
          <Text mt={"24px"} color={"blue"} textDecoration={"underline"} opecity fontFamily={"Lato"} fontSize={"13px"} opacity={"0.8"} cursor={"pointer"} >New here?   SignUp</Text>
        </Box>



        <Text opacity={"0.6"}
          cursor={"pointer"} fontWeight={"semibold"} mt={"30px"} fontSize={"13px"} onClick={closeDiv} ref={divRef} >Skip</Text>


      </Box>

    </Box>

  );
}
export default MyLogin
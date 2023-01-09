import {
    FormControl,
    FormLabel,
    Input,
    Divider,
    Button,
    Text, Box, Flex, Image, useToast
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons"
import { Icon } from '@chakra-ui/react'
import google from "./LoginImages/Login_Image1.png"
import facebook from "./LoginImages/Login_Image2.png"
import { useRef } from "react";
import { useState } from "react";
// import {useNavigate} from "react"

import { useDispatch } from "react-redux";

import Action from "../../Redux/Action";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function MySignUp() {

    
    let storeData = useSelector((storeData) => {

        return storeData.signUpDetails
    })

    console.log(storeData)

    // let navigate = useNavigate()

    //SignUp form handler state
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toast = useToast();


    //close mark div ref
    const divRef = useRef();

    //input border ref
    const inputRef = useRef()
    const inputRef1 = useRef()
    const inputRef2 = useRef()
    const inputRef3 = useRef()


    // close mark div function
    const closeDiv = () => {
        divRef.current.style.display = divRef.current.style.display === 'none' ? 'block' : 'none';
        // ADD NAVIGATE TO HOME PAGE HERE  
    }



    //input border 
    const handleInputClick = () => {
        inputRef.current.style.borderBottom = '2px solid black';
    };
    const handleInputClick1 = () => {
        inputRef1.current.style.borderBottom = '2px solid black';
    };
    const handleInputClick2 = () => {
        inputRef2.current.style.borderBottom = '2px solid black';
    };
    const handleInputClick3 = () => {
        inputRef3.current.style.borderBottom = '2px solid black';
    };


    // handle onchange function
    const handleSignUp = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    //handle submit 
    const formSubmitHandler = (e) => {  
        e.preventDefault();
        localStorage.setItem("login",false)
        if(input.password==input.confirmPassword){
            toast({
                title: `User Registered Successfully`,
                status: 'success',
                duration: 2000,
                position: 'top',
                containerStyle: {
                }
                
              })
              Action(input, dispatch)
              navigate('/login')
        }else{
            toast({
                title: `Password does not Match`,
                status: 'error',
                duration: 2000,
                position: 'top',
                containerStyle: {
                }
                
              })
        }
        
        

    }
    return (
        <Box textAlign={"center"} mb={'8%'} mt={'6%'}>
            <Box ref={divRef} bg={"white"} minWidth={"500px"} w={"35%"} boxShadow='md' borderRadius={"5px"} padding={"30px"} margin={"auto"} >
                <Icon w={"12px"} as={CloseIcon} float={"right"} cursor={"pointer"} onClick={closeDiv} /> <br />
                <Text ml={"5%"} paddingBottom={"33px"} textAlign={"center"} fontFamily={"Lato"} fontSize={"24px"} fontWeight={"bold"}> REGISTER HERE </Text>
                <FormControl isRequired >

                    <FormLabel ml={"5%"}>Name</FormLabel>
                    <Input name={"name"} onChange={handleSignUp} borderRadius={"none"} ref={inputRef3} onClick={handleInputClick3} w={"90%"} padding={"27px"} type="email" id="email" placeholder="ENTER NAME" mb={"24px"} />


                    <FormLabel ml={"5%"}>Email</FormLabel>
                    <Input name={"email"} onChange={handleSignUp} borderRadius={"none"} ref={inputRef1} onClick={handleInputClick1} w={"90%"} padding={"27px"} type="email" id="email" placeholder="ENTER EMAIL ADDRESS" mb={"24px"} />
                    <FormLabel ml={"5%"}>Enter Password</FormLabel>
                    <Input name={"password"} onChange={handleSignUp} borderRadius={"none"} ref={inputRef2} onClick={handleInputClick2} w={"90%"} padding={"27px"} type="password" id="password" placeholder="ENTER PASSWORD" />
                    <FormLabel ml={"5%"} mt={"24px"} > Confirm Password</FormLabel>
                    <Input name={"confirmPassword"} onChange={handleSignUp} borderRadius={"none"} ref={inputRef} onClick={handleInputClick} w={"90%"} padding={"27px"} type="password" id="password" placeholder="CONFIRM PASSWORD" />
                </FormControl>
                <Button onClick={formSubmitHandler} borderRadius={"0px"} w={"90%"} color={"white"} padding={"27px"} marginTop={"35px"} marginBottom={"30px"} type="submit" colorScheme='red' bg={"#fc6486"}>
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
                    <Text mt={"24px"} color={"blue"} textDecoration={"underline"} opecity fontFamily={"Lato"} fontSize={"13px"} opacity={"0.8"} cursor={"pointer"} ><Link to={'/login'}>Already Registered? Login</Link></Text>
                </Box>



                <Text opacity={"0.6"}
                    cursor={"pointer"} fontWeight={"semibold"} mt={"30px"} fontSize={"13px"} onClick={closeDiv} ref={divRef} ><Link to={'/'}>Skip</Link></Text>


            </Box>

        </Box>

    );
}
export default MySignUp
import { Box, Button, Skeleton, SkeletonCircle, SkeletonText, Text } from "@chakra-ui/react";
import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { useState } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export const ProductCard = ({ data,addToCart,isLoading}) => {
  const [likeToggle, setLikeToggle] = useState(false);
  const [image,changeImage] = useState(false);
  
  return (
    <div>
      {isLoading?<Box>
      <Skeleton  width={"100%"} h='400px' />
      <Box padding={"10px"}>
        <Box h={"110px"}>
        <SkeletonText mt='3' noOfLines={3} spacing='4' skeletonHeight='4' />
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          
          <SkeletonCircle size='8' />
          <Skeleton>
          <Button
          onClick={(e)=>addToCart(e,data)}
            border={"none"}
            borderRadius='1px'
            color={"white"}
            width={"60%"}
            height={"28px"}
            fontSize={'0.8rem'}
            fontWeight={'500'}
          >
            ADD TO BAG
          </Button>
          </Skeleton>
        </Box>
      </Box>
    </Box>:
    <Box border={"1px solid #e5e5e5"}>
      <div onMouseEnter={()=>changeImage(true)} onMouseLeave={()=>changeImage(false)}>
      <div position='relative' zIndex={'100'}>
      <Box textAlign={'center'}  fontSize='12px'  display={'flex'} justifyContent='center' alignItems={'center'}   color={'white'} backgroundColor={'rgb(50,50,50)'} marginTop={'5px'} marginLeft={'5px'} width={'45px'} h={'45px'} borderRadius={'50%'} position={'absolute'} fontWeight='500'>{data.discount}% OFF</Box>
<Link to={`/products/${data.id}`}>{image?<img src={data.img1} alt="" width={"100%"} />:<img src={data.img2} alt="" width={"100%"} />}</Link>
      </div>
      </div>
      <Box padding={"10px"}>
        <Box marginBottom={'12px'}>
          <Box overflow={'hidden'} h={'20px'}>
          <Text fontSize="sm" >
            {data.title}
          </Text>
          </Box>
          <h3 className="price">
            <span className="currentPrice">₹ {data.price1}</span>&nbsp;{" "}
            <span className="originalPrice">₹ {data.price2}</span>
          </h3>
          <Box>
            <h6 className="deliveryInfo">
              <TbTruckDelivery size={"1.4rem"} color={"black"} /> &nbsp;
              <span>EXPRESS </span>&nbsp;<span>3 Day Delivery</span>
            </h6>
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {likeToggle ? (
            <FcLike
              onClick={() => {
                setLikeToggle(false);
              }}
              size={"2rem"}
              // marginBottom={''}
              cursor={"pointer"}
            />
          ) : (
            <FcLikePlaceholder
              size={"2rem"}
              cursor={"pointer"}
              onClick={() => {
                setLikeToggle(true);
              }}
            />
          )}
          <Button
          onClick={(e)=>addToCart(e,data)}
            backgroundColor="rgb(252,100,134)"
            border={"none"}
            borderRadius='1px'
            color={"white"}
            colorScheme={'rgb(252,100,134)'}
            width={"60%"}
            height={"32px"}
            fontSize={'0.8rem'}
            fontWeight={'500'}
          >
            ADD TO CART
          </Button>
        </Box>
      </Box>
    </Box>}
    </div>
  );
}
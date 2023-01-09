import React from "react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Alert,
  AlertIcon,
  Container,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Input, InputGroup, Button, InputRightElement } from "@chakra-ui/react";
import "./SingleProduct.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdError } from "react-icons/md";

var productSizes = {
  activeClass: "",
  sizeArray: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"],
};

const SingleProduct = () => {
  // delivery date
  const min = 10;
  const max = 20;
  let date1 = Math.floor(Math.random() * 10) + 1;
  let date2 = Math.floor(Math.random() * (max - min)) + min;
  console.log(date1, date2);

  const [product, setproduct] = useState({});
  console.log("product: ", product);
  const [prodSize, setProdSize] = useState([]);
  const [checkActiveState, setCheckActiveState] = useState(productSizes);
  const [sizeSelected,setSizeSelected] = useState(false);
  const [showMessage, setMessage] = useState(false);
  const [show, setShow] = useState(false);

  const {id} = useParams();
  const handleClick = () => {
    setShow(!show);
    setMessage(!showMessage);
  };

  const toast = useToast()
  const getProduct = async () => {
    const res = await fetch(
      `https://cheddar-pentagonal-torta.glitch.me/products/${id}`
    );
    let data = await res.json();
    setproduct(data);
  };
  useEffect(() => {
    getProduct();
  }, []);

  const setProductSizeHandleClick = (e, id) => {
    setSizeSelected(true)
    setProdSize(e);
    setCheckActiveState({ ...productSizes, activeClass: id });
  };

  const addToCart=async()=>{
    let res=await fetch(`https://cheddar-pentagonal-torta.glitch.me/cart?uniqueId=${product.uniqueId}`)
    let data = await res.json()
    console.log(data);
    if(!sizeSelected){
      toast({
        title: `Please Select Size`,
        status: 'error',
        duration: 2000,
        position: 'top',
        containerStyle: {
        }
      })
    }
    else if(data.length>0){
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
      postData(product);
    }
  }

  const postData =async(product)=>{
    let newData={...product};
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
  return (
    
      <div style={{ width: "90%", margin: "20px auto",marginBottom:'3%' }}>
        
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            className="img-container"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "60%",
            }}
          >
            {Object.keys(product).length > 0 ? (
              <div>
                <img src={product.img1} alt="This is a product" />
                <img src={product.img2} alt="This is a product" />
                <img src={product.img3} alt="This is a product" />
                <img src={product.img4} alt="This is a product" />
              </div>
            ) : (
              <h2>No Dataa</h2>
            )}
          </div>
          <div style={{ width: "36%" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "600" }}>
              {product.title}
            </h3>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
              ₹ {product.price2}
            </h3>
            <p style={{ color: "green", fontSize: "1rem" }}>
              Inclusive of all taxes
            </p>
            <p
              style={{
                color: "grey",
                fontWeight: "bold",
                fontSize: "0.9rem",
                margin: "10px 0",
              }}
            >
              SKU: DRS05014A
            </p>
   
            {/* size box */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                SIZE:{" "}
              </p>
              <p
                style={{
                  textDecoration: "underline",
                  marginRight: "27px",
                  fontSize: "0.9rem",
                }}
              >
                SIZE GUIDE{" "}
              </p>
            </div>
   
            <div className="size">
              {checkActiveState.sizeArray.map((size, index) => (
                <p
                  className={
                    index === checkActiveState.activeClass ? "activeSize" : ""
                  }
                  key={index}
                  onClick={(e) =>
                    setProductSizeHandleClick(e.target.innerText, index)
                  }
                >
                  {size}
                </p>
              ))}
            </div>
   
            {/* add to cart & wishlist */}
            <div className="cartBtns">
              <p className="addToCart" onClick={() => addToCart()}>
                ADD TO CART
              </p>
              <p className="addToWishlist">
                <span>
                  <i class="fa-regular fa-heart"></i>ADD TO WISHLIST
                </span>
              </p>
            </div>
            <br></br>
   
            {/* pincode */}
            <p style={{ fontSize: "1rem", padding: "10px" }}>
              Check Delivery Time
            </p>
            <InputGroup size="md">
              <Input pr="4.5rem" type="number" placeholder="Enter Pincode" width= "29rem" />
              <InputRightElement width="6.5rem">
                <Button h="1.75rem" marginRight={'30px'} size="sm" onClick={handleClick}>
                  {show ? "Edit" : "Check"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <h3 style={{ color: "green", padding: "10px" }}>
              {show
                ? `Express Delivery between ${date1} Jan 2023 - ${date2} Jan 2023`
                : null}
            </h3>
   
           
            <div id="delivery">
              <p>
                <i class="fa-solid fa-people-arrows"></i>COD Available
              </p>
              <p>
                <i class="fa-solid fa-shield"></i>Secure Payment
              </p>
              <p>
                <i class="fa-solid fa-truck"></i>Free Shipping
              </p>
            </div>
   
            <br></br>
            <br></br>
            {/* accordian */}
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
           
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: "600",
           
                      }}
                    >
                      Description
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <h1
                    style={{
                      fontSize: "0.9rem",
       
                    }}
                  >{`${product.title} with ${product.sleeves} sleeves`}</h1>
                </AccordionPanel>
              </AccordionItem>
   
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: "600",
           
                      }}
                    >
                      Details
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <h1
                    style={{
                      fontSize: "0.9rem",
                     
                    }}
                  >
                    {`Color : ${product.color}`}
                    <h1
                      style={{
                        fontSize: "0.9rem",
                     
                      }}
                    >
                      {" "}
                      {`Sleeves : ${product.sleeves}`}
                    </h1>
                    <h1
                      style={{
                        fontSize: "0.9rem",
                       
                      }}
                    >{`Length : ${product.length}`}</h1>
                    {/* Manufactured and Packed by High Street Essentials Private
                    Limited C-11, Sector 7, District Gautam Budh Nagar, Noida
                    201301, Uttar Pradesh, India For Customer Queries Grievance
                    Redressal Officer C-11, Sector 7, District Gautam Budh Nagar,
                    Noida 201 301, Uttar Pradesh, India Phone : +91-8929987349 /
                    0120-6850262 Email : customercare@faballey.com NOTE: There
                    might be a slight variation in the shade of the actual product
                    and the image shown on the screen, due to the screen
                    resolution and photography effects. */}
                  </h1>
                </AccordionPanel>
              </AccordionItem>
   
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: "600",
                     
                      }}
                    >
                      Shipping & Returns
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <h1
                    style={{
                      fontSize: "0.9rem",
                      padding: "10px",
                    }}
                  >
                    Dispatch: Within 24 Hours Delivery time within India - 1-3*
                    business days International delivery time - 7-10* business
                    days Return/Exchange: If you are not completely satisfied with
                    your purchase, simply select the option of return/exchange
                    within 10 days of receiving your order from your order details
                    page and we will process your return, no questions asked.
                  </h1>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        {/* {success?
            <Container  fontSize="1rem" gap="3px" h={'50px'} width="250px" backgroundColor="green" color="white" display="flex" justifyContent ="center" alignItems="center" position="fixed" top="6%" left="45%"  borderRadius="8px">
            <AiFillCheckCircle fontSize={"1.2rem"}/> <Text>
                
                Added To Cart
                </Text>
        </Container>:""}

        {alert?
            <Container  fontSize="1rem" gap="3px" h={'50px'} width="250px" backgroundColor="red" color="white" display="flex" justifyContent ="center" alignItems="center" position="fixed" top="6%" left="45%"  borderRadius="8px">
            <MdError fontSize={"1.2rem"}/> <Text>
                
                Already in Cart!
                </Text>
            </Container>:""} */}
      </div>
  );
};

export default SingleProduct;

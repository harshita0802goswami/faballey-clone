import React from "react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Input, InputGroup, Button, InputRightElement } from "@chakra-ui/react";
import "./SingleProduct.css";

import { useState, useEffect } from "react";

var productSizes = {
  activeClass: "",
  sizeArray: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"],
};
const SingleProduct = () => {
  const [product, setproduct] = useState([]);
  const [prodSize, setProdSize] = useState([]);
  const [checkActiveState, setCheckActiveState] = useState(productSizes);

  const [showMessage, setMessage] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
    setMessage(!showMessage);
  };

  const setProductSizeHandleClick = (e, id) => {
    setProdSize(e);
    setCheckActiveState({ ...productSizes, activeClass: id });
  };
  return (
    <div style={{ width: "90%", margin: "20px auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          className="img-container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "60%",
          }}
        >
          <div>
            <img src="https://img.faballey.com/images/Product/TOP05210Z/d4.jpg" />
            <img src="https://img.faballey.com/images/Product/TOP05210Z/d5.jpg" />
            <img src="https://img.faballey.com/images/Product/TOP05210Z/d4.jpg" />
            <img src="https://img.faballey.com/images/Product/TOP05210Z/d5.jpg" />
          </div>
        </div>
        <div style={{ width: "36%" }}>
          <h3 style={{ fontSize: "1.6rem", fontWeight: "600" }}>
            Pink White Floral Ruffle Sleeve Peplum Top
          </h3>
          <h3 style={{ fontSize: "1.6rem", fontWeight: "bold" }}>₹ 1450</h3>
          <p style={{ color: "green", fontSize: "1.1rem" }}>
            Inclusive of all taxes
          </p>
          <p
            style={{
              color: "grey",
              fontWeight: "bold",
              fontSize: "1rem",
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
                fontSize: "1.1rem",
              }}
            >
              SIZE:{" "}
            </p>
            <p
              style={{
                textDecoration: "underline",
                marginRight: "60px",
                fontSize: "1rem",
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
            <p className="addToCart">ADD TO BAG</p>
            <p className="addToWishlist">
              <span>
                <i class="fa-regular fa-heart"></i>ADD TO WISHLIST
              </span>
            </p>
          </div>
          <br></br>

          {/* pincode */}
          <p style={{ fontSize: "1.1rem", padding: "10px" }}>
            Check Delivery Time
          </p>
          <InputGroup size="md">
            <Input pr="4.5rem" type="number" placeholder="Enter Pincode" />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Edit" : "Check"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <h3 style={{ color: "green", padding: "10px" }}>
            {show ? "Express Delivery between 09 Jan 2023 - 11 Jan 2023" : null}
          </h3>

          {/* accordian */}
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
                      fontSize: "1.3rem",
                      fontWeight: "600",
                      padding: "10px",
                    }}
                  >
                    Description
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
                      fontSize: "1.3rem",
                      fontWeight: "600",
                      padding: "10px",
                    }}
                  >
                    Details
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
                      fontSize: "1.3rem",
                      fontWeight: "600",
                      padding: "10px",
                    }}
                  >
                    Shipping & Returns
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

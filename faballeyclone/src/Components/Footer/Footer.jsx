import React from 'react'
import { useRef } from 'react';
import {
  Box,
  Text,
  Image,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  FormControl,
  TableContainer,
  Input,
  Button,
  Divider, Center, Flex
} from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react';



import source1 from "./Footer-Images/footer_image1.png"
import source2 from "./Footer-Images/footer_image2.png"
import source3 from "./Footer-Images/footer_image3.png"
import source4 from "./Footer-Images/footer_image4.png"
import source5 from "./Footer-Images/footer_image5.png"

function Footer() {

//media query
const [isLargerThan500] = useMediaQuery('(max-width: 500px)')








  const containerRef = useRef(null);

  const handleScrollTop = () => {
    containerRef.current.scrollTop = 0;
  };

  const handleScrollBottom = () => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  };
  return (
    <Box backgroundColor={"#fbfbfb"}>
      <Box padding={"8px"} boxShadow='xs' p='6' textAlign={'left'} ref={containerRef} w='76%' margin={"auto"} overflowY={"auto"} maxHeight={"400px"} font-family={"Poppins, sans-serif"} backgroundColor={"#fbfbfb"}> 
        <Text top={'0px'} color={"black"} fontWeight={'semibold'} w={"72.5%"} backgroundColor={"white"}  fontSize={"16px"} as='abbr'>ONLINE SHOPPING SITE FOR WOMEN’S FASHION - FABALLEY</Text> 

        <Text fontSize={"13px"}>FabAlley.com is an online fashion store for taste-makers and trend-breakers all over the country. When it comes to online shopping for women looking for the latest fashion trends, FabAlley is the one-stop destination. Started in 2012, this online fashion store comprises of the trendiest tops, hottest dresses, skirts, jackets, shoes, bags, accessories and fashion jewellery for women online shopping. Every new season brings fresh and latest fashion for women. And it becomes important for you to keep up with the current trend. However, FabAlley has all your styling stress sussed!</Text><br />
        <Text fontSize={"13px"}>Going out for a stroll along the streets? Or getting ready for an important meeting at work? Or simply watching Netflix at home, cuddled up with your loved one in bed? Whatever plans you have, one common decision you should take in all these cases is what to wear. Women are generally very particular about their outfits and latest fashion trends. FabAlley, an online fashion store, houses a colossal collection of Tops, Dresses, Skirts, Bottoms, Shorts, Blazers and Jackets, all bang-on trend and in all sizes, from petite to plus-size.</Text><br />
        <Text fontSize={"13px"}>Going to a brick and mortar store and browsing your perfect outfit is very tedious and time consuming. It is physically impossible to check out all the latest fashion trends for women from various brands in the same day. In the fast-moving world, today, no one has this much time! This is one of the main reasons that Online Shopping for women is so popular these days. It’s much convenient, time-saving and offers a wider variety of surf too. It also lets you compare prices across different websites. From Instagram and Facebook to googling and scanning through several online fashion store India, the options for browsing are endless. FabAlley is one such online fashion store that is a one- stop shop for all your fashion needs, be it ethnic or western wear, bags or shoes. The best part being we provide the latest women online shopping trends.</Text><br />
        <Text color={"black"} fontWeight={'semibold'} fontSize={"16px"} >Online Shopping for Women in India</Text> <br />
        <Text fontSize={"13px"}>Shopping is no longer an exhausting affair with women online shopping sites offering the accessibility of fuss-free shopping services, anytime and anywhere. With a larger than life repertoire to choose from, online shopping sites for women have made everyone’s life much easier and convenient. In this fast-paced world, Online Shopping is a boon. Be it branded or designer outfits, online shopping caters you the best of both. With services like cash on delivery, easy return, exchange & refund, these online stores are a fantastic platform that can create the best shopping experiences for people across the globe. Apart from providing the trendiest apparels and accessories, these online sites offer products at affordable prices without compromising on the quality of the item. Furthermore, services are available round the clock, no matter what time or day it is.</Text> <br />
        <Text color={"black"} fontWeight={'semibold'} fontSize={"16px"}>FABALLEY: One-Stop Fashion Shop</Text> <br />
        <Text fontSize={"13px"} >Who doesn’t want to stay trendy? Everyone does. Synonymous with chic and glamorous, Faballey is an exclusive fashion online shopping store for women who are rebellious and love quirky and unconventional styling. Featuring season’s most trending outfits and much-in-fame accessories in the realm of fashion, FabAlley is the best online store for people who loves to own ensembles that are sexy, hot, cool and fashionable. Tops, Dresses, Skirts, Pants or Denims to name a few, Faballey has everything to offer, under one single roof. FabAlley is all about redefining the fashion in the chicest way. At FabAlley, you will be spoiled for choice. There is something fun and dramatic for every fashion aficionado out there. To make shopping easy and convenient, Faballey provides various facilities through online payment, Door Step Delivery and Cash on Delivery. In case you do not like the purchased product or have any kind of size issues, you can easily avail our Return, Refund and Exchange facility. Customer satisfaction is our utmost priority. And to ensure that all the queries and issues are resolved at the earliest, we have a customer care team to assist our esteemed customers.</Text>
        <Text color={"black"} fontWeight={'semibold'} fontSize={"16px"}>Shop from The Masaba And Alia for Faballey Collection</Text> <br />
        <Text fontSize={"13px"}>FabAlley is undoubtedly the best online fashion store in India. If you are in search of designer outfits online, we bring you an exclusive range of ensembles designed by the renowned designer Masaba. The MISPRINT collection by Masaba exhibits eye-grabbing Tops, Bracelets, Flared Trousers, Bodycon Dresses, and Sandals in offbeat prints and designs that will surely sweep you off your feet. For those who are in love with minimalist styling, Alia for FabAlley Collection is something you must explore. Imbued with classic and contemporary detailing, this collection is perfect for the new-age ladies.</Text> <br />
        <Text color={"black"} fontWeight={'semibold'} fontSize={"16px"}>Buy Women’s Wear Online on FabAlley</Text> <br />
        <Text fontSize={"13px"}>Hello, Fashion devotees! It’s time for you to ride high on style with the most fashionable women’s clothing online store- FabAlley. Check out our stunning range of Dresses that are trending big time. Whether you’re looking for a Bodycon, Skater, A-line, Shift, Off Shoulder or Maxi Dresses, we have every type of dresses that is going to make you croon. For those who are inclined towards gothic and boho styling, we have Summer in Bohemia collection. Also, explore our vast array of sexy Tank Tops, stylish Shirts, hot blouses for girls , elegant Ruffled Tops, basics and many more. We are not just restricted to clothing, step up your fashion quotient with our cool range of accessories. From stylish Bags to beautiful Scarves, cool Sunglasses to cute Hair Accessories and swanky Jewelry, we unveil the best for you. In case you are a diehard fan of both ethnic and western styles, FabAlley have got you covered. Indya is exclusively for girls who loves to wear traditional and ethnic outfits with a dash of contemporary twist. Enjoy the best of Indo Western wear with FabAlley’s gorgeous collection of graceful Skirts, Peplums, Crop Tops for women, Tunics, Dresses, Palazzo et al. Apart from these amazing products, we also have a smart collection of Shoes for women, which consists of Peep-Toes, Flat Sandals, Lace-up Sandals, Strappy Flat Sandals, Block Heeled Sandals and Wedge Sandals. Choose yours!</Text> <br />
        <Text color={"black"} fontWeight={'semibold'} fontSize={"16px"}>Online Shopping Advantages</Text> <br />
        <Text fontSize={"13px"}>One of the best advantages of Online Shopping is that, you do not have to plan or invest your entire day running from one store to the other. With thousands of ladies wear online and the information on the website, shopping with Faballey is easy and time- saving. You can purchase your product depending on your taste in styling, favorite color, print or fabric on FabAlley. Apart from this, you get easy return and exchange facility as well. At FabAlley, we ensure on-time delivery so as not to create any fuss for our customers. To cater you a safe and stress-free online shopping experience, we have Cash on Delivery facility for you.</Text> <br />
        <Text color={"black"} fontWeight={'semibold'} fontSize={"16px"}>Global Celebrities - #ALLEYGALS</Text> <br />
        <Text fontSize={"13px"}>When it comes to online shopping sites for women outfits, FabAlley comprises the chicest apparel for girls, ranging from Tops, hottest Dresses, Shirts, Jackets, Skirts, Jeans, Blazers, Pants and many more. And when you slip into one of these outfits, we make sure that we get all the spotlight on you. Just tag us and get featured on our website. You go, girl!</Text> <br />
        <Text fontWeight={'semibold'} fontSize={"13px"} >Our Popular Categories: Women Tops | Women Dresses | Women Skirts | Women Bottoms Pants | Summer Collection for Women | Women Loungewear | Winter Wear for Women</Text>
      </Box> <br />

      <Box padding={"8px"} boxShadow='xs' display={"flex"} w={"75%"} margin={"auto"} justifyContent={"space-between"}>
        <Image w={isLargerThan500 ? "100%" : "75%"} height={"120"} src={source1} alt="image1"></Image>
        <Box display={isLargerThan500 ? "none" : "flex"} flexDirection={"column"} rowGap={"10px"} width={'100%'}>
          <Text color={"black"} fontWeight={'semibold'} fontSize={"19px"}>DOWNLOAD THE APP</Text>
          <Box display={isLargerThan500 ? "none" : "flex"} justifyContent={"space-around"}>
            <Image  height={"45px"} width={"40%"} src={source2}></Image>
            <Image height={"45px"} width={"40%"} src={source3}></Image>
          </Box>
        </Box>
      </Box> <br />


      <Box boxShadow='xs' w={"75%"} margin={"auto"} display={ isLargerThan500 ? "grid" : "flex"} justifyContent={"space-between"}>
        <TableContainer boxShadow='xs' w={isLargerThan500 ? "100%" : "60%"}>
          <Table variant='simple' size='sm'>
            <Thead>
              <Tr border={"none"}>
                <Th color={"black"} fontWeight={'semibold'} fontSize={isLargerThan500 ? "13px" :"16px"}>COMPANY</Th>
                <Th></Th>
                <Th color={"black"} fontWeight={'semibold'} fontSize={isLargerThan500 ? "13px" :"16px"}>HELP</Th>

              </Tr>
            </Thead>
            <Tbody>
              <Tr fontSize={isLargerThan500 ? "2px" :"13px"}  >
                <Td>About Us</Td>
                <Td>Order Status</Td>
                <Td >FAQs</Td>
              </Tr>
              <Tr >
                <Td>Careers</Td>
                <Td>Return & Exchange</Td>
                <Td >Cancellation Policy</Td>
              </Tr>
              <Tr >
                <Td>Contact Us</Td>
                <Td>International Orders</Td>
                <Td >Shipping Policy</Td>
              </Tr>
              <Tr >
                <Td>FabAlley CSR</Td>
                <Td>Terms and Conditions</Td>
                <Td >Ordering and Payment</Td>
              </Tr>
              <Tr >
                <Td>Gift Cards</Td>
                <Td>Privacy Policy</Td>
                <Td >Size Guide</Td>
              </Tr>
              <Tr >
                <Td></Td>
                <Td>Invester Relations</Td>
                <Td >Wholesale Enquirey</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>


        <Box w={isLargerThan500 ? "100%" : "40%"} >
          <Text  color={"black"} fontWeight={'semibold'}fontSize={isLargerThan500 ? "13px" :"16px"} >NEWSLETTER SIGNUP</Text><br />
          <Box >
            <FormControl justifyContent={"space-evenly"} display={"flex"} margin={"auto"} w={"100%"} >
              <Input w={'60%'} placeholder='Enter Email Adress' type='email' />
              <Button color={"white"} colorScheme="teal" backgroundColor={'black'}>Subscribe</Button>
            </FormControl>
          </Box> <br />
          <Box>
            <Text color={"black"} fontWeight={'semibold'} fontSize={isLargerThan500 ? "13px" :"16px"} >CONNECT WITH US</Text>
            <Image cursor={"pointer"} w={"52%"} margin={"auto"} src={source4}></Image>
          </Box>
        </Box>
      </Box> <br />

      <Box w={"75%"} margin={"auto"}  >
        <Text textAlign={"left"} color={"black"} fontWeight={'semibold'} fontSize={isLargerThan500 ? "13px" :"16px"}>IN CASE OF ANY CONCERN, CONTACT US</Text> <br />

        <Box w={"100%"} display={"flex"}>
          <Box display={"flex"} flexDirection={"row"} w={"100%"} justifyContent={"space-between"} >
            <Box textAlign={"left"} display={"grid"} gap={"10px"} >
              <Text textAlign={"left"} color={"black"} fontWeight={'semibold'} mb={"15px"} fontSize={isLargerThan500 ? "13px" :"16px"}>HEAD OFFICE ADDRESS:</Text>
              <Text fontSize={isLargerThan500 ? "13px" :"16px"}>High Street Essentials Pvt Ltd</Text>
              <Text fontSize={isLargerThan500 ? "13px" :"16px"}>C-11, Sector 7, Noida, UP- 201301, India</Text>
              <Text fontSize={isLargerThan500 ? "13px" :"16px"}>Customer Care:  +91-8929987349 / 0120-6850262</Text>
            </Box>
            <Center height='160px' >
              <Divider orientation='vertical' />
            </Center>
            <Box textAlign={"left"} display={"grid"} gap={"10px"}>
              <Text textAlign={"left"} color={"black"} fontWeight={'semibold'} mb={"15px"} fontSize={isLargerThan500 ? "13px" :"16px"}>RETURN ADDRESS:</Text>
              <Text fontSize={isLargerThan500 ? "13px" :"16px"}>High Street Essentials Pvt Ltd</Text>
              <Text fontSize={isLargerThan500 ? "13px" :"16px"}>Greater Noida(West), Gautam Buddha</Text>
              <Text fontSize={isLargerThan500 ? "13px" :"16px"}>Nagar, UP - 201306, India</Text>
            </Box>
            <Center height='160px' >
              <Divider orientation='vertical' />
            </Center>
            <Box display={"grid"}>
              <Text color={"black"} fontWeight={'semibold'} fontSize={isLargerThan500 ? "13px" :"16px"} mb={"10px"} >PAYMENT METHODS</Text>
              <Image src={source5} alt={"paymnt"}></Image>
            </Box>
          </Box>
        </Box>
      </Box>
      <Center mt={"10px"} w={"70%"} margin={"auto"}  >
        <Divider orientation='horizontal' />
      </Center> <br />
      <Box w={"75%"} textAlign={"left"} margin={"auto"}>
        <Text color={"1A202C"} fontWeight={'semibold'} fontSize={isLargerThan500 ? "13px" :"16px"} mb={"10px"}>POPULAR SEARCHES:</Text>
        <Text fontSize={isLargerThan500 ? "13px" :"16px"}>New ArrivalsWestern | Clothing  |    TopsDresses |    Skirts |    Bottoms |    DenimJackets & Blazers |    Shrugs |    Curve |    Accessories |    SaleParty |     WearWork  |    WearVacation |     WearCasual |     WearCrop |     TopsMaxi  |    TopsOff |     Shoulder |     TopsCold  |    Shoulder |     TopsRuffled  |    TopsBell |     Sleeve |     TopsFloral  |    TopsMaxi |     DressesSkater |     DressesMini |     DressesOff  |    Shoulder  |    DressesCold |     Shoulder |     DressesFloral |     DressesLBDJumpsuitsPlus |     Size |     DressesPlus |     Size |     TopsWinter |     WearLeggingsJeggingsWomen's |     LoungewearWholesale |     Enquiries</Text>
      </Box>
    </Box>
  )
}
export default Footer
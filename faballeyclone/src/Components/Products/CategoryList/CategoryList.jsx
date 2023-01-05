import React from 'react'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text } from '@chakra-ui/react'

export const CategoryList = ({changeFilter}) => {
  let arr = [
    {
      title:"Category",
      key:'category',
      data:['Tops','Dress','Bottoms','Loungewear','Co-ords','Skirts','Classics','Workwear','Autumn-wear','Curve']
    },
    {
      title:'Color',
      key:'color',
      data:['blue','black','yellow','green','pink','purple','navy']
    },
    {
      title:'Sleeves',
      key:'sleeves',
      data:['sleeveless','short','full','three quarter']
    },
    {
      title:'Discount',
      key:'discount',
      data:[60,50,40,30,20]
    },
    {
      title:'Length',
      key:'length',
      data:['crop','regular','mini','short','long']
    }
    
  ]
  return (
    <Box w={"20%"} border={''}>
      <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
      <h2>
        <AccordionButton borderTop={'1.5px solid gray'} >
          <Box as="span" flex='1' textAlign='left' fontSize={'l'} >
            Price
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} >
      
      </AccordionPanel>
    </AccordionItem>
  {
    arr.map((element)=>{
      return <AccordionItem>
      <h2>
        <AccordionButton borderTop={'1.5px solid gray'} >
          <Box as="span" flex='1' textAlign='left' fontSize={'l'} >
            {element.title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} >
      {element.data.map((elem,i)=>{
          return <Box h={'25px'}  display="flex" alignItems={'center'}>
            <Text onClick={(e)=>changeFilter(element.key,elem)} fontSize={'sm'} >{element.title=='Discount'?elem+"% 0FF":elem}</Text>
          </Box>
        })}
      </AccordionPanel>
    </AccordionItem>

    })
  }
</Accordion>
    </Box>
  )
}

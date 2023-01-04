import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text, Box,
} from "@chakra-ui/react";
function Login() {
  return (
    <Box>
      <Box w={"37%"} border={"2px solid black"} borderRadius={"5px"} padding={"50px"} margin={"auto"} >
        <Text fontFamily={"Lato"} fontSize={"24px"} fontWeight={"bold"}> LOGIN OR SIGNUP</Text>
        <Text fontFamily={"Lato"} fontSize={"14px"} fontWeight={"bold"}> for a quicker checkout</Text>

        <FormControl>
          <Input w={"90%"} padding={"20px"} type="email" id="email" placeholder="ENTER MOBILE/EMAIL" />
        </FormControl>
        <Button w={"90%"} color={"white"} padding={"20px"} margin={"10px"} type="submit" bg={"#fc6486"}>
          CONTINUE
        </Button>
        <Text fontFamily={"Lato"} fontSize={"13px"} > Or continue with</Text>

      </Box>
      
    </Box>

  );
}
export default Login
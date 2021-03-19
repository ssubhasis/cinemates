import React from "react"
import { Box, Text } from "@chakra-ui/react"
import cinematesLogo from '../Assets/CinematesLogo.svg'; 
 
export default function Logo(props) {
  return (
    <Box {...props}>
       <img src = {cinematesLogo}  style= {{height: "auto", width:"100%"}} /> 
    </Box>
  )
}
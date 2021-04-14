import React from 'react';
import {
    Button, 
    Input,
    Wrap,
    Text,
    Flex,
    WrapItem,
    Textarea,
    Center
} from "@chakra-ui/react"
import {StarIcon} from "@chakra-ui/icons"


export default function RatingStars() {

    return (
        <div>
            
               <StarIcon  w={8} h={8} color="white" paddingRight="5px"></StarIcon>
               <StarIcon  w={8} h={8} color="white" paddingRight="5px"></StarIcon>
               <StarIcon  w={8} h={8} color="white" paddingRight="5px"></StarIcon>
               <StarIcon  w={8} h={8} color="white" paddingRight="5px"></StarIcon>
               <StarIcon  w={8} h={8} color="white" paddingRight="5px"></StarIcon>     
         
        </div>
    );
}

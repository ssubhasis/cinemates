import React from 'react';
import {
    Grid,
    GridItem,
    Input,
    Stack,
    Center,
    Text,
    Wrap,
    WrapItem,
    Radio,
    RadioGroup,
    Icon
} from "@chakra-ui/react"
import {StarIcon} from "@chakra-ui/icons"
import Rating from "@material-ui/core/Rating"; 



export default function StarSelect(){
   
    return (
        <div> 
            <Wrap bg="orange.500" borderRadius="lg" padding="10px" margin="10px">
                <h2>Rating</h2>
           
             <Rating name="simple-controlled"/>

                </Wrap>
        </div>
    );
}
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



export default function StarSelect(){
   
    return (
        <div> 
            <Wrap bg="orange.500" borderRadius="lg" padding="10px" margin="10px">
                <h2>Rating</h2>
                <StarIcon></StarIcon>

                </Wrap>
        </div>
    );
}
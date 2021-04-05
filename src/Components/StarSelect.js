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
    Icon,
    propNames
} from "@chakra-ui/react"
import {StarIcon} from "@chakra-ui/icons"
import Rating from "@material-ui/core/Rating"; 



export default function StarSelect(props){

    const handleStarChange = (star) => {
        console.log(star.target.value)
        props.onSelectStar(star.target.value)
    }
   
    return (
        <div> 
            <Wrap bg="orange.500" borderRadius="lg" padding="10px" margin="10px">
            <h2>Rating</h2>
             <Rating  onChange={handleStarChange}   name="simple-controlled"/>

                </Wrap>
        </div>
    );
}
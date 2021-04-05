import React, { useState } from 'react';
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
import { withStyles } from '@material-ui/core/styles';



export default function StarSelect(props){
    const [starValue, setStarValue] = useState(0);

    const StyledRating = withStyles({
        iconFilled: {
          color: 'white',
        }
        
      })(Rating);

   

    const handleStarChange = (star) => {
        setStarValue(Number (star.target.value))
        console.log(star.target.value)
        props.onSelectStar(star.target.value)
    }
   
    return (
        <div> 
            <Wrap bg="primary.200" borderRadius="lg" padding="10px" margin="10px">
            <h2>Rating</h2>
             <StyledRating  onChange={handleStarChange}  value={starValue}    name="simple-controlled"  />

                </Wrap>
        </div>
    );
}
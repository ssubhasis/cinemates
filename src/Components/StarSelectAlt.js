import React from 'react';
import {
    Grid,
    GridItem,
    Input,
    Stack,
    Text,
    Center,
    Radio,
    RadioGroup
} from "@chakra-ui/react"


export default function StarSelectAlt(props){


    const handleStarChange = (star) => {
        console.log(star)
        props.onSelectStar(Number (star));           
    }

    return (
        <div> 
            <Grid bg="primary.200" borderRadius="lg" padding="10px" margin="10px">
               <GridItem overflowY="scroll" maxHeight="15vh">
                <h2>Rating</h2>
                <RadioGroup onChange={handleStarChange} >
                        <Stack direction="column">

                        <Radio value="1">1</Radio>
                        <Radio value="2">2</Radio>
                        <Radio value="3">3</Radio>
                        <Radio value="4">4</Radio>
                        <Radio value="5">5</Radio>
                        <Radio value="6">6</Radio>
                        <Radio value="7">7</Radio>
                        <Radio value="8">8</Radio>
                        <Radio value="9">9</Radio>
                        <Radio value="10">10</Radio>                     
                        </Stack>
                </RadioGroup>
                </GridItem>
                </Grid>
        </div>
    );
}
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
    RadioGroup
} from "@chakra-ui/react"


export default function GenreSelect(){
    const [value, setValue] = React.useState("1")
    return (
        <div> 
            <Wrap bg="orange.500" borderRadius="lg" padding="10px" margin="10px">
                <h2>Genre</h2>
                <RadioGroup onChange={setValue} value={value}>
                        <Stack direction="column">
                        <Radio value="1">Comedy</Radio>
                        <Radio value="2">Horror</Radio>
                        <Radio value="3">Action</Radio>
                        <Radio value="4">Adventure</Radio>
                        <Radio value="5">Romance</Radio>
                        </Stack>
                </RadioGroup>
                </Wrap>
        </div>
    );
}
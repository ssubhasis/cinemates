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


export default function LanguageSelect(){
    const [value, setValue] = React.useState("1")
    return (
        <div> 
            <Wrap bg="orange.500" borderRadius="lg" padding="10px" margin="10px">
                <h2>Language</h2>
                <RadioGroup onChange={setValue} value={value}>
                        <Stack direction="column">
                        <Radio value="1">English</Radio>
                        <Radio value="2">Hindi</Radio>
                        <Radio value="3">French</Radio>
                        <Radio value="4">Spanish</Radio>
                        <Radio value="5">Swahili</Radio>
                        <Radio value="6">German</Radio>
                        </Stack>
                </RadioGroup>
                </Wrap>
        </div>
    );
}
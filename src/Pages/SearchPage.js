import React from 'react';
import {
    Grid,
    GridItem,
    Input,
    Stack,
    Center,
    Text
} from "@chakra-ui/react"
import Search from '../Components/Search';


export default function SearchPage() {


    return (
        <div>
            <Grid h="700px"  templateColumns="20% 1fr"
                gap={4}>
                <GridItem
                    bg="primary.100">
                        <Search></Search>
                </GridItem>
                
                <GridItem
                    bg="primary.100"/>
            </Grid>
        </div>
    );
}

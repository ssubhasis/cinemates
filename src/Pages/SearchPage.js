import React from 'react';
import {
    Grid,
    GridItem,
    Input,
    Stack,
    Center,
    Text,
    Wrap,
    Flex,
    WrapItem,
   Button
} from "@chakra-ui/react"
import Search from '../Components/Search';
import GenreSelect from '../Components/GenreSelect'; 
import LanguageSelect from '../Components/LanguageSelect';
import StarSelect from '../Components/StarSelect'; 


export default function SearchPage() {

   
    return (
        <div> 
            <Wrap gridTemplateColumns="auto 1fr" bg="primary.100"
                gap={8}
                p="30px"
                height="auto">

                <Flex direction="column" bg="primary.500" padding="5px" >
                <Search></Search>
                <GenreSelect></GenreSelect>
                <LanguageSelect></LanguageSelect>
                <StarSelect></StarSelect>
                
                </Flex>



                <WrapItem>
                    <Center w="auto" h="100%" bg="green.200">
                        Results
                    </Center>
                </WrapItem>


            </Wrap>
        </div>
    );
}

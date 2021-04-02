import React from 'react';
import {
    Grid,
    GridItem,
    Input,
    Stack,
    Center,
    Text
} from "@chakra-ui/react"
import {Button, ButtonGroup} from "@chakra-ui/react"
import TrendingMovies from '../Components/TrendingMovie';
import HighestRatedMovies from '../Components/HighestRatedMovies';
import {Link} from 'react-router-dom';
import Search from '../Components/Search';
import {createBreakpoints} from "@chakra-ui/theme-tools"
import SearchBy from '../Components/SearchBy'; 


const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em"
})

export default function Homepage() {


    return (
        <div>

            <Grid h="auto" templateRows="auto 1fr 1fr" templateColumns="repeat(1, 1fr)"
                gap={4}
                backgroundColor="primary.100">
                {/* 1st section of page, this holds the search bar and the top menu buttons  */}
                <GridItem colSpan={6}>
                    <Search></Search>
                    
                    <Stack direction="row"
                        spacing={5}
                        align="center">

                        <Text style={
                            {
                                color: "white",
                                paddingLeft: "6%"
                            }
                        }>Search By</Text>
                                 <SearchBy></SearchBy>
                        {/* <Button colorScheme="orange" variant="solid">
                            Movie
                        </Button>
                        <Button colorScheme="orange" variant="outline">
                            Actor
                        </Button>
                        <Button colorScheme="orange" variant="outline">
                            Genre
                        </Button> */}


                    </Stack>

                </GridItem>

                <GridItem colSpan={6}>
                    <Text fontSize="4xl" color="white" marginBottom="5px">
                        Trending Movies</Text>

                    <TrendingMovies></TrendingMovies>

                </GridItem>


                <GridItem colSpan={6} marginBottom="50px">
                    <Text fontSize="4xl" color="white"  marginBottom="5px">
                        Highest Rated Movies</Text>
                    <Center>
                        <HighestRatedMovies></HighestRatedMovies>
                    </Center>
                </GridItem>


            </Grid>
        </div>
    );
}

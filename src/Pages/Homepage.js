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
import {Link} from'react-router-dom'; 
import Search from '../Components/Search';

export default function Homepage() {


    return (
        <div>

            <Grid h="auto" templateRows="auto 1fr 1fr" templateColumns="repeat(1, 1fr)"
                gap={4}
                backgroundColor="primary.100">
                {/* 1st section of page, this holds the search bar and the top menu buttons  */}
                <GridItem colSpan={6}>

                    <Stack direction="row"
                        spacing={5}
                        align="center">
                        <Button colorScheme="orange" variant="solid">
                            Movie
                        </Button>
                        <Button colorScheme="orange" variant="outline">
                            Actor
                        </Button>
                        <Button colorScheme="orange" variant="outline">
                            Genre
                        </Button>

                        <Link to="search">
                        <Button colorScheme="orange" variant="outline">
                            Advance Search
                        </Button>
                        </Link>

                        <Link to ="myhub">
                        <Button colorScheme="orange" variant="outline">
                            My Hub
                        </Button>
                        </Link>

                    </Stack>
                    <Search></Search>
                </GridItem>

                <GridItem colSpan={6}  >
                    <Text fontSize="4xl" color="white" >
                        Trending Movies</Text>
                    <Center>
                        <TrendingMovies></TrendingMovies>
                    </Center>
                </GridItem>


             

<GridItem colSpan={6}  >
                    <Text fontSize="4xl" color="white" >
                        Highest Rated Movies</Text>
                    <Center>
                        <HighestRatedMovies></HighestRatedMovies>
                    </Center>
                </GridItem>



            </Grid>
        </div>
    );
}


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
                        <Button colorScheme="orange" variant="outline">
                            Advance Search
                        </Button>
                        <Button colorScheme="orange" variant="outline">
                            My Hub
                        </Button>

                    </Stack>
                    <Input style={
                            {
                                marginTop: "10px",
                                width: "88%"
                            }
                        }
                        placeholder="Search"
                        size="lg"
                        bg="white"/>
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


import React, {Component} from 'react';
import {
    Grid,
    GridItem,
    Box,
    Text,
    Center,
    Wrap
} from "@chakra-ui/react";

class HighestRatedMovies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            highestrated: [],
            titleId: ''
        };
    }


    getHighestRated() {
        fetch('http://18.206.168.148:5000/movies/highestrated ').then(response => response.json()).then(response => {
            this.setState({highestrated: response})
            console.log(this.state)
        })
    }


    componentDidMount() {
        this.getHighestRated();
    }

    handleClick(movie) { // e.preventDefault();
        window.location.href = "/#/movie/" + movie.titleId;
        console.log(movie);
    }

    render() {
        return (
            <div>
                <Center>

                    <Wrap borderRadius="lg" bg="primary.500" templateColumns="repeat(4, 1fr)"
                    gap={6}
                    p="30px"
                    justify="center"
                    marginLeft="5%"
                    marginRight="5%"
                    marginBottom="5%"
                    width="90%"
                    height ="520px" 
                    overflowY="scroll">


                        {
                        this.state.highestrated.map((movie, index) => (
                            <Box w="15rem" bg="primary.500" p="5px" borderRadius="md"
                                onClick={
                                    () => this.handleClick(movie)
                            }>

                                <div key={
                                    movie.titleId
                                }>

                                    <Center>
                                        <img src={
                                                movie.cover_url
                                            }
                                            style={
                                                {

                                                    width: "50%",
                                                    height: "auto",
                                                    borderRadius: "5%"

                                                }

                                            }/>
                                    </Center>
                                    <Text color="white">
                                        {
                                        movie.primaryTitle
                                    }</Text>

                                    <p style={
                                        {color: "white"}
                                    }>Rated {
                                        movie.avgRating
                                    }
                                        by {
                                        movie.numOfVotes
                                    }
                                        viewers.</p>
                                </div>

                            </Box>
                        ))
                    } </Wrap>

                </Center>
            </div>
        );
    }


}

export default HighestRatedMovies;

import React, {Component} from 'react';
import {
    Grid,
    GridItem,
    Box,
    Text,
    Center,
    Wrap,
    WrapItem
} from "@chakra-ui/react";


class TrendingMovies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trending: [],
            titleId: ''

        };
    }


    getTrending() {
        fetch('http://18.206.168.148:5000/movies/trending ').then(response => response.json()).then(response => {
            this.setState({trending: response})
            console.log(this.state)
        })
    }


    componentDidMount() {
        this.getTrending();
    }

    handleClick(movie) { // e.preventDefault();
        window.location.href = "/#/movie/" + movie.titleId;
        console.log(movie);
    }

    render() {


        return (

            <div>
                <Center>

                    <Wrap borderRadius="lg" bg="primary.500"
                        gap={6}
                        p="30px"
                        width="90%">


                        {
                        this.state.trending.map((movie, index) => (
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

export default TrendingMovies;

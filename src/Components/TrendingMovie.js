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
            trending: []
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


    render() {


        return (

            <div>


                <Wrap borderRadius="lg" bg="primary.500"
                    gap={6}
                    p="30px"
                    width="100%">


                    {
                    this.state.trending.map((movie, index) => (
                        <Box w="15rem" bg="white" p="5px" borderRadius="md">
                            <div key={
                                movie.titleId
                            }>
                                <img src={
                                        movie.cover_url
                                    }
                                    style={
                                        {

                                            width: "100%",
                                            height: "auto"

                                        }

                                    }/>
                                <Text >{
                                    movie.primaryTitle
                                }</Text>

                                <p>Rated {
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


            </div>
        );
    }


}

export default TrendingMovies;


import React, { Component } from 'react';
import {Grid, GridItem,Box, Text, Center} from "@chakra-ui/react";

class TrendingMovies extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
          trending:[] 
        };
      }


      getTrending() {
        fetch('http://18.206.168.148:5000/movies/trending ')
          .then(response => response.json())
          .then(response => {
            this.setState({
              trending: response
            })
            console.log(this.state)
          })
      }

      
      componentDidMount() {
        this.getTrending(); 
      }

      render(){
          return (
        <div>
        
        <Grid borderRadius="lg"  bg="primary.500" templateColumns="repeat(4, 1fr)" gap={6} p="30px" width="100%" > 
      
        {this.state.trending.map((movie, index) => (
          <Box bg="white" p="5px" borderRadius="md">
        <div key={movie.titleId}>
          <h1 >{movie.primaryTitle}</h1>
          <p>Rated {movie.avgRating} by {movie.numOfVotes} viewers.</p>
        </div>
        </Box>  
    ))}

        </Grid>
        </div>
          );
      }



}

export default TrendingMovies; 
import React, { Component } from 'react';
import {Grid, GridItem,Box, Text, Center} from "@chakra-ui/react";

class HighestRatedMovies extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
          highestrated:[] 
        };
      }


      getHighestRated() {
        fetch('http://18.206.168.148:5000/movies/highestrated ')
          .then(response => response.json())
          .then(response => {
            this.setState({
              highestrated: response
            })
            console.log(this.state)
          })
      }

      
      componentDidMount() {
        this.getHighestRated(); 
      }

      render(){
          return (
        <div>
        
        <Grid borderRadius="lg"  bg="primary.500" templateColumns="repeat(4, 1fr)" gap={6} p="30px" width="100%" > 
      
        {this.state.highestrated.map((movie, index) => (
          <Box bg="white" p="5px" borderRadius="md">
        <div key={movie.titleId}>
        <img src={movie.cover_url} width="101" height="150"/>
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

export default HighestRatedMovies; 
import React, { Component } from 'react';
import {Text, GridItem,Box, Flex, Heading} from "@chakra-ui/react";

export default class MovieInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
        title_id : this.props.id,
        movieinfo:[] 
        };
      }


      getMovieInfo() {
        console.log(this.state.title_id)
        let api = 'http://18.206.168.148:5000/search-movie-by-id/' + this.state.title_id

        fetch(api)
          .then(response => response.json())
          .then(response => {
            this.setState({
                movieinfo: [response]
            })
            console.log(this.state.movieinfo)
          })
      }

      
      componentDidMount() {
        this.getMovieInfo(); 
      }

      render(){
        console.log(this.state.movieinfo)
          return (
      <div>
          
          
        {this.state.movieinfo.map((movie, index) => (
        
        <div key={movie.titleId}>
        { <img src={movie.full_size_url} width="400" height="500"/> } 
          <Heading bg = "white"> {movie.primaryTitle}
          <Text fontSize="xs" textAlign = "right">Duration:{movie.runtime} mins</Text>
          </Heading>
          <Box bg="white" p="5px" borderRadius="md">
            <Text textAlign = "left" >Rated {movie.avgRating} by {movie.numOfVotes} viewers.</Text>
            <Text textAlign = "left" >Directed by :{movie.Director}</Text>
            <Text textAlign = "left" >Actors:{movie.Actors}</Text>
            <Text textAlign = "left" >Writers :{movie.Writer}</Text>
            <Text textAlign = "left" >Producers :{movie.Producer}</Text>
            <Text textAlign = "left" >Music :{movie.composer}</Text>
            
          {/* { <p>Rated {movie.avgRating} by {movie.numOfVotes} viewers.</p> } */}
          </Box>  
        </div>
        
    ))}

        </div> 
        
          );
      }



}


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

      intersperse(arr, sep) {
        if (arr === undefined || arr === null || arr.length === 0) {
            return [];
        }
    
        return arr.slice(1).reduce(function(xs, x, i) {
            return xs.concat([sep, x]);
        }, [arr[0]]);
    }

      render(){
        console.log(this.state.movieinfo)
          return (
      <div>
          
          
        {this.state.movieinfo.map((movie, index) => (
        
        <div key={movie.titleId}>

          <Heading color = "white"> {movie.primaryTitle}
          <Text fontSize="xs" textAlign = "right">Duration:{movie.runtime} mins</Text>
          </Heading>

        { <img src={movie.full_size_url}   style={{width:"400px" , height:"600px", borderRadius:"5%" }}  /> } 
        
          
            <Text  color="white" textAlign = "left"  paddingTop="20px">Rated {movie.avgRating} by {movie.numOfVotes} viewers.</Text>
            <Text color="white"  textAlign = "left" >Directed by: {this.intersperse(movie.Director, ', ')} </Text>
            <Text  color="white" textAlign = "left" >Actors: {this.intersperse(movie.Actors, ', ')} </Text>
            <Text color="white"  textAlign = "left" >Writers: {this.intersperse(movie.Writer, ', ')} </Text>
            <Text  color="white" textAlign = "left" >Producers: {this.intersperse(movie.Producer, ', ')} </Text>
            <Text  color="white" textAlign = "left" >Music: {movie.composer} </Text>
            
          {/* { <p>Rated {movie.avgRating} by {movie.numOfVotes} viewers.</p> } */}
       
        </div>
        
    ))}

        </div> 
        
          );
      }



}

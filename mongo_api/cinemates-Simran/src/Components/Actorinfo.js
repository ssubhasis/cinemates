import React, { Component } from 'react';
import {Text, GridItem,Box, Flex, Heading} from "@chakra-ui/react";
import axios from 'axios';

export default class Actorinfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
        actor_id : this.props.id,
        actor_basic_info:{ roles:[]},
       
        image: ''

        
        };
      }


      // getActorInfo() {
      //   console.log(this.state.actor_id)
      //   let api = 'https://teampolaris.web.illinois.edu/search-actor-by-id/' + this.state.actor_id

      //   fetch(api)
      //     .then(response => response.json())
      //     .then(response => {
      //       this.setState({
      //           actor_basic_info: [response]
      //       })
      //       console.log(this.state.actor_basic_info + "fetch api response")
      //     })
      // }


      
      
    getActorInfo(){
        console.log(this.state.actor_id +"console log get actor info")
        axios.get ( 'http://teampolaris.web.illinois.edu/search-actor-by-id/' + this.state.actor_id)
        .then((response) => {
          this.setState({
                   actor_basic_info: response.data
                   })
        console.log(JSON.stringify (response.data )+ "console response data");

        }); 
    }
      componentDidMount() {
        this.getActorInfo(); 
      }

      render(){
        
          return (
      <div>
          
        <div key={this.state.actor_basic_info._id}>
        
          <Heading>  {this.state.actor_basic_info.name}</Heading>
          { <img src={this.state.actor_basic_info.full_size_url} width="400" height="500"/> } 
          <Text> Birth Year:  {this.state.actor_basic_info.birthYear}</Text>
          <Text> Death Year: {this.state.actor_basic_info.deathYear}</Text>
         
         

          <Heading> Roles </Heading>
        </div>

        
       

        <div> 
            {this.state.actor_basic_info.roles.map((role)  => (
              <div > 
                <Text>Movie: {role.primaryTitle} </Text> 
                <Text> Category: {role.catagory} </Text>
                <Text> Character: {role.movie_characters} </Text>
                <Text> Job: {role.job} </Text>

                <br></br> 
                

              </div>
            ))} 
        </div>


        </div> 
        
          );
      }



}


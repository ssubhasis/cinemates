import React, { Component } from 'react';
import {Text, GridItem,Box, Flex, Heading, Center} from "@chakra-ui/react";
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


   
   
    handleClick(e) { // e.preventDefault();
       window.location.href = "/#/movie/" + e.target.id; 
        console.log(e.target.id)
        //console.log(this.state.actor_basic_info.roles[0].primaryTitle);
    }
      
      
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
        
          <Heading color="white" paddingBottom="20px">  {this.state.actor_basic_info.name}</Heading>
          <Center>
          { <img src={this.state.actor_basic_info.full_size_url} style={{  borderRadius: "5%", width:"400" ,height:"500"}}/> } 
          </Center>
          <Text color="white" paddingTop="10px"> Birth Year:  {this.state.actor_basic_info.birthYear}</Text>
          <Text color="white"> Death Year: {this.state.actor_basic_info.deathYear}</Text>
         
         

          <Heading color="white"> Roles </Heading>
        </div>

        
       

        <div style={{columnCount:2}}> 
            {this.state.actor_basic_info.roles.map((role)  => (
              <div  > 
                <Text color="white" as="u"  id={role.titleId} onClick = {this.handleClick.bind(this)}>Movie: {role.primaryTitle} </Text> 
                <Text color="white"> Category: {role.catagory} </Text>
                <Text color="white"> Character: {role.movie_characters} </Text>
                <br></br>
      
              </div>
            ))} 
        </div>


        </div> 
   
        
          );
      }



}


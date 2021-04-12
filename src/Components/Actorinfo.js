import React, { Component } from 'react';
import {Text, GridItem,Box, Flex, Heading} from "@chakra-ui/react";
import axios from 'axios';

export default class Actorinfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
        actor_id : this.props.id,
        //actorinfo:[],
       // actor_name:''
        };
      }


    //   getActorInfo() {
    //     console.log(this.state.actor_id)
    //     let api = 'http://teampolaris.web.illinois.edu/search-actors/' + this.state.actor_id

    //     fetch(api)
    //       .then(response => response.json())
    //       .then(response => {
    //         this.setState({
    //             actorinfo: [response]
    //         })
    //         console.log(this.state.actorinfo + "fetch api response")
    //       })
    //   }

      
    getActorInfo(){
        console.log(this.state.actor_id +"console log get actor info")
        axios.get ( 'http://teampolaris.web.illinois.edu/search-actors/' + this.state.actor_id)
        .then((response) => {
        console.log(response.data + "console response data");
        

        }); 
    }
      componentDidMount() {
        this.getActorInfo(); 
      }

      render(){
        console.log(this.state.actorinfo +"please")
          return (
      <div>
          
        {/* {this.state.actorinfo.map((actor, index) => (
        
        <div key={actor._id}>
       
          <Heading bg = "black"> {actor._name} </Heading>
          
            
          
          
        </div>
        
    ))} */}
     <h1>hi</h1>

        </div> 
        
          );
      }



}


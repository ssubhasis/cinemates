import React, { Component } from 'react';
import {GridItem,Box, Text, Heading} from "@chakra-ui/react";

export default class UserComments extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
          title_id : this.props.id,
          comments : []
        };
      }



      getComments() {
        console.log(this.state.title_id)
        let api = 'http://18.206.168.148:5000/movie/' + this.state.title_id
        fetch(api)
          .then(response =>  response.json())
          .then(response => {
            if (response.user_comment===undefined) this.setState({ comments: []});
            else this.setState({
                comments: response.user_comments
            })
            console.log(response)
          })
      }

      
      componentDidMount() {
        this.getComments(); 
      }

      render(){
        console.log(this.state)
          return (
       <div>
         <Text textAlign = "left" color = "white"> User Comments</Text>
        {this.state.comments.map((cmnt, index) => (
        <div key={cmnt.titleId}>
          <br />
           <Box bg="white" p="5px" borderRadius="md">
           <Text textAlign = "left" color = "blue">{cmnt.user_id} : </Text>
           <Text textAlign = "left">{cmnt.user_comment}</Text>
           </Box>
        </div>

    ))}

        </div>  
        
        
          );
      }



}


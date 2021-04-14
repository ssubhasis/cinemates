import React, { Component } from 'react';
import {GridItem,Box, Text, Heading,Button} from "@chakra-ui/react";
import axios from 'axios';
import DeleteComment from './DeleteComment';
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react"

export default class UserComments extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
          title_id : this.props.id,
          comments : [],
          del_comnt : [],
          cmnt:''
        };
       //this.handleDelete = this.handleDelete.bind(this);
      }



      getComments() {
        console.log(this.state.title_id)
        let api = 'http://18.206.168.148:5000/movie/' + this.state.title_id
        fetch(api)
          .then(response =>  response.json())
          .then(response => {
            console.log(response.user_comments)
            if (response.user_comments===undefined) this.setState({ comments: []})
            else this.setState({
                comments: response.user_comments
            })
            console.log(response)
          })
      }

      
      componentDidMount() {
        this.getComments(); 
      }

      handleDelete(title_id,cmnt_id){
        console.log(title_id,cmnt_id)
        let res = DeleteComment(title_id,cmnt_id)
        console.log(res)
        if (res === true)
          window.location.reload();
      } 

      handleChangeComment= (e) => {
        this.state.cmnt =  e
        console.log(this.state.cmnt + "!!")
      } 


      updateComment(id,cmnt, cmnt_id){
        const request_option = {
          method : 'POST',
          headers: {'Content-Type': 'application/json'},
          body : JSON.stringify({"titleId": id, "userId": "ui00001", "userComment": this.state.cmnt, 'comment_seq': cmnt_id})
        };

        
        fetch('http://18.206.168.148:5000/movie/post-comment',request_option)
           .then(res => res.json())
           .then((resp) => {console.log(resp)});
         
           console.log(cmnt)
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
          

           <Editable defaultValue={cmnt.user_comment} onChange={this.handleChangeComment}>
            <EditablePreview />
            <EditableInput />
          </Editable>

           <Button  onClick={() => {this.updateComment(this.state.title_id, cmnt.user_comment ,cmnt.comment_seq) }}> Save</Button><br />
            
            <Button onClick={() => { this.handleDelete(this.state.title_id,cmnt.comment_seq) }} > Delete </Button> 
           </Box>
        </div>

    ))}

        </div>  
        
        
          );
      }



}


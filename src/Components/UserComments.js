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
          cmnt:'',
          userID : localStorage.getItem('userID')
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
        //console.log(title_id,cmnt_id,this.state.userID)
        //DeleteComment(title_id,cmnt_id)
        const request_option = {
          method : 'POST',
          headers: {'Content-Type': 'application/json'},
          body : JSON.stringify({'titleId': title_id,'comment_seq': cmnt_id})
};

  console.log(request_option)
/*          axios.post('http://18.206.168.148:5000/movie/delete-comment', body) 
.then(res => res.json())
.then((resp) => {console.log(resp)}) */
fetch('http://18.206.168.148:5000/movie/delete-comment',request_option)
  .then(res => res.json())
  .then((res) => {this.setState({comments:res.user_comments})
    console.log('delete')
  console.log(this.state.comments)
}).then(this.setState(this.state))

       // if (res === true)
       // location.reload();
      } 

      handleChangeComment= (e) => {
        this.state.cmnt =  e
        console.log(this.state.cmnt + "!!")
      } 


      updateComment(id,cmnt, cmnt_id){
        console.log(this.state.userID)
        const request_option = {
          method : 'POST',
          headers: {'Content-Type': 'application/json'},
          body : JSON.stringify({"titleId": id, "userId": this.state.userID, "userComment": this.state.cmnt, 'comment_seq': cmnt_id})
        };

        
        fetch('http://18.206.168.148:5000/movie/post-comment',request_option)
           .then(res => res.json())
           .then((resp) => {console.log(resp)});
         
           console.log(cmnt)
      }

      handleError(){
        console.log("Error!! User not authorized")
        alert("Error! User not authorized");
         //"Error!! User not authorized"
      } 

      render(){
        console.log(this.state)
          return (
       <div>
        <Text align="left" fontSize="lg" color="white" paddingTop="20px">
                        User Comments</Text>
        {this.state.comments.map((cmnt, index) => (
        <div key={cmnt.comment_seq}>
          <br />
           <Box bg="white" p="5px" borderRadius="md">
           <Text textAlign = "left" color = "blue">{cmnt.user_id} : </Text>
          

           <Editable defaultValue={cmnt.user_comment} onChange={this.handleChangeComment}>
            <EditablePreview />
            <EditableInput />
          </Editable>

           <Button  onClick={() => {
             if (cmnt.user_id === this.state.userID)
              this.updateComment(this.state.title_id, cmnt.user_comment ,cmnt.comment_seq) 
              else this.handleError()
              }}> Save</Button><br />
            <Button onClick={() => {  
              if (cmnt.user_id === this.state.userID)
                this.handleDelete(this.state.title_id,cmnt.comment_seq) 
              else this.handleError()}} > Delete </Button> 
           </Box>
        </div>

    ))}

        </div>  
        
        
          );
      }



}


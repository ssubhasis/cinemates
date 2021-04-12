import React, { Component } from 'react';
import {GridItem,Box, Text, Heading,Button} from "@chakra-ui/react";
import axios from 'axios';

export default function  DeleteComment (title_id,cmnt_id){
        console.log(title_id,cmnt_id)
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
            .then((resp) => {console.log(resp)})

      

}
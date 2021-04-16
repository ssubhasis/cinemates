import React, { Component } from 'react';
import {Link} from'react-router-dom'; 




export default function  AddReview (id,cmnt){
    console.log(cmnt)

    console.log(localStorage.getItem('userID'))

    let userID= localStorage.getItem('userID')

    const request_option = {
                method : 'POST',
                headers: {'Content-Type': 'application/json'},
                body : JSON.stringify({"titleId": id, "userId": userID, "userComment": cmnt})
    };

        console.log(request_option)
     fetch('http://18.206.168.148:5000/movie/post-comment',request_option)
        .then(res => res.json())
        .then((resp) => {console.log(resp)});

        window.location.href = "/#/movie/"+id ;
        return false;
  
      

}
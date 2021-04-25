import React, { Component } from 'react';


export default function  SaveMovie (title_id,isMovieSaved){

    console.log(localStorage.getItem('userID'))

    let userID= localStorage.getItem('userID')
        console.log(title_id,userID, isMovieSaved )
        const request_option = {
                    method : 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body : JSON.stringify({'titleId': title_id,'userId': userID ,'liking':isMovieSaved}) //true or false added for saving here 
        };

        console.log(request_option)
         fetch('https://teampolaris.web.illinois.edu/modify-user-liking',request_option)
            .then(res => res.json())
            .then((resp) => {console.log(resp)})

      

}
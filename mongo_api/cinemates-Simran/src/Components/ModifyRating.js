import React, { Component } from 'react';


export default function  ModifyRaying (title_id,rte){
        console.log(title_id,rte)
        const request_option = {
                    method : 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body : JSON.stringify({'titleId': title_id,'userId': 'ui00001' ,'rating':rte})
        };

            console.log(request_option)
/*          axios.post('http://18.206.168.148:5000/movie/delete-comment', body) 
         .then(res => res.json())
         .then((resp) => {console.log(resp)}) */
         fetch('https://teampolaris.web.illinois.edu/modify-user-liking',request_option)
            .then(res => res.json())
            .then((resp) => {console.log(resp)})

      

}
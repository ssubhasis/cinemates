import React , { useState, useEffect } from 'react';
import {
    Grid,
    GridItem,
    Input,
    Stack,
    Center,
    Text,
    Wrap,
    Flex,
    WrapItem,
    Button,
    Select,
    Heading
} from "@chakra-ui/react"
import {Link} from 'react-router-dom';
import MovieInfo from '../Components/MovieInfo';
import UserComments from '../Components/UserComments';
import {useParams} from "react-router";
import {useHistory} from "react-router-dom";
import Login from '../Components/Login/Login';
import LoginPage from '../Pages/LoginPage';
import useToken from '../Components/App/useToken';
import ModifyRaying from '../Components/ModifyRating';
import SaveMovie from '../Components/SaveMovie';
import {Switch} from "@chakra-ui/react";
import MoviePage from "../Pages/MoviePage"; 
export default function BasicMoviePage() {
   

    let {id} = useParams();
    let userID = localStorage.getItem('userID')
    let [isMovieSaved, setIsMovieSaved] = React.useState(false)
    

    //console.log(id);

    const history = useHistory();
    let [value, setValue] = React.useState("")
   
    


    const {token, setToken} = useToken();
    

    if (!token) {
        // return <Login setToken={setToken} />
        return <LoginPage setToken={setToken}/>
       
    }
    else {
        return   <MoviePage> </MoviePage>   
    }

    
    return (
        
        <div>
            <Wrap gridTemplateColumns="auto 1fr" bg="primary.100"
              spacing="30px"
                p="40px"
              
        
                height="100%">


                <Flex direction="column" bg="primary.500" padding="20px" borderRadius="lg"  margin="50px" >
                    <MovieInfo id={id}></MovieInfo>
                </Flex>


            </Wrap>
        </div>
    );

}






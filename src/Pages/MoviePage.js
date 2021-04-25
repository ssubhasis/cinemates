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

export default function MoviePage() {
   

    let {id} = useParams();
    let userID = localStorage.getItem('userID')
    let [isMovieSaved, setIsMovieSaved] = React.useState(false)
    

    //console.log(id);

    const history = useHistory();
    let [value, setValue] = React.useState("")
   
    useEffect(() => {
        getMovieSavedStatus()
        getMovieRatingStatus()

    });


    function handleClick() {
        history.push("/review/" + id);
    }

    const {token, setToken} = useToken();
    

    if (!token) {
        // return <Login setToken={setToken} />
        return <LoginPage setToken={setToken}/>
    }

    const handleChange = (value) => {
        setValue(Number(value.target.value))
        //console.log(value.target.value)
        ModifyRaying(id, value.target.value)
        console.log(value.target.value +"this is just the value being logged from handle change")
        
    }

    //fetch the saved movies to keep saved status 
    const getMovieSavedStatus =() => {
        let api = 'http://18.206.168.148:5000/movies-saved-by-user-id/' + userID
        //console.log(api)
        fetch(api)
          .then(response => response.json())
          .then(response => {
        let mapOfSavedMovies = response.map(({ titleId }) => titleId);
        
        //console.log(mapOfSavedMovies)
          if (mapOfSavedMovies.includes(id)){
            setIsMovieSaved(true)

          }
          })
    }

    //fetch rating of movie to save status
    const getMovieRatingStatus = () => {
        let api = "https://teampolaris.web.illinois.edu/movie-rated-by-user-id/" + userID + "/"+ id
        
        fetch(api)
          .then(response => response.json())
          .then(response => {
              if(response.length > 0)
              {
            setValue(response[0].userRating)
            console.log(response+"!!!!!@")
              }

           //console.log(response+" This is the response from movie rating status ")
          })

    
    }

  



    // movie save function
    const handleSaveMovie = () => {
        setIsMovieSaved(!isMovieSaved)

        if (isMovieSaved) {
            const request_option = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {'titleId': id, 'userId': userID, 'liking': 0}
                )
            };

       
        fetch('https://teampolaris.web.illinois.edu/modify-user-liking',request_option)
           .then(res => res.json())
           .then((resp) => {console.log(resp)})

        } 
        
         else {
            const request_option = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {'titleId': id, 'userId': userID, 'liking': 1}
                )
            };


        
        fetch('https://teampolaris.web.illinois.edu/modify-user-liking',request_option)
           .then(res => res.json())
           .then((resp) => {console.log(resp)})

        }
        
    
        
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


                <Flex direction="column" bg="primary.500" padding="50px" borderRadius="lg" width="60%" >

                <Text  fontSize="lg" color="white" align="left" paddingBottom="10px" >Save Movie</Text>
                <Switch  align="left" isChecked={isMovieSaved} colorScheme="orange" size="lg" onChange={handleSaveMovie}/>


                
                

                    
                    <Text  paddingBottom="10px" align="left" fontSize="lg" color="white">
                        Rate the Movie</Text>
                    <Select value={value}
                        onChange={handleChange}
                        width="35%"
                        bg="white"
                        borderColor="white"
                        color="Black"
                        placeholder="Select option"
                        align="left"
                        paddingBottom="20px"
                        >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </Select>
                   
                    <Button bg="primary.200"  size="lg" marginTop="20px" onClick={handleClick}>Write a Review</Button>
                    <UserComments id={id}></UserComments>
                </Flex>


            </Wrap>
        </div>
    );

}






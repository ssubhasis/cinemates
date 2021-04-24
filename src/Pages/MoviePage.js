
import React from 'react';
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
import Search from '../Components/Search';
import GenreSelect from '../Components/GenreSelect'; 
import LanguageSelect from '../Components/LanguageSelect';
import StarSelect from '../Components/StarSelect'; 
import {Link} from'react-router-dom'; 
import MovieInfo from '../Components/MovieInfo';
import UserComments from '../Components/UserComments';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import Login from '../Components/Login/Login';
import LoginPage from '../Pages/LoginPage';
import useToken from '../Components/App/useToken';
import ModifyRaying from '../Components/ModifyRating';
import SaveMovie from '../Components/SaveMovie'; 
import { Switch } from "@chakra-ui/react"; 

export default function MoviePage() {

    let { id } = useParams();

    console.log(id);

    const history = useHistory();
    const [value, setValue] = React.useState("")

    function handleClick() {
        history.push("/review/"+id);
    }

    const { token, setToken } = useToken();

    if(!token) {
        // return <Login setToken={setToken} />
        return <LoginPage setToken={setToken} />
    }

    const handleChange = (value) => {
        setValue(Number(value.target.value))
        console.log(value.target.value)
        ModifyRaying(id,value.target.value)
      }

    return (
        <div> 
        <Wrap gridTemplateColumns="auto 1fr" bg="primary.100"
            gap={8}
            p="30px"
            height="100%">

{/* 
            <Flex direction="column" bg="primary.500" padding="5px" >
            <Search></Search>
                <GenreSelect></GenreSelect>
                <LanguageSelect></LanguageSelect>
                <StarSelect></StarSelect>
            </Flex>    */}




            <Flex direction="column" bg="primary.500" padding="5px" >
                <MovieInfo id={id} ></MovieInfo>
            </Flex>


            <Flex direction="row" bg="primary.500" padding="5px" >
           
  
            <Switch colorScheme="orange" size="lg"  defaultChecked="true"/>


                 <Button onClick={handleClick}>Write a Review</Button>  
                 <Heading  as="h5" size="sm" color = "white"> Rate the Movie</Heading>
                 <Select value={value}
                         onChange={handleChange}
                         width="35%"
                             bg="white"
                             borderColor="white"
                             color="Black"
                             placeholder="Select option">
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
                <UserComments id={id} ></UserComments>  
            </Flex>

        </Wrap>
    </div>
    );
}

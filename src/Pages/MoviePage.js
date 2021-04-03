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
   Button
} from "@chakra-ui/react"
import Search from '../Components/Search';
import GenreSelect from '../Components/GenreSelect'; 
import LanguageSelect from '../Components/LanguageSelect';
import StarSelect from '../Components/StarSelect'; 
import {Link} from'react-router-dom'; 
import MovieInfo from '../Components/MovieInfo';
import UserComments from '../Components/UserComments';
import { useParams } from "react-router";



export default function MoviePage() {

    let { id } = useParams();

    console.log(id);
    return (
        <div> 
        <Wrap gridTemplateColumns="auto 1fr" bg="primary.100"
            gap={8}
            p="30px"
            height="100%">



            <Flex direction="column" bg="primary.500" padding="5px" >
            <Search></Search>
                <GenreSelect></GenreSelect>
                <LanguageSelect></LanguageSelect>
                <StarSelect></StarSelect>
            </Flex>   


            <Flex direction="column" bg="primary.500" padding="5px" >
                <MovieInfo id={id} ></MovieInfo>
            </Flex>

            <Flex direction="row" bg="primary.500" padding="5px" >
                <Link to="review">
                    <Button> Write a Review</Button>
                </Link>
                <UserComments id={id} ></UserComments>  
            </Flex>   



        </Wrap>
    </div>
    );
}


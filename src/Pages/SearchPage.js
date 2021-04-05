import React from 'react';
import {
    Grid,
    GridItem,
    Input,
    Stack,
    Box,
    Center,
    Text,
    Wrap,
    Flex,
    WrapItem,
   Button
} from "@chakra-ui/react"
import AdvancedSearch from '../Components/AdvancedSearch';
import GenreSelect from '../Components/GenreSelect'; 
import LanguageSelect from '../Components/LanguageSelect';
import StarSelect from '../Components/StarSelect'; 
import axios from 'axios'


const API_URL = 'https://teampolaris.web.illinois.edu/search-movies'

class SearchPage extends React.Component{
    state = { searchQuery:'', 
        genre: '',
                region:'',
            star:'',
        searchResults:[] }

    handleSearch = (searchValue) => {
        this.state.searchQuery = searchValue;
        console.log(this.state)
    }

    handleGenre = (genreValue) => {
        this.state.genre = genreValue;
        console.log(this.state)
    }
    handleRegion = (regionValue) => {
        this.setState({region: regionValue});
    }
    handleStar = (starValue) => {
        this.setState({star: starValue});
    }

     onSubmit = () =>{
        const body = {"movieName":this.state.searchQuery,
                    "movieGenre":this.state.genre,
                    "movieRegion":this.state.region,
                    "movieRating": this.state.star}
            
         axios.post(API_URL, body) 
         .then(response => this.setState({searchResults:response.data})); 
        
        console.log(this.state); 
    }


    render (){
    return (
        <div> 
            <Wrap gridTemplateColumns="auto 1fr" bg="primary.100"
                gap={8}
                p="30px"
                height="auto">

                <Flex direction="column" bg="primary.500" padding="5px" >
                <AdvancedSearch onSearchChange={this.handleSearch}></AdvancedSearch>
                <GenreSelect onSelectGenre={this.handleGenre}></GenreSelect>
                <LanguageSelect onSelectRegion={this.handleRegion}></LanguageSelect>
                <StarSelect onSelectStar={this.handleStar}></StarSelect>
                <Button colorScheme="orange" size="md"  onClick={this.onSubmit}> Submit </Button>
                </Flex>



            
                    <Center w="auto" h="100%" bg="green.200">
                        <h1>HELLO</h1>

                    {
                        this.state.searchResults.map((movie, index) => (
                            <Box w="15rem" bg="pink.200" p="5px" borderRadius="md"
                                onClick={
                                    () => this.handleClick(movie)
                            }>

                                <div key={
                                    movie.titleId
                                }>

                                    <Center>
                                        <img src={
                                                movie.cover_url
                                            }
                                            style={
                                                {

                                                    width: "50%",
                                                    height: "auto",
                                                    borderRadius: "5%"

                                                }

                                            }/>
                                    </Center>

                                    <Text color="white">
                                        {
                                        movie.primaryTitle
                                    }</Text>

                                    <p style={
                                        {color: "white"}
                                    }>Rated {
                                        movie.avgRating
                                    }
                                        by {
                                        movie.numOfVotes
                                    }
                                        viewers.</p>
                                </div>

                            </Box>
                        ))
                    }
                    </Center>
         


            </Wrap>
        </div>
    );
    }
}export default SearchPage



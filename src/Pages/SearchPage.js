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
    IconButton,
   Button
} from "@chakra-ui/react"
import AdvancedSearch from '../Components/AdvancedSearch';
import GenreSelect from '../Components/GenreSelect'; 
import LanguageSelect from '../Components/LanguageSelect';
import StarSelect from '../Components/StarSelect'; 
import StarSelectAlt from '../Components/StarSelectAlt'; 
import axios from 'axios'


const API_URL = 'http://18.206.168.148:5000/search-movies'

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

    handleClick(movie) { // e.preventDefault();
        window.location.href = "/#/movie/" + movie.titleId;
        console.log(movie);
    }


    render (){
    return (
            <Grid h="100%" templateColumns="auto 1fr"
                gap={8}
                backgroundColor="primary.100" >
    
   
                
                <Flex direction="column" bg="primary.500" padding="20px" marginTop="20px"
                       marginBottom="20px" marginLeft="20px"   borderRadius= "5%">
                <AdvancedSearch onSearchChange={this.handleSearch}></AdvancedSearch>
                <GenreSelect onSelectGenre={this.handleGenre}></GenreSelect>
                <LanguageSelect onSelectRegion={this.handleRegion}></LanguageSelect>
                <StarSelect onSelectStar={this.handleStar}></StarSelect>
                {/* <StarSelectAlt onSelectStar={this.handleStar}></StarSelectAlt> */}
                <Button bgColor="primary.200" size="md" variant="solid" maxWidth="50px" marginLeft= "10px"onClick={this.onSubmit}> Go </Button>

               

                </Flex>
                


                <Wrap borderRadius="lg" bg="primary.500"
                        gap={6}
                        p="10px"
                        width="95%"
                       marginTop="20px"
                       marginBottom="20px"
                       borderRadius= "2%"
                       >


                
                   
                   

                    {
                        this.state.searchResults.map((movie, index) => (
                            <Box w="15rem"  p="5px" borderRadius="md"
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
                    
                 
         
                </Wrap>
                   
                    
            </Grid>
    );
    }
}export default SearchPage



import React, {Component} from 'react';
import {
    Grid,
    GridItem,
    Box,
    Text,
    Center
} from "@chakra-ui/react";


export default  class SavedDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
        userID : localStorage.getItem('userID'),
        savedmovie:[] 
        };
      }

      getSavedMovie() {
        console.log(this.state.userID)
        let api = 'http://18.206.168.148:5000/movies-saved-by-user-id/' + this.state.userID
        console.log(api)
        fetch(api)
          .then(response => response.json())
          .then(response => {
            this.setState({
                savedmovie: response
            })
            console.log(this.state.savedmovie)
          })
      }

      componentDidMount() {
        this.getSavedMovie();
    }

    render() {
        return (
            <div>

                     <Text fontSize="3xl" color="white" marginTop="30px" textAlign="left"  >
                       Saved Movies 
                    </Text>
                    
                <Grid borderRadius="lg" bg="primary.500"  marginRight="5%" paddingBottom="20px"  width="94%">
                {this.state.savedmovie.map((movie, index) => (
                //    <Box bg="primary.500" p="5px" borderRadius="md" w="15rem" >                    
                    <div key={
                           movie.titleId
                       }>
                               <Center>
                           <img src={
                                   movie.cover_url
                               }
                               style={
                                   {

                                       width: "auto%",
                                       height: "auto",
                                       borderRadius: "5%"

                                   }

                               }/>
                        </Center>
                       <Text color="white">
                           {
                               movie.primaryTitle
                           }
                           </Text>
                           <p style={
                                   {color: "white"}} >Rated {
                               movie.avgRating
                           }
                               by {
                               movie.numOfVotes
                           }
                               viewers.</p>
                       </div>
                 //  </Box>

                    ))
    }
                </Grid>


            </div>
        );
    }


}


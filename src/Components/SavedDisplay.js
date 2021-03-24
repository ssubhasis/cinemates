import React , {Component} from 'react';
import {
    Grid,
    GridItem,
    Box,
    Text,
    Center
} from "@chakra-ui/react";


class SavedDisplay extends React.Component {
   

    render() {
        return (

            <div>


                <Grid borderRadius="lg" bg="primary.500"
                    width="100%">
                         <h1 style={{color:"white"}}>Saved Movie</h1>
                        <h1 style={{color:"white"}}>Place holder for saved movies</h1>
                  

                        
                 </Grid>


            </div>
        );
    }


}

export default SavedDisplay;





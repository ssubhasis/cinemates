import React, {Component} from 'react';
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
            
                     <Text fontSize="3xl" color="white" marginTop="30px" textAlign="left"  >
                       Saved Movies
                    </Text>
                    
                <Grid borderRadius="lg" bg="primary.500"  marginRight="5%" paddingBottom="20px"  width="94%">

                   
                    <h1 style={
                        {color: "white"}
                    }>Place holder for saved movies</h1>
                </Grid>


            </div>
        );
    }


}

export default SavedDisplay;

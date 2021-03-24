import React from 'react';
import {
    Grid,
    GridItem,
    Input,
    Stack,
    Center,
    Text
} from "@chakra-ui/react"
import {Button, ButtonGroup} from "@chakra-ui/react"
import UserDetails from '../Components/UserDetails';
import SavedDisplay from '../Components/SavedDisplay'; 
import UserRecommendation from '../Components/UserRecommendation'; 


export default function MyHubPage() {


    return (
        <div> {/* 
            <Grid h="auto" templateRows="auto 1fr" templateColumns="repeat(1, 2fr)"
                gap={4}
                backgroundColor="primary.100">

                </Grid> */}
                 
            <Grid h="1000px" templateRows="repeat(auto, 1fr)" templateColumns="repeat(auto, 1fr)"
                gap={4} backgroundColor="pink" paddingTop="40px" >
               
                <GridItem colSpan={2} 
                    bg="primary.100">
                    <h1 style={{color:"white", textAlign:"left", paddingLeft:"10px", fontWeight:"700", fontSize:"30px"}}>My Hub </h1>
                    <UserDetails></UserDetails>
                </GridItem>

                <GridItem colSpan={2}
                    bg="primary.100">
                        <SavedDisplay/> 
                    </GridItem>

                <GridItem colSpan={4}
                    bg="primary.100">
                    <Center>
                     <Text fontSize="4xl" color="white" >
                        My Recommendation</Text>
                    </Center>
                        <UserRecommendation></UserRecommendation>
                </GridItem>
            </Grid>

        </div>
    );
}

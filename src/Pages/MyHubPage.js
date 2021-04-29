import React from 'react';
import {
    Grid,
    GridItem,
    Input,
    Stack,
    Center,
    Text,
    Flex
} from "@chakra-ui/react"
import {Button, ButtonGroup} from "@chakra-ui/react"
import UserDetails from '../Components/UserDetails';
import SavedDisplay from '../Components/SavedDisplay'; 
import UserRecommendation from '../Components/UserRecommendation'; 
import useToken from '../Components/App/useToken';
import { Redirect } from 'react-router-dom';


export default function MyHubPage() {

   const { token, getToken } = useToken();
   
   let ud =getToken()

    console.log(ud)

    console.log(localStorage.getItem('userID'))

    let userID= localStorage.getItem('userID')

    if (!ud || ud === null)
        {return <Redirect push to="/login"/> }
    else {
    return (
        <div> {/* 
            <Grid h="auto" templateRows="auto 1fr" templateColumns="repeat(1, 2fr)"
                gap={4}
                backgroundColor="primary.100">

                </Grid> */}
               
            <Grid h="100%" templateRows="repeat(auto, 1fr)" 
                gap={4} backgroundColor="primary.100" paddingTop="40px"  >
                    
                    
                <GridItem colSpan={1} 
                    bg="primary.100">
                   
                   

                    <Text fontSize="5xl" color="white" textAlign="left" paddingLeft="17%">My Hub</Text>

                    <UserDetails userID={userID} ></UserDetails>
                </GridItem>

                <GridItem colSpan={3}
                    bg="primary.100">
                        <SavedDisplay userID={userID} > </SavedDisplay> 
                    </GridItem>

                <GridItem colSpan={4}
                    bg="primary.100">
                    
                        <UserRecommendation userID={userID} ></UserRecommendation>
                </GridItem>
             
            </Grid>

        </div>
    );}
}
import React from 'react';
import Actorinfo from '../Components/Actorinfo'; 
import { useParams } from "react-router";
import ActorBarChartinfo from '../Components/ActorBarChartinfo'
import {Grid,Flex,Center,Heading } from "@chakra-ui/react"



export default function ActorPage() {

    let { id } = useParams();
    console.log(id +"!!!");


    return (
        <Grid h="100%" 
        gap={8}
        paddingBottom="100px"
        backgroundColor="primary.100" >

        <div>
        <Heading color="white" align="center"  paddingTop="40px">Actor Profile</Heading>
            <Center>
                
        <Flex bg="primary.500" padding="20px" marginTop="20px" paddingBottom="100px"
                       marginBottom="20px" marginLeft="20px"  borderRadius="md" width="90%">
            <Actorinfo id={id} ></Actorinfo>
            <ActorBarChartinfo id={id} ></ActorBarChartinfo >
        </Flex>
        </Center>
        </div>

        </Grid>
    );
}


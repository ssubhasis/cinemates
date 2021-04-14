import React , {Component} from 'react';
import {
    Grid,
    GridItem,
    Box,
    Text,
    Center
} from "@chakra-ui/react";
import {Link} from'react-router-dom'; 


export default class BasicSetting extends React.Component {
    render() {
        return (

            <div>


                <Grid borderRadius="lg" bg="primary.500"
                    width="100%">

                        <h1 style={{color:"white"}}>Place holder for user image</h1>
                        <h1 style={{color:"white"}}>Place holder for username--John</h1>
                        <h1 style={{color:"white"}}>Place holder for birthday</h1>
                        <h1 style={{color:"white"}}>Place holder for email</h1>

                        <Link to ="/setting">
                        <h1 style={{color:"white"}}>Click here will take you to full setting page, include ability to delete account? </h1>
                        </Link>
                 </Grid>


            </div>
        );
    }


}
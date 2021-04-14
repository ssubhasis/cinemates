import React, {Component} from 'react';
import {
    Grid,
    GridItem,
    Box,
    Text,
    Center
} from "@chakra-ui/react";


export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []
        };
    }


    getUser() {
        fetch('http://18.206.168.148:5000/movies/trending ').then(response => response.json()).then(response => {
            this.setState({user: response})
            console.log(this.state)
        })
    }


    componentDidMount() {
        this.getUser();
    }


    render() {
        let userDetails= this.state.user
        return (
            <div>
            <Grid borderRadius="lg" bg="primary.500" templateColumns="repeat(4, 1fr)"
                    gap={6}
                    p="30px"
                    width="35%"
                    >
                    {   <Box bg="white" p="5px" borderRadius="md" >               
                            <div key={
                                "123"
                             //   userDetails.userID
                            }>

                                <h1>{
                                   // userDetails.usernm
                                   "John Smith"
                                }</h1>
                                <p>Email: {
                                   // userDetails.EmailID
                                   "abc@email.com"
                                }</p>
                                <p>
                                    DOB: {
                                   // ususerDetailser.DOB
                                   "29th May 1990"
                                }
                            </p>
                            </div>
                            </Box>
                } </Grid>


            </div>
        );
    }


}



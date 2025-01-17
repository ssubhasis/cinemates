import React , {Component} from 'react';
import {
    Grid,
    GridItem,
    Box,
    Text,
    Center,
    Flex
} from "@chakra-ui/react";
import {Link} from'react-router-dom'; 
import usericonimage from'../Assets/UserIconImage.jpeg';


export default class UserDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: [],
            userid : this.props.userID
        };
    }
    


    getUser() {
        console.log(this.state.userid)
        let api_ud ='https://teampolaris.web.illinois.edu/user-details/' + this.state.userid
        console.log(api_ud)
        fetch(api_ud).then(response => response.json()).then(response => {
            this.setState({user: response})
            console.log(this.state)
        })
    }


    componentDidMount() {
        this.getUser();
    }
   

    render() {
        console.log(usericonimage);
        return (

            <div>
                <Grid borderRadius="lg" bg="primary.500"  marginLeft="17%" marginRight="5%" paddingBottom="30px" paddingTop="30px" 
                    width="70%">
                    
                        <Center>
                     < img src = {usericonimage} alt="UserIconImage" style={{width:"20%", height:"auto", borderRadius:"55%"}}></img> 
                        {/* <FontAwesomeIcon icon={faUser} /> */}
                        </Center>
                        <h1 style={{color:"white"}}>User: {
                                   this.state.user.userName
                                   //"John Smith" 
                                }</h1>
                        <h1 style={{color:"white"}}>Email: {
                                    this.state.user.userEmail
                                   //"abc@email.com"
                                }</h1>
                        <h1 style={{color:"white"}}>DOB: {
                                   this.state.user.userBirthYear
                                   //"29th May 1990"
                                }</h1> 
                        
                        {/* <Link to ="/setting">
                        <h1 style={{color:"white"}}>Click here will take you to full setting page, include ability to delete account? </h1>
                        </Link> */}
                 </Grid>


            </div>
        );
    }


}







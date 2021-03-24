import React, { useState } from "react";
//import {Form,FormGroup ,FormLabel,FormControl} from "@chakra-ui/react";
import {Form,FormGroup ,FormLabel,FormControl} from "react-bootstrap";
import {Button, ButtonGroup} from "@chakra-ui/react"
import {
  Grid,
  GridItem,
  Input,
  Stack,
  Center,
  Text
} from "@chakra-ui/react"

export default class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password:''
    };

    this.handleEmail= this.handleEmail.bind(this);
    this.handlePassword= this.handlePassword.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
}
handleEmail(event) {
  this.setState({email: event.target.value});
}
handlePassword(event) {
  this.setState({password: event.target.value});
}
handleSubmit(event) {
  this.props.history.push("/")
  event.preventDefault();
}

 validateForm() {
     return this.email.length > 0 && this.password.length > 0;
   }

render(){
  return (
    <div className="Login">
      <Center>
      <Grid borderRadius="lg" bg="primary.100" 
                    gap={6}
                    p="30px"
                    width="60%"
                   >
        <GridItem colSpan={6}  >
          <Form onSubmit={this.handleSubmit}>
            <Form.Group size="lg" controlId="email">
              <Form.Label color="white">Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                value={this.state.email}
                onChange={this.handleEmail}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={this.state.password}
                onChange={this.handlePassword}
              />
            </Form.Group>
            {/* <Button block size="lg" type="submit" disabled={!validateForm()}> */}
            <Button block size="lg" type="submit">
              Login
            </Button>
          </Form>
      </GridItem>

    </Grid>
    </Center>
    </div>
  );
}
}
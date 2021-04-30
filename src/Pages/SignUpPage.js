import React, {useState} from 'react';
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    CircularProgress,
    Icon,
    InputGroup,
    InputRightElement,
    Text
} from '@chakra-ui/react';
import axios from 'axios'
import PropTypes from 'prop-types';
import ErrorMessage from '../Components/LoginError'; 

export default function SignUpPage()  {

    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [userId, setUserId] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [birthYear, setBirthYear] = useState();
    const API_URL = 'https://teampolaris.web.illinois.edu/user-registration'
    const [state, setState] = useState();

    const delay = ms => new Promise(res => setTimeout(res, ms));

    const handleSubmit = async e => {
        e.preventDefault();
        setIsLoading(true);
  
        try {
            const body = {"userId":userId,
            "userName":name,
            "password":password,
            "emailId": email,
            "birthyear": birthYear,
        }

            axios.post(API_URL, body) 
            // .then(res => res.json())
            .then((resp) => {console.log(resp)});
            // const response = axios.post(API_URL, body)
            // .then((response) => {
            //                     console.log(response);})
            // .catch(function(error) {
            //     console.log(error.response.data); // this is the part you need that catches 400 request
            //     }); 
            // setState(response);
            setIsLoading(false);
            setShowPassword(false);
            

        } catch (error) {
            console.log(error)
            console.log('brokey')
            setError('Invalid username');
            setIsLoading(false);
            setUserId('');
            setPassword('');
            setShowPassword(false);
        }
        await delay(1000);
        window.location.href='/';
      }

    const handlePasswordVisibility = () => setShowPassword(!showPassword);
        return (
            <Flex width="full" align="center" justifyContent="center">
            <Box
            p={8}
            maxWidth="500px"
            borderWidth={1}
            borderRadius={8}
            boxShadow="lg"
          >
                <div>
                    <Box textAlign="center">
                        <Heading>Sign Up</Heading>
                    </Box>
                    
                    <Box my={4} textAlign="left">
                        <form onSubmit={handleSubmit}>
                        {error && <ErrorMessage message={error} />}
                        <FormControl isRequired>
                            <FormLabel>Full Name</FormLabel>
                            <Input
                            type="text"
                            placeholder="John D"
                            size="lg"
                            onChange={event => setName(event.currentTarget.value)}
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input
                            type="text"
                            placeholder="John@gmail.com"
                            size="lg"
                            onChange={event => setEmail(event.currentTarget.value)}
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Birth Year</FormLabel>
                            <Input
                            type="text"
                            placeholder="2000"
                            size="lg"
                            onChange={event => setBirthYear(event.currentTarget.value)}
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>User ID</FormLabel>
                            <Input
                            type="text"
                            placeholder="ui0001"
                            size="lg"
                            onChange={event => setUserId(event.currentTarget.value)}
                            />
                        </FormControl>
                        <FormControl isRequired mt={6}>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                            <Input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="*******"
                                size="lg"
                                onChange={event => setPassword(event.currentTarget.value)}
                            />
                            <InputRightElement width="3rem">
                                <Button
                                h="1.5rem"
                                size="sm"
                                onClick={handlePasswordVisibility}
                                >
                                {showPassword ? (
                                    <Icon name="view-off" />
                                ) : (
                                    <Icon name="view" />
                                )}
                                </Button>
                            </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Button
                            variantColor="teal"
                            variant="outline"
                            type="submit"
                            width="full"
                            mt={4}
                        >
                            {isLoading ? (
                            <CircularProgress
                                isIndeterminate
                                size="24px"
                                color="teal"
                            />
                            ) : (
                            'Sign Up'
                            )}
                        </Button>
                        </form>
                    </Box>
                </div>
            </Box>
        </Flex>
        );

}
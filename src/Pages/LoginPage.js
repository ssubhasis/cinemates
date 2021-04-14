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
import PropTypes from 'prop-types';
import {userLogin, loginUser} from '../Components/loginApi';
import ErrorMessage from '../Components/LoginError'; 
// import useToken from '../Components/App/useToken';


export default function LoginPage({ setToken }) {
    // const [userId, setUserId] = useState('');
    // const [password, setPassword] = useState('');
    // const [token, setToken] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    // const [userName, setUserName] = useState('');    
    // const [userEmail, setUserEmail] = useState('');
    // const [userBirthYear, setUserBirthYear] = useState('');
  
    // const handleSubmit = async event => {
    //   event.preventDefault();
  
    //   setIsLoading(true);
  
    //   try {
    //     await userLogin({ userId, password })
    //     .then(response => {
    //       setUserName(response.userName);
    //       setUserEmail(response.userEmail);
    //       setUserBirthYear(response.userBirthYear);
    //       console.log('The response is: ' + response);
    //     });
    //     setIsLoggedIn(true);
    //     setIsLoading(false);
    //     setShowPassword(false);
    //   } catch (error) {
    //       console.log(error)
    //       console.log('brokey')
    //     setError('Invalid username or password');
    //     setIsLoading(false);
    //     setUserId('');
    //     setPassword('');
    //     setShowPassword(false);
    //   }
    // };
  
    const [userId, setUserId] = useState();
    const [password, setPassword] = useState();
  
    const handleSubmit = async e => {
      e.preventDefault();
      setIsLoading(true);

      try {
        const token = await loginUser({
            userId,
          password
        });
        // if (!setToken){
        //   const { token, setToken } = useToken();
        // }
        setToken(token);
        setIsLoggedIn(true);
        setIsLoading(false);
        setShowPassword(false);
      } catch (error) {
        console.log(error)
        console.log('brokey')
        setError('Invalid username or password');
        setIsLoading(false);
        setUserId('');
        setPassword('');
        setShowPassword(false);
      }
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
          {isLoggedIn ? (
            <Box textAlign="center">
              <Text>{userId} logged in!</Text>
              <Button
                variantColor="orange"
                variant="outline"
                width="full"
                mt={4}
                onClick={() => setIsLoggedIn(false)}
              >
                Sign out
              </Button>
            </Box>
          ) : (
            <div>
              <Box textAlign="center">
                <Heading>Login</Heading>
              </Box>
              <Box my={4} textAlign="left">
                <form onSubmit={handleSubmit}>
                  {error && <ErrorMessage message={error} />}
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
                      'Sign In'
                    )}
                  </Button>
                </form>
              </Box>
            </div>
          )}
        </Box>
      </Flex>
    );
  }

  LoginPage.propTypes = {
    setToken: PropTypes.func.isRequired
  }

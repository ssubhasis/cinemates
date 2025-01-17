import React from "react";
import { Link as CUILink, Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
import Logo from '../Components/Logo'; 
import {Link} from'react-router-dom'; 
import {
  Menu as MenuCUI,
  MenuButton as MenuButtonCUI,
  MenuList as MenuListCUI,
  MenuItem as MenuItemCUI,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon as MenuIconCUI,
  MenuCommand,
  MenuDivider,
  ChevronDownIcon
} from "@chakra-ui/react"

import useToken from '../Components/App/useToken';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo
        w="100px"
        color={["white", "white", "white", "white"]}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="primary.500"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="primary.500"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <CUILink href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </CUILink>
  );
};

//add rerender here 
const MenuLinks = ({ isOpen }) => {
  const { token, setToken } = useToken();
  let enableLoging;
  let enableSignUp;
  if(!token) {
    enableLoging = <MenuItem><Link to= "/login">Login</Link></MenuItem>;
    enableSignUp = <MenuItem><Link to= "/signup">SignUp</Link></MenuItem>;
  }else{
    enableLoging = <MenuItem><Link to= "/logout">Logout</Link></MenuItem>
  }

  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >


        <MenuItem >
        <Link to ="/">
        Home
        </Link>
        </MenuItem>

       
        <MenuItem >
        <Link to= "/search"> 
        Advanced Search 
        </Link>
        </MenuItem>
       

        
        <MenuItem >
        <Link to= "/topcharts"> 
        Top Charts
        </Link>
         </MenuItem>
     
     
        {/* <MenuItem>
        <Link to= "/login"> 
        Login
        </Link> 
        </MenuItem>

        <MenuItem>
        <Link to= "/logout"> 
        Logout
        </Link> 
        </MenuItem> */}
        {enableLoging}
        {enableSignUp}

        
        <MenuItem  isLast>
          
        <Link to= "/myhub"> 
          <Button
            size="sm"
            rounded="md"
            color={["white", "white", "white", "white"]}
            bg={["primary.500","primary.500", "primary.500", "primary.500"]}
            _hover={{
              bg: ["primary.500", "primary.500", "primary.500", "primary.500"]
            }}
          >
            My Hub
          </Button>
          </Link>
         
        
        </MenuItem>
       
   
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
< Flex

      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={2}
      p={4}
      bg={["white", "white", "transparent", "transparent"]}
      color={["primary.500", "primary.500", "primary.500", "primary.500"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;

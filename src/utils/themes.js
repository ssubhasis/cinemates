import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#10192E",
   
    200: "#FCA311",
    300: "#10DE82",
    400: "#0EBE6F",
    500: "#14213D",
    
    800: "#075C37",
    900: "#064C2E"
  }
};

const customTheme = extendTheme({ colors });

export default customTheme;
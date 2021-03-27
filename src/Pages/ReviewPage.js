import React from 'react';
import {
    Button, 
    Input,
    Wrap,
    Text,
    Flex,
    WrapItem,
    Textarea,
    Center
} from "@chakra-ui/react"
import {StarIcon} from "@chakra-ui/icons"
import RatingStars from "../Components/RatingStars"



export default function ReviewPage() {

    return (
        <div>
            
        

               <Wrap gridTemplateColumns="auto 1fr" backgroundColor="primary.100" height="55vw">
                 
                   <Flex direction="column">

                       <Text fontSize="4xl" color="white ">Name of the movie </Text>

                       <RatingStars></RatingStars>
                      
                       <Textarea  backgroundColor="white" height="30vw" width="80vw"  padding="20px" margin="30px" placeholder="Here is a sample placeholder" ></Textarea>
                    
                       <Button  margin="20px" backgroundColor="orange.500">Add Review</Button>
                   </Flex>
                
               </Wrap>
                
         
        </div>
    );
}


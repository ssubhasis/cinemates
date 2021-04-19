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
} from "@chakra-ui/react";
import {StarIcon} from "@chakra-ui/icons";
import RatingStars from "../Components/RatingStars";
import AddReview from "../Components/AddReview";
import { useParams } from "react-router";



export default function ReviewPage() {

    let { id } = useParams();

    console.log(id);

    let [value, setValue] = React.useState("")

    let handleInputChange = (e) => {
      let inputValue = e.target.value
      setValue(inputValue)
    }

    return (
        <div>
            
        

               <Wrap gridTemplateColumns="auto 1fr" backgroundColor="primary.100" height="55vw">
                 
                   <Flex direction="column">

                       <Text fontSize="4xl" color="white ">Name of the movie </Text>

                       <RatingStars></RatingStars>
                      
                       <Textarea  backgroundColor="white" height="30vw" width="80vw"  padding="20px" margin="30px"
                            value={value}
                            onChange={handleInputChange}
                            placeholder="Here is a sample placeholder" ></Textarea>
                    {console.log(value)}
                       <Button  margin="20px" backgroundColor="orange.500" 
                       onClick={() => { AddReview(id,value) } } >
                           Add Review</Button>
                   </Flex>
                
               </Wrap>
                
         
        </div>
    );
}


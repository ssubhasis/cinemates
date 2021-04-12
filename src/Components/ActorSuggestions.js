import React from 'react'
import {
    Grid,
    GridItem,
    Input,
    Stack,
    Center,
    Text,
    Flex, Avatar
} from "@chakra-ui/react"

const ActorSuggestions = (props) => {
   
    const optionsactor = props.results.map(r => (
        
      <option  key ={r._id} id={r._id}  value={r._name}/>
  
     ))
    return <datalist id="actors"><Text color="pink" >{optionsactor}</Text></datalist>

}

export default ActorSuggestions 
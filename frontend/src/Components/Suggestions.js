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


// const Suggestions = (props) => {
//   const options = props.results.map(r => (
//     <li key={r.titleId}>
//       {r.primaryTitle}
//     </li>
//   ))
//   return <ul><Text color="white" >{options}</Text></ul>

  const Suggestions = (props) => {
    const options = props.results.map(r => (
      <option id={r.titleId}  value={r.primaryTitle}/>
     ))
    return <datalist id="browsers"><Text color="white" >{options}</Text></datalist>

}

export default Suggestions

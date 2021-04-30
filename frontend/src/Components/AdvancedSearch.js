import React, { Component, useState } from 'react'
import {Button, ButtonGroup, Input, Grid, GridItem, Box,Stack, SimpleGrid,  Radio, RadioGroup} from "@chakra-ui/react"





const API_URL = 'https://teampolaris.web.illinois.edu/search-movies'

export default function  AdvancedSearch (props) {


 

  const handleInputChange = (searchInput) => {
    console.log(searchInput)
    props.onSearchChange(searchInput.target.value)
  }

  


    
    return (


      <form >
        
        <Input 
            style={
                {
                    marginTop: "20px",
                    width: "75%",
                    height:"50px",
                    borderRadius: "40px",
                    marginRight:"20px",
                    marginBottom:"20px"
                }
            }
            focusBorderColor="orange.400"
            size="lg"
            bg="white"
            placeholder="Search"
            onChange={handleInputChange}
        />

      
    
      </form>
   
     
    )

  }



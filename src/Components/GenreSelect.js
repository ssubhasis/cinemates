import React, { Component } from 'react';
import {
    Grid,
    GridItem,
    Input,
    Stack,
    Center,
    Text,
    Wrap,
    WrapItem,
    Radio,
    RadioGroup
} from "@chakra-ui/react"



 export default function   GenreSelect(props)  {


        const handleGenreChange = (genre) => {
            console.log(genre)
            props.onSelectGenre(genre);           
        }

    return (
        <div> 
            <Grid bg="orange.500" borderRadius="lg" padding="10px" margin="10px" >
                <GridItem overflowY="scroll" maxHeight="40vh">
                <h2>Genre</h2>
                <RadioGroup onChange={handleGenreChange}>
                        <Stack direction="column" >
                        <Radio value="Drama">Drama</Radio>
                        <Radio value="Action">Action</Radio>
                        <Radio value="Crime">Crime</Radio>
                        <Radio value="Comedy">Comedy</Radio>
                        <Radio value="Musical">Musical</Radio>
                        <Radio value="Fantasy">Fantasy</Radio>
                        <Radio value="Romance">Romance</Radio>
                        <Radio value="Adventure">Adventure</Radio>
                        <Radio value="Documentary">Documentary</Radio>
                        <Radio value="Horror">Horror</Radio>
                        <Radio value="Sci-Fi">Sci-Fi</Radio>
                        <Radio value="Mystery">Mystery</Radio>
                        <Radio value="Thriller">Thriller</Radio>
                        <Radio value="Biography">Biography</Radio>
                        <Radio value="Music">Music</Radio>
                        <Radio value="Animation">Animation</Radio>
                        <Radio value="Family">Family</Radio>
                        <Radio value="War">War</Radio>
                        <Radio value="History">History</Radio>
                        <Radio value="Adult">Adult</Radio>
                        <Radio value="Sport">Sport</Radio>
                        <Radio value="Western">Western  </Radio>                     
                        </Stack>
                </RadioGroup>
                </GridItem>
                </Grid>
        </div>
       
    );
}


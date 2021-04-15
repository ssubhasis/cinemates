import React, { Component } from 'react'
import {Button, ButtonGroup, Input, Grid, Box, SimpleGrid,Text} from "@chakra-ui/react"
import axios from 'axios'; 
import { withRouter } from 'react-router-dom';
import Search from '../Components/Search';
import SearchActor from '../Components/SearchActor';  



class SearchBarRender extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          isMovieselected: true 
        };
      }

  


   handleClick(e) {
        e.preventDefault();
        console.log('The movie was clicked.');
        this.state.isMovieselected = true; 
        console.log(this.state.isMovieselected )
        this.forceUpdate();
      }

    handleClickActor(e) {
        e.preventDefault();
        console.log('The actor was clicked.');
        this.state.isMovieselected = false; 
        console.log(this.state.isMovieselected)
        this.forceUpdate();
      }


  render() {

    let {isMovieselected} = this.state;

    const renderSearchByButton = () => {
      if (isMovieselected) {
        return <Search/>;
      } else {
        return <SearchActor/> ;
      }
    }



    return (

        <div>

            <Text style={{color: "white", textAlign:"left"}}>Search By</Text>
            <Button onClick = {this.handleClick.bind(this)} bgColor="primary.200" variant="solid" size="lg" marginRight="2%"> 
                Movie
            </Button>

            <Button onClick = {this.handleClickActor.bind(this)} bgColor="primary.200" variant="solid" size="lg" >  
                Actor
            </Button>

        
        {renderSearchByButton()}
      </div>
   
     
    )

  }
}

export default SearchBarRender
import React, { Component } from 'react'
import {Button, ButtonGroup, Input, Grid, Box, SimpleGrid} from "@chakra-ui/react"
import axios from 'axios'; 
import ActorSuggestions from '../Components/ActorSuggestions'; 
import { withRouter } from 'react-router-dom';


// const { API_KEY } = process.env
const API_URL = 'http://teampolaris.web.illinois.edu/search-actors'

class SearchActor extends Component {
  state = {
    query: '',
    results: [],
    queryAId: ''
  }

  getActorInfo = () => {
    axios.get(`${API_URL}/${this.state.query}`)
      .then(({ data }) => {
        this.setState({
          results: data
        })
      
      })
     
  }

  handleActorInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getActorInfo()
        }
      } else if (!this.state.query) {
      }
    })
   
  }

  onActorSubmitHandler = (e) => {
    e.preventDefault();
    this.state.results.map(r => {
        if (r._name == this.state.query){
          this.state.queryAId= r._id
          
      };
    });
    console.log(this.state.queryAId); 
   window.location.href = "/#/actor/"+this.state.queryAId;
  }


  render() {
    return (

      <form onSubmit={this.onActorSubmitHandler}>
        
        <Input list="actors" name="actorname" id="actorname" autocomplete="off"
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
            placeholder="Search by actor"
            ref={input => this.search = input}
            onChange={this.handleActorInputChange}
        />

        <ActorSuggestions results={this.state.results} />
       
        <Button bgColor="primary.200" variant="solid" type="submit" onClick={this.onActorSubmitHandler}>Go</Button>
       
    
      </form>
   
     
    )

  }
}

export default SearchActor
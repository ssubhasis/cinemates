import React, {Component} from 'react';
import './App.css';
import Homepage from './Pages/Homepage';
import Header from "./Components/Header";
import TopChartsPage from './Pages/TopChartsPage';
import ReviewPage from './Pages/ReviewPage';
import SearchPage from './Pages/SearchPage'; 
import MyHubPage from './Pages/MyHubPage'; 
import ActorPage from './Pages/ActorPage'; 
import MoviePage from './Pages/MoviePage'; 
import {HashRouter as Router, Switch, Route } from 'react-router-dom'; 


class App extends Component {
    

    render() {
        return (
          <Router>
            <div className="App">

                <Header></Header>


                <Switch>

                    <Route path="/" exact
                        component={Homepage}/>
                    <Route path="/search"
                        component={SearchPage}/>
                    <Route path="/topcharts"
                        component={TopChartsPage}/>
                    <Route path="/review"
                        component={ReviewPage}/>
                    <Route path="/myhub"
                        component={MyHubPage}/>
                    <Route path="/actor"
                        component={ActorPage}/>
                    <Route path="/movie"
                        component={MoviePage}/>

                </Switch>


            </div>
            </Router>
        );
    }
}

export default App;


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
import Settings from './Pages/Settings'; 
import LoginPage from './Pages/LoginPage'; 
import SignInPage from './Pages/SignInPage'; 
import Login from './Components/Login/Login';
import {HashRouter as Router, Switch, Route } from 'react-router-dom'; 
import SignOutPage from './Pages/SignOutPage';
import SignUpPage from './Pages/SignUpPage';

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
                    <Route path="/review/:id"
                        component={ReviewPage}/>
                    <Route path="/myhub"
                        component={MyHubPage}/>
                    <Route path="/actor/:id"
                        component={ActorPage}/>
                    <Route path="/movie/:id"
                        component={MoviePage}/>
                         <Route path="/moviee"
                        component={MoviePage}/>
                    <Route path="/setting"
                        component={Settings}/>
                    <Route path ="/login"
                        component={SignInPage}/>
                        {/* component={Login}/> */}
                        {/* component={LoginPage}/> */}
                    <Route path="/logout"
                        component={SignOutPage}/>
                    <Route path="/signup"
                        component={SignUpPage}/>

                </Switch>


            </div>
            </Router>
        );
    }
}

export default App;


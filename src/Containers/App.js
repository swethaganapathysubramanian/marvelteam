import React, {Component} from 'react';
import CardList from '../Components/CardList';
import { teams } from '../Components/teams';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary'
import './App.css';

class App extends Component{
    constructor(){
        super()
        this.state = {
            teams: teams,
            searchfield: '',
        }
    }
    
    onSearchChange = (event) =>{
        //console.log(event)
        this.setState({searchfield: event.target.value});
    }
    render(){
        const filteredteam = this.state.teams.filter(teams=>{
            return teams.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(this.state.teams.length === 0){
           return <h1> Loading </h1>
        }
        else{
        return (
            <div>
                <h1 className= "f1"> MarvelTeam </h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                <ErrorBoundary>
                <CardList teams={filteredteam} />
                </ErrorBoundary>
                </Scroll>
            </div>
        );
        }
    }

    
}

export default App;

import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import RestaurantList from './RestaurantList';
class App extends React.Component{
  state={term:'', restaurants:[]}
   onSearchSubmit=async term=>{
    const response = await axios.get('http://opentable.herokuapp.com/api/restaurants?',{
      params:{city:term},
    });
    console.log(response.data.restaurants)
    this.setState({term:term,restaurants:response.data.restaurants})
  }
  render(){
    return(
      <div>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <label>city:{this.state.term}</label>
        <RestaurantList restaurants={this.state.restaurants}/>

      </div>
    )
  }
}
export default App;

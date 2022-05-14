import React, { Component } from 'react';
import CardList from './component/Card-List';
import './App.css';
import SearchBox from './component/SearchBox';
class App extends Component {
 constructor(){
  super();
  this.state={
    monsters: [
    ],
    searchField:''

  }
 };

 componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users').then(Response => Response.json()).then(users=> this.setState({monsters: users}));

 }

render(){
  const { monsters, searchField } = this.state;
  const filterMonsters = monsters.filter(monster=> monster.name.toLowerCase().includes(searchField.toLowerCase()))

  return (
    <div className="App">
    
       
      <h1 id='title'>Monsters Rolodex</h1>
      
      <SearchBox placeholder='Search Monsters' handleChange={e=>this.setState({searchField: e.target.value})}/>
        <CardList monsters={filterMonsters}/>
  
    </div>
  );
}
}

export default App;

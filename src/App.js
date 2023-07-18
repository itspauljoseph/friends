import React, { useState, useEffect } from 'react';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

function App() {
  const [robots, setRobots] = useState([])
  const [searchfield, setSearchfield] = useState('')

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {setRobots( users )});
  }, [])
  
  const onSearchChange = (event) => {
    setSearchfield( event.target.value )
  }


    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    return !robots.length ?
      <h1>Loading...</h1> :
      (
        <div className='tc'>
          <h1 className="f1">Robot Friends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
          <CardList robots={filterRobots} />
          </Scroll>
        </div>
      );
  }

  export default App;
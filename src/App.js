
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import SearchBar from './components/SearchBar';
import Cards from './components/CardList';
import Covid from './api/covid';
import NavBar from './components/NavBar';
import { useState } from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Forms from './components/Forms';


<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>

function App() {

const [state, setState] = useState({
  results : []
});

const onSearch = async(text) =>{
  const results = await Covid.get("/",{params: {name: text, date: '2020-04-01'}})
    
  

  setState(prevState => {
    return {...prevState, results:results}
  })
}


  return (
    
    <div className="App">
    
   <NavBar/>
    
     

    
<div class="five">
  <h1>Live Covid19 Data
    <span>Latest Covid19 data on the web!</span>
  </h1>
</div>
<SearchBar onSearch={onSearch}/>

<Cards results = {state.results}/>



    </div>
    
    
  );
  
}

export default App;

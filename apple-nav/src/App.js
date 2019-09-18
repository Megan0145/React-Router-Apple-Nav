import React from 'react';
import Navigation from './components/Navigation'
import './App.css';
import navLinksData from './navData';
import { Route } from 'react-router-dom';
import  Mac  from './components/Mac.js';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Route exact path='/' />
      {navLinksData.map(link => {
        return <Route path={"/" + link.title} component={Mac}/>;
      })}
    </div>
  );
}

export default App;

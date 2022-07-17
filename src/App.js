import './App.css';
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Header from './components/Header.js';
import Main from './components/Main.js';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Main />
      </div>
    </Router>
  );
};

export default App;

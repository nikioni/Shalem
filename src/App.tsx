import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/"> element={}</Route>
        <Route path="/test"></Route>
      </Router>
    </div>
  );
}

export default App;

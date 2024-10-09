import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Last from './components/Last.js';
import Profile from './components/Profile.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Last />
    </div>
  );
}

export default App;

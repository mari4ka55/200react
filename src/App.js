import React from 'react';
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
      
      <Weather defaultCity="Kyiv" />
      <footer> This project was coded by {" "} 
      <a href="https://www.facebook.com/profile.php?id=100001676673228" target="_blank" rel="noopener noreferrer">
        Lobur Mariia
      </a>{" "}
      and is {" "}
      <a href="https://github.com/mari4ka55/200react" target="_blank" rel="noopener noreferrer">
        Open Sourced on Github</a>
      </footer>
    </div>
    </div>
  );
}

export default App;

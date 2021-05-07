
import './App.css';
import BabyNames from "./Components/BabyNames";
import babyName from "./data/babyNamesData.json";
import React from "react";

function App() {
  return (
    <div className="App">
  
      <div className="mainWrapper">
         <BabyNames  babyNames={babyName} />     
      </div>  
    </div>
  );
}

export default App;

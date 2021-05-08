
import './App.css';
import BabyNames from "./Components/BabyNames";
import ChosenNames from "./Components/ChosenNames";
import babyName from "./data/babyNamesData.json";
import SearchBar from "./Components/SearchBar";
import React,{useState} from "react";

function App() {
const [pickedName, setPickedName] = useState([]);
const [searchBabies, setSearchBabies] = useState('');
  return (
    <div className="App">
       <div className="mainWrapper">
           <SearchBar searchBabies={searchBabies} setSearchBabies={setSearchBabies} />
           <ChosenNames babyNames={babyName} pickedName={pickedName} setPickedName={setPickedName} /> 
           <BabyNames  babyNames={babyName} searchBabies={searchBabies} pickedName={pickedName} setPickedName={setPickedName}/>    
       </div>  
    </div>
  );
}

export default App;


import './App.css';
import BabyNames from "./Components/BabyNames";
import ChosenNames from "./Components/ChosenNames";
import babyName from "./data/babyNamesData.json";
import SearchBar from "./Components/SearchBar";
import GenderButton from "./Components/GenderButton";
import FilterGender from "./Components/FilterGender";
import Icones from "./Components/Icons"
import React,{useState} from "react";


function App() {
const [pickedName, setPickedName] = useState([]);
const [searchBabies, setSearchBabies] = useState('');
const [Names, setNames] = useState(babyName);

  return (
    <div className="App">
       <div className="mainWrapper">
       
           <SearchBar searchBabies={searchBabies} setSearchBabies={setSearchBabies} />
          <GenderButton   babyNames ={babyName} getGender={() => setNames(FilterGender.boy(babyName))}  IconeSource={Icones.male}/>
           <GenderButton  babyNames ={babyName} getGender={() => setNames(FilterGender.girl(babyName)) } IconeSource={Icones.female}/>
                     <GenderButton  babyNames ={babyName} getGender={() => setNames(FilterGender.showAll(babyName)) } IconeSource={Icones.showall}/>
           <ChosenNames babyNames={Names} pickedName={pickedName} setPickedName={setPickedName} /> 
           <BabyNames  babyNames={Names} searchBabies={searchBabies} pickedName={pickedName} setPickedName={setPickedName}/>    
       </div>  
    </div>
  );
}

export default App;


import './App.css';
import BabyNames from "./BabyNames";
import babyName from "./babyNamesData.json";

function App() {
  return (
    <div className="App">
      <BabyNames  names={babyName}/>
    </div>
  );
}

export default App;

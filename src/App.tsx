import React, {useState} from 'react';
import './App.css';
import PoeService from "./services/PoeService";

function App() {
  const [info,setInfo] = useState();

  const getInfo = async() => {
    const res = await PoeService.getInfo()
  }




  return (
    <div className="App">
      <button onClick={getInfo}>Get info</button>
    </div>
  );
}

export default App;

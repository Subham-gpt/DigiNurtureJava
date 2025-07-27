import React from 'react';
import './App.css';
import { CalculateScore } from './Components/CalculateScore'; 

function App() {
  return (
    <div className="App">
      <CalculateScore
        Name={"Subham Meher"}
        School={"ITER, SOA University"}
        total={486}
        goal={5}
      />
    </div>
  );
}

export default App;

import './App.css';
import React, { useState } from 'react';
import Cajas from './Components/Cajas';
import Vistacajas from './Views/Vistacajas';
function App() {

  const [cajas, setCajas] = useState([]);

  return (
    <div className="App">
      
      <Cajas cajas={cajas} setCajas={setCajas} />
      <Vistacajas data={cajas}/>
      
    </div>
  );
}

export default App;

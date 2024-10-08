// src/App.js
import React from 'react';
import './App.css';
import Login from './components/login';  // Importa el componente Login

function App() {
  return (
    <div className="App">
      <Login />  {/* Renderiza el componente Login */}
    </div>
  );
}

export default App;

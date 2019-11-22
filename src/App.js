import React, {useState, useEffect} from "react";
import "./App.css";
import NasaList from "./components/NasaList";

function App() {
  return (
    <div className="App">
      <header><h1>NASA PHOTO OF THE DAY</h1></header>
      <NasaList/>
    </div>
  );
}

export default App;


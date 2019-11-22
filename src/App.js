import React, {useState, useEffect} from "react";
import "./App.css";
import NasaList from "./components/NasaList";
import {Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';


function App() {
  return (
    <div className="App" style ={{"backgroundColor": "black"}} >
      <header><h1>NASA PHOTO OF THE DAY</h1></header>
      <NasaList/>
      <Button color="danger">Danger</Button>
    </div>
    
  );
}

export default App;


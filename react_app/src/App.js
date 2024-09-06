import logo from './logo.svg';
import './App.css';
import Card2 from './Components/Card2';
import { useState } from "react";
import AngelImage from "./Images/Angel.jpeg";
import BgirlImage from "./Images/Mari.JPG";





export default function App() {
let[ like, setLike ] = useState(0);

function Yes(){
  return setLike((like += 1));
}

  return (
    <div className="App">
      {like}
      <button onClick={Yes}>Like</button>
      <Card2 Name="Mari" Work="Dance Instructor" imageUrl={AngelImage}/>
      <Card2 Name="Angel" Work="Break dancer" imageUrl={BgirlImage}/>
      <Card2 Name="Angel" Work="Dance Instructor" imageUrl={AngelImage}/>
      <Card2 Name="Angel" Work="Dance Instructor"/>
    </div>
  );
}


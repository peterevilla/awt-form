import React, { useState} from "react";
import Form from './components/Form'
import logo from './images/Logo.svg'


function App() {
  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return (
  <div className="p-8">
    <img src={logo}></img>
    <h1 className=" text-3xl pt-8">
      New Part Number Request
    </h1>
    <Form/>
  </div>
  );
}

export default App;

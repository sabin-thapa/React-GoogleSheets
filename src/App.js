import React, {useState} from 'react';
import './App.css';
import axios from "axios";

//Connection URL from SHEET.BEST
const url = "https://sheet.best/api/sheets/d29daf19-df03-4be1-963d-5e2c02f74ba9";

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [contact, setContact] = useState("")


  const submitHandler = e => {
    e.preventDefault();
    console.log(name);
    axios.post(url, {name, email, contact}).then(res => {
      console.log(res);
    })
  }
  return (
    <div className="container">
        <h1> React Integration with Google Sheets</h1>
        <form className="form" onSubmit = {submitHandler}>
          <div className = "labelField">
          <label className = "label"> 
            Full Name: <input type = "text" name = "name" value = {name} onChange = {(e) => setName(e.target.value)}/>
          </label>
          </div>
          <div className = "labelField">
            <label> 
              Email: <input type ="email" name = "email" value={email} onChange = {(txt) => setEmail(txt.target.value)}/> 
              </label>
          </div>
          <div className = "labelField">
            <label> 
            Contact: <input type ="text" name = "contact"  value = {contact} onChange = {(txt) => setContact(txt.target.value)}/> 
            </label>
          </div>
            <input type="submit" value = "Submit" className="submit"/>
        </form>
    </div>
  );
}

export default App;

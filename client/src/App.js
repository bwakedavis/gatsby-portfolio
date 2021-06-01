import { useState } from 'react';
import Axios from 'axios';
import './App.css';


function App() {
  const [name, setName] = useState("");
  const [age, setAge ]= useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const addEmployee = () => {
    Axios.post('http://localhost:5000/create', {
      name: name,
      age: age,
      country: country,
      position:position,
      wage: wage
    })
    .then((response)=>{
      console.log(response);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div className="App">
      <div className="information">
      <label htmlFor="name">Name</label>
      <input type="text" onChange = {(e) =>{
        setName(e.target.value)
      }} />
      <label htmlFor="age">Age</label>
      <input type="number" onChange = {e =>{
        setAge(e.target.value)
      }} />
      <label htmlFor="country">Country</label>
      <input type="text" onChange = {e =>{
        setCountry(e.target.value)
      }}/>
      <label htmlFor="position">Position</label>
      <input type="text" onChange = {e =>{
        setPosition(e.target.value)
      }}/>
      <label htmlFor="wage">Wage</label>
      <input type="number" onChange = {e =>{
        setWage(e.target.value)
      }} />
      <button onClick={addEmployee}>Add Employee</button>
      </div>
    </div>
  );
}

export default App;

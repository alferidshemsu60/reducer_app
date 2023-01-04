
import { useDispatch, useSelector } from 'react-redux';
import { firstname,lastname,gender,age,profesion } from './store/action';
import './App.css';
import { useState } from 'react';
//import About from './About'
//import { combineReducers } from 'redux';

function App() {
  const Fname=useSelector(state=>state.FIRSTNAME)
  const Lname=useSelector(state=>state.LASTNAME)
  const AGe=useSelector(state=>state.AGE)
  const GenDer=useSelector(state=>state.GENDER)
 
  const PRofesion=useSelector(state=>state.PROFESION)

  const dispatch = useDispatch()

  const [fname,setfirstname] = useState()
  const [lname,setlastname] = useState()
  const [Age,setage] = useState()
  const [Gender,setgender] = useState()
  const [Profesion,setprofesion] = useState()
  
  return (
    <div className="App"><div className='container'>
        <h1>Function of combineReducers</h1>
        <div className='input-button'>
      <input placeholder='Enter First Name' value={fname} onChange={(e)=>setfirstname(e.target.value)}/>
        <button className='button' onClick={()=>dispatch(firstname(fname))}> Add </button><br/><br/>

        <input placeholder='Enter Last Name' value={lname} onChange={(e)=>setlastname(e.target.value)}/>
        <button className='button' onClick={()=>dispatch(lastname(lname))}> Add </button><br/><br/>

        <input placeholder='Enter Age' value={Age} onChange={(e)=>setage(e.target.value)}/>
        <button className='button' onClick={()=>dispatch(age(Age))}> Add </button><br/><br/>
       

        <input placeholder='Enter Gender'value={Gender} onChange={(e)=>setgender(e.target.value)}/>
        <button className='button' onClick={()=>dispatch(gender(Gender))}> Add </button><br/><br/>
        
        
        <input placeholder='Enter Profession' value={Profesion} onChange={(e)=>setprofesion(e.target.value)}/>
        <button className='button' onClick={()=>dispatch(profesion(Profesion))}> Add </button><br/>
        </div>
      
      <div><h3>My First Name is :  {Fname}</h3>
           <h3>My Last Name is :   {Lname}</h3>
           <h3>My Age is :    {AGe}</h3>
           <h3>My Gender is :   { GenDer}</h3>
           <h3>My Profession is :  {PRofesion}</h3>
      </div>
      </div>
    </div>
  );
}

export default App;

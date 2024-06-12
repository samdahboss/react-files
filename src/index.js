import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import EmployeePage from './components/employee';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import ManageEmployee from './components/manageEmployee';
import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Index/>
);
function Index(){
  const [employeeData, setEmployeeData] =useState([
    {
        id:"1",
        name: "Edidiong",
        career: "UI/UX designer",
        team: "Team A",
        gender: "Female",
    },
    {
        id:"2",
        name: "Samuel",
        career: "Frontend Eng.",
        team: "Team D",
        gender: "Male",
    },
    {
        id:"3",
        name: "Sola",
        career: "Web Developer",
        team: "Team B",
        gender: "Male",
    },
    {
        id:"4",
        name: "Ebunoluwa",
        career: "Project Manager",
        team: "Team B",
        gender: "Female",
    },
    {
        id:"5",
        name: "Simi",
        career: "Product Manager",
        team: "Team A",
        gender: "Female",
    },
    {
        id:"6",
        name: "Raphael",
        career: "Backend Dev.",
        team: "Team D",
        gender: "Male",
    },
    {
        id:"7",
        name: "Daniel",
        career: "Data Scientist",
        team: "Team C",
        gender: "Male",
    },
    {
        id:"8",
        name: "Oore",
        career: "UI/UX designer",
        team: "Team A",
        gender: "Male",
    },
    {
        id:"9",
        name: "John",
        career: "Product Manager",
        team: "Team C",
        gender: "Male",
    },
    {
        id:"10",
        name: "James",
        career: "Backend Engineer",
        team: "Team B",
        gender: "Male",
    },
    {
        id:"11",
        name: "Suad",
        career: "Intern",
        team: "Team B",
        gender: "Female",
    },
  ])
  function addEmployee(newEmployee) {
    setEmployeeData([...employeeData, newEmployee]);
  }
  function removeEmployee(employeeId) {
      setEmployeeData(employeeData.filter((item)=>{
        if(item.id !== employeeId){
          return true;
        }
        else{
          return false;
        }
      }))
  }
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/employee' element={<EmployeePage employeeData={employeeData} removeEmployee={removeEmployee}/>}/>
        <Route path='/manageEmployee' element={<ManageEmployee employeeData={employeeData} addEmployee={addEmployee}/>}/>
      </Routes>
    </Router>
  );
}

export default Index;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

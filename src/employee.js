import { Link } from 'react-router-dom';
import React, { useState } from "react"

import "./employee.css"
import "./bootstrap/css/bootstrap.css"

import maleImage from './img/male.png'
import femaleImage from './img/female.png'

function Employee(){
    function changeTeam(event){
        setSelectedTeam(event.target.value);
    }
    const [selectedTeam, setSelectedTeam]=useState("Team C")
    const [employeeData, setEmployeeData] = useState([
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
            id:"5",
            name: "Raphael",
            career: "Backend Dev.",
            team: "Team D",
            gender: "Male",
        },
        {
            id:"6",
            name: "Daniel",
            career: "Data Scientist",
            team: "Team C",
            gender: "Male",
        },
        {
            id:"7",
            name: "Oore",
            career: "UI/UX designer",
            team: "Team A",
            gender: "Male",
        },
        {
            id:"8",
            name: "John",
            career: "Product Manager",
            team: "Team C",
            gender: "Male",
        },
        {
            id:"9",
            name: "James",
            career: "Backend Engineer",
            team: "Team B",
            gender: "Male",
        },
        {
            id:"10",
            name: "Suad",
            career: "Intern",
            team: "Team B",
            gender: "Female",
        },

])
    return(
        <main className="container">
            <h1 className="text-center">Team Tracking Application</h1>
            <div id="filter" >
                <select className="btn" value={selectedTeam} onChange={changeTeam}>
                    <option>Team A</option>
                    <option>Team B</option>
                    <option>Team C</option>
                    <option>Team D</option>
                </select>
            </div>
            <Link className="link" to="/">Back to Home Page</Link>
            <div id="container">
                {employeeData
                .filter(data=> data.team === selectedTeam)
                .map ((data)=>{
                    return(
                        <div key={data.id} id="employee" className="col-md-12">
                            <img src={data.gender === "Male"?maleImage:femaleImage} alt="" width="100%" height="250px"></img>
                            <h1>{data.name}</h1>
                            <h3>{data.career}</h3>
                            <p>{data.team}</p>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}

export default Employee;
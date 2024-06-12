import { Link } from 'react-router-dom';
import React, { useState } from "react";
import "../css/employee.css";
import "../bootstrap/css/bootstrap.css";
import maleImage from '../img/male.png';
import femaleImage from '../img/female.png';

function Employee({employeeData,removeEmployee}) {
    const [selectedTeam, setSelectedTeam] = useState("Team C");
    
    const changeTeam = (event) => {
        setSelectedTeam(event.target.value);
    };
    const handleClick = (employeeId) => {
        removeEmployee(employeeId)
    }
    return (
        <main className="container">
            <h1 className="text-center text-white">Team Tracking Application</h1>
            <div className='d-flex justify-content-sm-between' id='nav-content'>
                <div id="filter" className='w-50'>
                    <select className="btn" value={selectedTeam} onChange={changeTeam}>
                        <option>Team A</option>
                        <option>Team B</option>
                        <option>Team C</option>
                        <option>Team D</option>
                    </select>
                </div>
                <button className="btn btn-dark mx-auto ">
                    <Link className="text-decoration-none" to="/">Back to Home Page</Link>
                </button>
            </div>
            <div id="container">
                {employeeData
                    .filter(data => data.team === selectedTeam)
                    .map(data => (
                        <div key={data.id} id="employee" className="col-md-12">
                            <button className='btn-danger deleteBtn' onClick={()=>handleClick(data.id)}>x</button>
                            <img src={data.gender === "Male" ? maleImage : femaleImage} alt="" width="100%" height="250px" />
                            <h1>{data.name}</h1>
                            <h3>{data.career}</h3>
                            <p>{data.team}</p>
                        </div>
                    ))}
            </div>
        </main>
    );
}

export default Employee;

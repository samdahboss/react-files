import React, { useState } from "react";
import "../bootstrap/css/bootstrap.css";
import "../css/manageEmployeePage.css";
import { Link } from "react-router-dom";
import pic2 from "../img/pic2.jpg";

const ManageEmployee = ({ addEmployee }) => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [gender, setGender] = useState("");
  const [career, setCareer] = useState("");
  const [team, setTeam] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEmployee = {
      id,
      name,
      career,
      team,
      gender,
    };
    addEmployee(newEmployee);
    // Reset form
    setName("");
    setId("");
    setGender("");
    setCareer("");
    setTeam("");
  };

  return (
    <>
      <div className="container header">
        <button className="btn btn-success d-block mx-left bg-white">
          <Link className="link text-dark text-decoration-none" to="/">
            Back to Home Page
          </Link>
        </button>
        <h1 className="fs-1 text-center text-white">
          WELCOME TO THE EMPLOYEE MANAGEMENT SYSTEM
        </h1>
      </div>
      <div className="container form d-flex">
        <img src={pic2} alt="form-img" className="w-50" />
        <form id="form" className="my-0" onSubmit={handleSubmit}>
          <label htmlFor="name">NAME:</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Employee Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="id">ID:</label>
          <input
            type="number"
            id="id"
            name="id"
            placeholder="Employee Id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />

          <div>
            <label htmlFor="choice1" className="radio-label">
              <input
                id="choice1"
                type="radio"
                name="gender"
                value="Male"
                checked={gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
                required
              />
              MALE
            </label>
            <label htmlFor="choice2" className="radio-label">
              <input
                id="choice2"
                type="radio"
                name="gender"
                value="Female"
                checked={gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
                required
              />
              FEMALE
            </label>
          </div>

          <label htmlFor="career">ROLE:</label>
          <input
            type="text"
            id="career"
            placeholder="Role"
            value={career}
            onChange={(e) => setCareer(e.target.value)}
          />

          <label htmlFor="team">Select your team</label>
          <select
            id="team"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
          >
            <option>Select Team</option>
            <option>Team A</option>
            <option>Team B</option>
            <option>Team C</option>
            <option>Team D</option>
          </select>
          <input type="submit" value="ADD EMPLOYEE" />
        </form>
      </div>
    </>
  );
};

export default ManageEmployee;

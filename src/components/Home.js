import React from 'react';
import {  Link } from 'react-router-dom';

import "../bootstrap/css/bootstrap.css";
import "../css/Home.css";

function Home() {
  return (
      <div className="container header p-4">
        <div className="justify-content-sm-between d-flex">
          <button className="btn btn-light">
            <Link className="text-decoration-none text-dark" to="/Employee">To Employee Page</Link>
          </button>
          <button className="btn btn-light">
            <Link className="text-decoration-none text-dark" to="/manageEmployee">To Manage Employee Page</Link>
          </button>
        </div>
        <h1 className="home-page-header fs-1 fw-bold text-center text-white">Team Tracking Application</h1>
      </div>
  );
}

export default Home;

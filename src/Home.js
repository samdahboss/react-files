import "./bootstrap/css/bootstrap.css"
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className="container p-4 bg-dark">
      <h1 className="home-page-header fs-2 fw-bold text-center text-white">Team Tracking Application</h1>
      <button className="btn btn-light d-block mx-auto">
        <Link className="link" to="/Employee">To Employee Page</Link>
      </button>
      
    </div>
  );
}

export default Home;
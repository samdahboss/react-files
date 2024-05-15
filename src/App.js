import "./bootstrap/css/bootstrap.css"
import Employee from './employee'
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="container p-4 bg-dark">
      <h1 className="home-page-header fs-2 fw-bold text-center text-white">Team Tracking Application</h1>
      <button className="btn btn-light d-block mx-auto">Employee Page</button>
      <Link className="link" to={Employee}>To Employee Page</Link>
    </div>
  );
}

export default App;

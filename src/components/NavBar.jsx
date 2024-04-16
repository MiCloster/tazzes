import "../styles/components.css"
import {Link} from 'react-router-dom'
export default function NavBar() {
  return (
   
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Ta<span className="navbar-span">zz</span>es</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" to="/" aria-current="page">Home</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Coffee Cups</a></li>
              <li><a className="dropdown-item" href="#">Tea Cups</a></li>
              <li><a className="dropdown-item" href="#">Mugs</a></li>
              
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

   
    
  )
}

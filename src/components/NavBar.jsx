import "../styles/components.css"
import {Link, useNavigate} from 'react-router-dom'
import Cart from "./Cart"
export default function NavBar() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
    document.activeElement.blur();
    window.scrollTo(0, 0);
  };

  const handleHomeClick = () => {
    navigate(`/home`);
    document.activeElement.blur();
    window.scrollTo(0, 0);
  };

  return (
   
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
    <button className="nav-link" onClick={() => handleHomeClick()}> 
    <div className="navbar-brand">Ta<span className="navbar-span">zz</span>es</div>

    </button>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
        <li className="nav-item">
            <button className="nav-link" onClick={() => handleCategoryClick("all")}>All Cups</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => handleCategoryClick("coffee-cup")}> Coffee Cups </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => handleCategoryClick("tea-cup")}>Tea Cups</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => handleCategoryClick("mug")}>Mugs</button>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>

   
    
  )
}

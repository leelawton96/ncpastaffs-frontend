import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import '../../scss/components/_navbar.scss'


const NavBar = () => {

 return (

  <div className="container-fluid nav-container">
  <div className="container navbar">

    <StaticImage 
      src="../../images/ncpa-logo.webp"
      className="logo"
      alt="logo"
    />
      <nav className="navbar navbar-expand-lg w-100">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link activeClassName="active" className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item active">
            <Link activeClassName="active" className="nav-link" to="/useful-links/">Useful Links</Link>
          </li>
          <li className="nav-item active">
            <Link activeClassName="active" className="nav-link" to="/calendar-results">Calendar & Results</Link>
          </li>
          <li className="nav-item active">
            <Link activeClassName="active" className="nav-link" to="/contact-us/">Contact Us</Link>
          </li>
        </ul>
          </div>
        </div>
      </nav>


  </div>
  </div>

 )

}


export default NavBar

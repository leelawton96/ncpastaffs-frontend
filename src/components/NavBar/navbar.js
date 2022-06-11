import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import '../../scss/components/_navbar.scss'


const NavBar = () => {

 return (

  <div className="container-fluid nav-container">
  <div className="container navbar">

    <StaticImage 
      src="../../images/N.C.P.A.jpg"
      className="logo"
    />
      <nav class="navbar navbar-expand-lg w-100">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav mt-2 mt-lg-0">
          <li class="nav-item active">
            <Link activeClassName="active" className="nav-link" to="/">Home</Link>
          </li>
          <li class="nav-item active">
            <Link activeClassName="active" className="nav-link" to="/useful-links/">Useful Links</Link>
          </li>
          <li class="nav-item active">
            <Link activeClassName="active" className="nav-link" to="/calendar-results">Calendar & Results</Link>
          </li>
          <li class="nav-item active">
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

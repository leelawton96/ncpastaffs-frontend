import * as React from "react"
import { Link } from "gatsby"
import '../../scss/components/_footer.scss'


const Footer = () => {

 return (

  <div className="container-fluid footer-container flex-column text-center d-flex justify-content-center align-items-center my-auto">
   <div className="container d-flex flex-column justify-content-center align-items-center my-auto">

   <ul className="w-100 footer-links d-flex flex-column flex-sm-row justify-content-evenly px-0 pb-4 pt-4 pt-sm-0">
    <li className="footer-link py-2 py-sm-0">
     <Link activeClassName="footer-active" to="/">Home</Link>
    </li>
    <li className="footer-link py-2 py-sm-0">
     <Link activeClassName="footer-active" to="/useful-links">Useful Links</Link>
    </li>
    <li className="footer-link py-2 py-sm-0">
     <Link activeClassName="footer-active" to="/calendar-results">Calendar & Results</Link>
    </li>
    <li className="footer-link py-2 py-sm-0">
     <Link activeClassName="footer-active" to="/contact-us">Contact Us</Link>
    </li>
   </ul>

     <p className="m-0 pt-1 white">Copyright © 2022 NCPA Staffs Branch </p>

      <p class="white pt-1 m-0">Website Design by 
        <a target="_blank" rel="noreferrer" href="https://www.leelawtondesign.co.uk">  Lee Lawton</a>  |  
        <a target="_blank" rel="noreferrer" href="https://www.leelawtondesign.co.uk">  Lee Lawton Design</a> 
      </p>

   </div>
  </div>

 )

}


export default Footer

import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout/layout";
import Seo from "../components/SEO/seo";
import Directions from "../images/directions_catton_park.pdf";
import PreEntries from "../images/customer_class_report.pdf";
import StaffsFestivalResults from "../images/Results_of_the_event_NCPA_Staffordshire_Festival_2022.pdf";



const CalendarResults = () => (
 
 <Layout>

    <Seo 
      url="https://www.ncpa-staffs.co.uk"
      title="Calendar & Results | NCPA Staffs"
      description="NCPA Staffs are a small committee formed in 1981 dedicated to running at least 2 shows a year, the main one being the Staffordshire Country Festival held end June / early July."
    />
  
    <div className="content-header calendar-results">

      <div className="overlay text-center">
        <h2 className="white content-header-title">Calendar & Results</h2>
      </div>
      
    </div>

    <div className="container py-5">

      <p className="text-uppercase fs-6 text-muted">Directions: Please leave A38 at the turning for the national memorial arboretum.</p>
      <p className="text-uppercase fs-6 text-muted">(Do not turn off to Walton on Trent) carry on along road under bridge (Height 13’ 9”) </p>
      <p className="text-uppercase fs-6 text-muted">Then turn sharp left. Show is on this road. For large vehicles over 13’ 9” in height please see <a href={Directions}  target="_blank" rel="noreferrer"> alternative directions on our website.</a></p>

      <p className="font-bold fs-6 text-muted">
        The Stable Co-ordinator <br/>
        Val Brown <br/>
        Tel: <a href="tel:07979 232266">07979 232266</a>
      </p>

      <table className="my-5">
        <tr>
          <th>Event</th>
          <th>On-Line Entries / More Info</th>
          <th>Date</th>
          <th>Location</th>
          <th>Results / Download Schedule</th>
        </tr>
        <tr>
          <td>Summer Show</td>
          <td>
            <a href="http://entrymaster.net/index.php?id=1&alias=ncpa-staffs" target="_blank" rel="noreferrer">Click for On-Line Entry</a>            
            <br/><br/>
            <a href={PreEntries} target="_blank" rel="noreferrer">View Pre-Entries</a></td>
          <td>02-Jul-22 to 03-Jul-22</td>
          <td>Catton Park</td>
          <td> 
            <a href={StaffsFestivalResults} target="_blank" rel="noreferrer">Download Results</a> <br/><br/>
            <Link to="/gallery-staffs-festival/">View Gallery</Link>
          </td>
        </tr>
      </table>


    </div>


  </Layout>

)

export default CalendarResults 

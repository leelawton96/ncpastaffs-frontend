import * as React from "react"
import { Link } from "gatsby"
import "../../scss/components/_useful-link-card.scss"



const UsefulLinkCard = (props) => (
 
<div className="col-12 col-sm-6 col-md-4 col-lg-3 mx-auto py-3">
 <div className="useful-link-container px-4 d-flex flex-column">
      
     <h3 className="content-header-title text-center mb-1">{props.title}</h3>
     <a className="btn btn-primary w-100 mt-auto" href={props.link} target="_blank">Click Here</a>
  
 </div>
</div>

)

export default UsefulLinkCard

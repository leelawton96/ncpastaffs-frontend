import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/SEO/seo"
import ContactForm from "../components/ContactForm/contact-form.js"



const ContactUs = () => (
 
 <Layout>

    <Seo 
      url="https://www.ncpa-staffs.co.uk"
      title="Contact Us | NCPA Staffs"
      description="We are a small committee formed in 1981 dedicated to running at least 2 shows a year, the main one being the Staffordshire Country Festival held end June / early July."
    />
  
  <div className="content-header useful-links">

    <div className="overlay text-center">
      <h2 className="white content-header-title">Contact</h2>
    </div>
    
  </div>

  <div className="container-fluid py-5 contact-form">
    <div className="container px-5">

    <div className="px-4 pt-4">
      <h2 className="font-bold white mb-4">We'd love to hear from you!</h2>
      <h5 className="white">Please fill out the below contact form. Alternatively, please contact:</h5>
      <h5 className="white"><span className="font-bold">Jenny Crane:</span> 01538308446 or 07743812710</h5>
      <h5 className="white"><span className="font-bold">Janice Fitchett:</span> 01782 399064 or 07812367110</h5>
      <h5 className="white"><span className="font-bold">Cheryl Scott:</span> 07966625994</h5>
    </div>


      <ContactForm />

    </div>
  </div>

  </Layout>
)

export default ContactUs

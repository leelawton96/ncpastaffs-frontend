import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/SEO/seo"



const IndexPage = () => (
  <Layout>

    <Seo 
      url="https://www.ncpa-staffs.co.uk/"
      title="Northern Counties Ponies Association | Staffordshire Branch"
      description="NCPA Staffs are a small committee formed in 1981 dedicated to running at least 2 shows a year, the main one being the Staffordshire Country Festival held end June / early July."
    />
   
  <div className="container-fluid homepage-hero text-light">
    <div className="homepage-hero-overlay">
      <div className="container text-center text-lg-start homepage-hero-content">
      <div className="col-12 col-lg-5">
        <h1 className="font-bold pb-3"> Northern Counties Ponies Association - Staffordshire Branch</h1>
        <p className="pb-3">We are a small committee dedicated to running at least 2 shows a year, the main one being the Staffordshire Country Festival held end June/early July.</p>
        <Link className="btn btn-primary" to="/calendar-results/">Click Here to View Events</Link>
      </div>
      <div className="col-12 col-lg-7">
      </div>
      </div>
    </div>
  </div>

  <section className="container-fluid links-container py-4">

    <div className="text-center py-5 container links-container">

    <span className="divider-primary pb-3 mt-3"></span>
    <h2 className="font-bold pb-3">Welcome to the Staffordshire Branch of the NCPA</h2>
    <p className="w-75 mx-auto">The NCPA Staffordshire Branch was formed in 1981 as an area branch of the Northern Counties Pony Association, which is a registered charity, with branches throughout the North of England. In 1982 our first annual show was held at the Staffordshire County Showground and has been held each year since, moving to other venues, apart from 2020 due to the Coronavirus Pandemic.</p>
    <p className="w-75 mx-auto mb-5">The show has grown into a large two day show with many Horse of the Year Show qualifiers, as well as the classes that we have always held for a variety of divs both ridden and in hand. We have organised Winter, Spring and Autumn shows over the years, as well as clinics and social events, and we hope to continue for many years to come.</p>


    <div className="row">

      <div className="col-12 col-sm-6 col-lg-3 p-3">
        <div className="px-3 py-4 link d-flex flex-column">
          <StaticImage 
            className="link-image"
            src="../images/ncpa_4.webp" 
            alt="Events" 
            objectFit="contain"
            width={300}
          />
          <h2 className="text-start mt-3">Events</h2>
          <p className="text-start">Forthcoming events, schedules, on-line entries and clinics </p>
          <Link className="btn btn-primary w-100 mt-auto" to="/calendar-results/">Click Here</Link>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-lg-3 p-3">
        <div className="px-3 py-4 link d-flex flex-column">
          <StaticImage 
            className="link-image"
            src="../images/ncpa_3.webp" 
            alt="Events" 
            objectFit="contain"
            width={300}
          />
          <h2 className="text-start mt-3">Links</h2>
          <p className="text-start">Societies, entry master and official photographer </p>
          <Link className="btn btn-primary w-100 mt-auto" to="/useful-links/">Click Here</Link>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-lg-3 p-3">
        <div className="px-3 py-4 link d-flex flex-column">
          <StaticImage 
            className="link-image"
            src="../images/ncpa_2.webp" 
            alt="Events" 
            objectFit="contain"
            width={300}
          />
          <h2 className="text-start mt-3">Contact Us</h2>
          <Link className="btn btn-primary w-100 mt-auto" to="/contact-us/">Click Here</Link>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-lg-3 p-3">
        <div className="px-3 py-4 link d-flex flex-column">
          <StaticImage 
            className="link-image"
            src="../images/ncpa_1.webp" 
            alt="Events" 
            objectFit="contain"
            width={300}
          />
          <h2 className="text-start mt-3">Results</h2>
          <Link className="btn btn-primary w-100 mt-auto" to="/calendar-results/">Click Here</Link>
        </div>
      </div>

    </div>

    </div>
  </section>





  </Layout>
)

export default IndexPage

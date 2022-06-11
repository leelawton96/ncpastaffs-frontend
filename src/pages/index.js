import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/layout"



const IndexPage = () => (
  <Layout>
   
  <div className="container-fluid homepage-hero text-light">
    <div className="homepage-hero-overlay">
      <div className="container text-center text-lg-start homepage-hero-content">
      <div className="col-12 col-lg-5">
        <h1 className="font-bold pb-3"> Northern Counties Ponies Association - Staffordshire Branch</h1>
        <p className="pb-3">We are a small committee dedicated to running at least 2 shows a year, the main one being the Staffordshire Country Festival held end June/early July.</p>
        <Link className="btn btn-primary" to="/">Click Here to View Events</Link>
      </div>
      <div className="col-12 col-lg-7">
      </div>
      </div>
    </div>
  </div>

  <section className="text-center py-5 container">

    <span className="divider-primary pb-3 mt-3"></span>
    <h2 className="font-bold pb-3">Welcome to the Staffordshire Branch of the NCPA</h2>
    <p>The NCPA Staffordshire Branch was formed in 1981 as an area branch of the Northern Counties Pony Association, which is a registered charity, with branches throughout the North of England. In 1982 our first annual show was held at the Staffordshire County Showground and has been held each year since, moving to other venues, apart from 2020 due to the Coronavirus Pandemic.</p>
    <p>The show has grown into a large two day show with many Horse of the Year Show qualifiers, as well as the classes that we have always held for a variety of sections both ridden and in hand. We have organised Winter, Spring and Autumn shows over the years, as well as clinics and social events, and we hope to continue for many years to come.</p>

  </section>

  </Layout>
)

export default IndexPage

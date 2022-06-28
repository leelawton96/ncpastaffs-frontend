/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import NavBar from "../NavBar/navbar"
import Footer from "../Footer/footer"

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-neutral-50 text-neutral-900">
      <div>
        <NavBar />
        {children}
        <Footer />
      </div>
    </div>


  )
}


export default Layout

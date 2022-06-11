/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import NavBar from "../NavBar/navbar"

const Layout = ({ children }) => {
  return (
    <div class="flex min-h-screen flex-col justify-between bg-neutral-50 text-neutral-900">
      <div>
        <NavBar />
        {children}
      </div>
    </div>


  )
}


export default Layout
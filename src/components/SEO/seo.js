import * as React from "react"
import { Helmet } from "react-helmet"
import LinkPreview from "../../images/link_preview.png"
import Favicon from "../../images/favicon.png"

function Seo (props) {

  return (

    <Helmet htmlAttributes={{ lang: 'en' }}>


      <meta charset="utf-8" />
      <meta name="description" content={props.description} />
      <meta name="author" content="Lee Lawton" />

      <title>{props.title}</title>
      <meta name="title" content={props.title}/>
      <meta name="description" content={props.description}/>

      <meta property="og:type" content="website"/>
      <meta property="og:url" content={props.url}/>
      <meta property="og:title" content={props.title}/>
      <meta property="og:description" content={props.description}/>
      <meta property="og:image" content={LinkPreview}/>

      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content={props.url}/>
      <meta property="twitter:title" content={props.title}/>
      <meta property="twitter:description" content={props.description}/>
      <meta property="twitter:image" content={LinkPreview}/>

      <link rel="icon" type="image/x-icon" href={Favicon} />

    </Helmet>


  )
}


export default Seo

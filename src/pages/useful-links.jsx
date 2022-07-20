import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/SEO/seo"
import UsefulLinkCard from "../components/UsefulLinkCard/UsefulLinkCard"



const UsefulLinks = () => (
 
 <Layout>

    <Seo 
      url="https://www.ncpa-staffs.co.uk"
      title="Useful Links | NCPA Staffs"
      description="NCPA Staffs are a small committee formed in 1981 dedicated to running at least 2 shows a year, the main one being the Staffordshire Country Festival held end June / early July."
    />
  
  <div className="content-header useful-links">

    <div className="overlay text-center">
      <h2 className="white content-header-title">Useful Links</h2>
    </div>
    
  </div>

  <div className="container py-5">
    <div className="row">
      <UsefulLinkCard title="NCPA Main Branch" link="http://www.thencpa.co.uk/" />
      <UsefulLinkCard title="Entry Master (Online Entry)" link="http://entrymaster.net/index.php?id=1&alias=ncpa-staffs" />
      <UsefulLinkCard title="National Pony Society" link="https://www.nationalponysociety.com/" />
      <UsefulLinkCard title="British Show Pony Society" link="https://www.bsps.com/" />
      <UsefulLinkCard title="Horse of the Year Show" link="https://hoys.co.uk/" />
      <UsefulLinkCard title="Coloured Horse & Pony Society (CHAPS)" link="https://www.chapsuk.com/" />
      <UsefulLinkCard title="UK Ponies & Horses" link="http://online.ukponies.uk/" />
      <UsefulLinkCard title="British Miniature Horse Society" link="https://www.bmhs.co.uk/" />
      <UsefulLinkCard title="Amy Griffiths Photography" link="https://amygriffithsphotography.co.uk/" />
    </div>
  </div>

  </Layout>
)

export default UsefulLinks

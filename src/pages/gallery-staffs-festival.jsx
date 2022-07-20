import * as React from "react";
import Layout from "../components/Layout/layout";
import Seo from "../components/SEO/seo";
import ImageGallery from 'react-image-gallery';
import Img1 from "../images/summer-festival-2022/Summer_Festival_00001.jpg"
import Img1Thumb from "../images/summer-festival-2022/Summer_Festival_00001_thumb.jpg"
import Img2 from "../images/summer-festival-2022/Summer_Festival_00002.jpg"
import Img2Thumb from "../images/summer-festival-2022/Summer_Festival_00002_thumb.jpg"
import Img3 from "../images/summer-festival-2022/Summer_Festival_00003.jpg"
import Img3Thumb from "../images/summer-festival-2022/Summer_Festival_00003_thumb.jpg"
import Img4 from "../images/summer-festival-2022/Summer_Festival_00004.jpg"
import Img4Thumb from "../images/summer-festival-2022/Summer_Festival_00004_thumb.jpg"
import Img5 from "../images/summer-festival-2022/Summer_Festival_00005.jpg"
import Img5Thumb from "../images/summer-festival-2022/Summer_Festival_00005_thumb.jpg"
import Img6 from "../images/summer-festival-2022/Summer_Festival_00006.jpg"
import Img6Thumb from "../images/summer-festival-2022/Summer_Festival_00006_thumb.jpg"
import Img7 from "../images/summer-festival-2022/Summer_Festival_00007.jpg"
import Img7Thumb from "../images/summer-festival-2022/Summer_Festival_00007_thumb.jpg"
import Img8 from "../images/summer-festival-2022/Summer_Festival_00008.jpg"
import Img8Thumb from "../images/summer-festival-2022/Summer_Festival_00008_thumb.jpg"
import Img9 from "../images/summer-festival-2022/Summer_Festival_00009.jpg"
import Img9Thumb from "../images/summer-festival-2022/Summer_Festival_00009_thumb.jpg"
import Img10 from "../images/summer-festival-2022/Summer_Festival_00010.jpg"
import Img10Thumb from "../images/summer-festival-2022/Summer_Festival_00010_thumb.jpg"
import Img11 from "../images/summer-festival-2022/Summer_Festival_00011.jpg"
import Img11Thumb from "../images/summer-festival-2022/Summer_Festival_00011_thumb.jpg"
import Img12 from "../images/summer-festival-2022/Summer_Festival_00012.jpg"
import Img12Thumb from "../images/summer-festival-2022/Summer_Festival_00012_thumb.jpg"
import Img13 from "../images/summer-festival-2022/Summer_Festival_00013.jpg"
import Img13Thumb from "../images/summer-festival-2022/Summer_Festival_00013_thumb.jpg"
import Img14 from "../images/summer-festival-2022/Summer_Festival_00014.jpg"
import Img14Thumb from "../images/summer-festival-2022/Summer_Festival_00014_thumb.jpg"

const images = [
  {
    original: Img1,
    thumbnail: Img1Thumb,
  },
  {
    original: Img2,
    thumbnail: Img2Thumb,
  },
  {
    original: Img3,
    thumbnail: Img3Thumb,
  },
  {
    original: Img4,
    thumbnail: Img4Thumb,
  },
  {
    original: Img5,
    thumbnail: Img5Thumb,
  },
  {
    original: Img6,
    thumbnail: Img6Thumb,
  },
  {
    original: Img7,
    thumbnail: Img7Thumb,
  },
  {
    original: Img8,
    thumbnail: Img8Thumb,
  },
  {
    original: Img9,
    thumbnail: Img9Thumb,
  },
  {
    original: Img10,
    thumbnail: Img10Thumb,
  },
  {
    original: Img11,
    thumbnail: Img11Thumb,
  },
  {
    original: Img12,
    thumbnail: Img12Thumb,
  },
  {
    original: Img13,
    thumbnail: Img13Thumb,
  },
  {
    original: Img14,
    thumbnail: Img14Thumb,
  },
];

const GalleryStaffsFestival = () => (
 
 <Layout>

    <Seo 
      url="https://www.ncpa-staffs.co.uk"
      title="Gallery: NCPA Summer Festival | NCPA Staffs"
      description="NCPA Staffs are a small committee formed in 1981 dedicated to running at least 2 shows a year, the main one being the Staffordshire Country Festival held end June / early July."
    />
  
    <div className="content-header calendar-results">

      <div className="overlay text-center">
        <h2 className="white content-header-title">Galery: NCPA Summer Festival </h2>
      </div>
      
    </div>

    <div className="container p-5">

      <ImageGallery items={images} />;

    </div>


  </Layout>

)

export default GalleryStaffsFestival

import React from 'react'
import style from './style.module.css'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import MyNavbar from '../../Navbar/MyNavbar'

<<<<<<< Updated upstream
=======
// import React from "react";
// import style from "./ZomatoAPI.module.css";
// import MyNavbar from "../../../Navbar/MyNavbar";
// import ZoLogo from "../../../../../assets/images/ZomatoAPIImg/Zomato_logo.png";
// import crawlerImg1 from "../../../../../assets/images/ZomatoAPIImg/crawlerImg1.png";
// import crawlerImg2 from "../../../../../assets/images/ZomatoAPIImg/crawlerImg2.png";
// import crawlerImg3 from "../../../../../assets/images/ZomatoAPIImg/crawlerImg3.png";
// import crawlerImg4 from "../../../../../assets/images/ZomatoAPIImg/crawlerImg4.png";
// import crawlerImg5 from "../../../../../assets/images/ZomatoAPIImg/crawlerImg5.png";
// import crawlerImg6 from "../../../../../assets/images/ZomatoAPIImg/crawlerImg6.png";
>>>>>>> Stashed changes


const FoodApiComponent = () => {
  const data = useSelector(state => state.data.apiDataArray)
  const { id1, id2 } = useParams()
  console.log(id2)

<<<<<<< Updated upstream
  const [filteredData] = data.filter(data => data.id == id2)

  console.log("filterdata", filteredData)
  return (
    <>
      <MyNavbar />
      <section style={{ backgroundColor: `red` }} className={`${style.zomatoSec1} zomato-crawler crawler`}>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-3 col-md-12 text-center">
              <div className="logo">
                <img
                  src={filteredData.HeroImg}
                  alt="Zomato"
                  className={` ${style.ZoLogoImg} img-fluid`}
                />
              </div>
            </div>
            <div className="col-lg-9 col-md-12">
              <div>
                <h1 className={style.h1}>Zomato API</h1>
                <p className={style.p}>
                  {filteredData.HeroData}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
        <div className="col-lg-5 col-md-12 col-sm-12">
              <div className="code-screen">
                <div className="screen-wrap">
                  <span>fff</span>
                  <span>ggg</span>
                  <span>hhh</span>
                </div>
               
              </div>
            </div>
            <div className="col-lg-7 col-md-12  col-sm-12 d-flex align-items-center justify-content-center">
              <div>
                <h3 className={`${style.h3} text-center mb-4`}> {filteredData.EfficientApisHeader}</h3>
                <div className="crawler-list">
                  <ul style={{listStyle : "none"}}>
                    <li className={`${style.crawlerlistLi}`}>
                      Scrape Zomato restaurant and food menu data without any
                      limits
                    </li>
                    <li className={`${style.crawlerlistLi}`}>Extract past data from users’ profiles</li>
                    <li className={`${style.crawlerlistLi}`}>Built-in data filters to get updates easily</li>
                    <li className={`${style.crawlerlistLi}`}>
                      Best Zomato food delivery scraping API for huge-scale
                      crawling
                    </li>
                    <li className={`${style.crawlerlistLi}`}>Extract data occasionally</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </div>


    </>



  )
=======
const [filteredData] = data.filter(data=> data.id ==id2)


  return (
    <div>
      <div>title is {filteredData.title}</div>
    </div>
//     <>
//       <MyNavbar />
//       <section style={{backgroundColor:`${bgColor}`}}  className={`${style.zomatoSec1} zomato-crawler crawler`}>
//         <div className="container">
//           <div className="row d-flex justify-content-center">
//             <div className="col-lg-3 col-md-12 text-center">
//               <div className="logo">
//                 <img
//                   src={ZoLogo}
//                   alt="Zomato"
//                   className={` ${style.ZoLogoImg} img-fluid`}
//                 />
//               </div>
//             </div>
//             <div className="col-lg-9 col-md-12">
//               <div>
//                 <h1 className={style.h1}>{filteredData.title}</h1>
//                 <p className={style.p}>
//                   {D}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className={`${style.zomatoSec2}`}>
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-5 col-md-12 col-sm-12">
//               <div className="code-screen">
//                 <div className="screen-wrap">
//                   <span>fff</span>
//                   <span>ggg</span>
//                   <span>hhh</span>
//                 </div>
//                 {/* <pre style="">
// [
//  {
//      "Id":"0",
//      "URL": "https://www.zomato.com/ncr/plum-by-bent-chair-aerocity-new-delhi",
//      "Resturant_Name": "Plum By Bent Chair",
//      "Address": "The Walk, Worldmark 2, Aerocity, New Delhi",
//      "location": "Aerocity",
//      "City": "New Delhi",
//      "star_rating": "4.6",
//      "Cuisines": "Asian",
//      "Phone_Number": "011 61495178",
//      "offer": "",
//      "Cost_for_two": "₹1800",
//      "Restaurant_Type": "",
//   },
//   {
//       "Id":"1",
//       "URL": "https://www.zomato.com/ncr/air-an-ivory-region-punjabi-bagh-new-delhi",
//       "Resturant_Name": "AIR- An Ivory Region",
//       "Address": "1/83, Third Floor, Club Road, West Punjabi Bagh, Punjabi Bagh, New Delhi",
//       "location": "Punjabi Bagh",
//       "City": "New Delhi",
//       "star_rating": "4.0",
//       "Cuisines": "North Indian",
//       "Phone_Number": "011 66103930",
//       "offer": "",
//       "Cost_for_two": "₹1000",
//       "Restaurant_Type": "",
//    },
//    {
//        "Id":"2",
//        "URL": "https://www.zomato.com/ncr/pa-pa-ya-saket-new-delhi",
//        "Resturant_Name": "Pa Pa Ya",
//        "Address": "Dome, Level 4, Select Citywalk, A-3, District Centre, Saket, New Delhi",
//        "location": "Saket",
//        "City": "New Delhi",
//        "star_rating": "4.5",
//        "Cuisines": "Asian",
//        "Phone_Number": "011 66103779",
//        "offer": "",
//        "Cost_for_two": "₹2000",
//        "Restaurant_Type": "",
//     },
//     {
//         "Id":"3",
//         "URL": "https://www.zomato.com/ncr/haldirams-sector-63-noida",
//         "Resturant_Name": "Haldiram's",
//         "Address": "1A/24, H-Block, Sector 63, Noida",
//         "location": "Sector 63",
//         "City": "Noida",
//         "star_rating": "3.9",
//         "Cuisines": "North Indian",
//         "Phone_Number": "+91 8588000502",
//         "offer": "",
//         "Cost_for_two": "₹600",
//         "Restaurant_Type": "Vegetarian",
//      },
//      {
//          "Id":"4",
//          "URL": "https://www.zomato.com/ncr/om-sweets-snacks-sector-31-gurgaon",
//          "Resturant_Name": "Om Sweets &amp; Snacks",
//          "Address": "SCO 17, Main Market, Sector 31, Gurgaon",
//          "location": "Sector 31",
//          "City": "Gurgaon",
//          "star_rating": "4.1",
//          "Cuisines": "North Indian",
//          "Phone_Number": "0124 4271101| 0124 4271102",
//          "offer": "BOGO",
//          "Cost_for_two": "₹500",
//          "Restaurant_Type": "Vegetarian",
//       },
//       {
//           "Id":"5",
//           "URL": "https://www.zomato.com/ncr/cake-golf-course-road-gurgaon",
//           "Resturant_Name": "Cake",
//           "Address": "21, Golf Course Road, Gurgaon",
//           "location": "Golf Course Road",
//           "City": "Gurgaon",
//           "star_rating": "2.8",
//           "Cuisines": "Bakery",
//           "Phone_Number": "+91 8860838157",
//           "offer": "30% off on all dine-in and home-delivery orders. Offer on home-delivery only applicable when you order online on Zomato or the restaurant app.",
//           "Cost_for_two": "₹300",
//           "Restaurant_Type": "",
//        },
// ]
          
//     </pre> */}
//               </div>
//             </div>
//             <div className="col-lg-7 col-md-12  col-sm-12 d-flex align-items-center justify-content-center">
//               <div>
//                 <h3 className={`${style.h3} text-center mb-4`}>Most Efficient Zomato APIs</h3>
//                 <div className="crawler-list">
//                   <ul style={{listStyle : "none"}}>
//                     <li className={`${style.crawlerlistLi}`}>
//                       Scrape Zomato restaurant and food menu data without any
//                       limits
//                     </li>
//                     <li className={`${style.crawlerlistLi}`}>Extract past data from users’ profiles</li>
//                     <li className={`${style.crawlerlistLi}`}>Built-in data filters to get updates easily</li>
//                     <li className={`${style.crawlerlistLi}`}>
//                       Best Zomato food delivery scraping API for huge-scale
//                       crawling
//                     </li>
//                     <li className={`${style.crawlerlistLi}`}>Extract data occasionally</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div>
//             <div className={`${style.crawlerFlex}`}>
//               <div className="mr-4">
//                 <h2 className={`${style.crawlerFlexh2}`}>
//                   Scrape Region-Wise Zomato Food Delivery Competitor Price Data{" "}
//                 </h2>
//                 <p className={`${style.crawlerFlexpara}`}>
//                   Our web scraping services can help you get maximum data
//                   appropriate for your requirements with an enormous database.
//                   Foodspark offers the best food data scraping services by
//                   extracting the price data from Zomato.
//                 </p>
//               </div>
//               <div className="ml-3">
//                 <img
//                   src={crawlerImg1}
//                   alt="Scrape Region-Wise Zomato Food Delivery Competitor Price Data"
//                 />
//               </div>
//             </div>
//             <div className={`${style.crawlerFlexre}`}>
//               <div className="ml-4">
//                 <h2 className={`${style.crawlerFlexh2}`}>
//                   Scrape Competitor’s Price Food Data for Zomato Food Delivery
//                   Platforms{" "}
//                 </h2>
//                 <p className={`${style.crawlerFlexpara}`}>
//                   You can use our Menu Data Scraping Services for data analysis
//                   and other business or app requirements. They are reliable and
//                   offer comprehensible results.
//                 </p>
//               </div>
//               <div className="mr-3">
//                 <img
//                   src={crawlerImg2}
//                   alt="Scrape Competitor’s Price Food Data for Zomato Food Delivery Platforms"
//                 />
//               </div>
//             </div>
//             <div className={`${style.crawlerFlex}`}>
//               <div className="mr-4">
//                 <h2 className={`${style.crawlerFlexh2}`}>
//                   Scrape Zomato Food Menu’s Competitive Prices Using Item
//                   Modifiers
//                 </h2>
//                 <p className={`${style.crawlerFlexpara}`}>
//                   With Item Modifiers such as add-ons and variants, food
//                   businesses can efficiently scrape data like food names, menus,
//                   and pricing from Zomato.
//                 </p>
//               </div>
//               <div className="ml-3">
//                 <img
//                   src={crawlerImg3}
//                   alt="Scrape Zomato Food Menu’s Competitive Prices Using Item Modifiers"
//                 />
//               </div>
//             </div>
//             <div className={`${style.crawlerFlexre}`}>
//               <div className="ml-4">
//                 <h2 className={`${style.crawlerFlexh2}`}>
//                   Scrape Packaging, Discounts, Item-Wise Services, and Delivery
//                   charges
//                 </h2>
//                 <p className={`${style.crawlerFlexpara}`}>
//                   You may scrape data from various available resources in
//                   different forms. Foodspark copes with all standard formats. It
//                   includes data points like pricing, product descriptions,
//                   reviews, text, or digital sources like images.
//                 </p>
//               </div>
//               <div className="mr-3">
//                 <img
//                   src={crawlerImg4}
//                   alt="Scrape Packaging, Discounts, Item-Wise Services, and Delivery charges"
//                 />
//               </div>
//             </div>
//             <div className={`${style.crawlerFlex}`}>
//               <div className="mr-4">
//                 <h2 className={`${style.crawlerFlexh2}`}>Competitive Prices for Zomato Food Delivery platform </h2>
//                 <p className={`${style.crawlerFlexpara}`}>
//                   Competitive Price Intelligence assists businesses in
//                   leveraging different data insights. Our easy and quick
//                   scraping solutions offer significant data insights in a few
//                   hours per your requirements.
//                 </p>
//               </div>
//               <div className="ml-3">
//                 <img
//                   src={crawlerImg5}
//                   alt="Competitive Prices for Zomato Food Delivery platform"
//                 />
//               </div>
//             </div>
//             <div className={`${style.crawlerFlexre}`}>
//               <div className="ml-4">
//                 <h2 className={`${style.crawlerFlexh2}`}>
//                   Competitor's Brand Monitoring for Online Food Delivery
//                   Platforms
//                 </h2>
//                 <p className={`${style.crawlerFlexpara}`}>
//                   Our web scraping services assist you in tracking competitors'
//                   Engagement, Leads, Reach, Conversions, and Customer
//                   sentiments.
//                 </p>
//               </div>
//               <div className="mr-3">
//                 <img
//                   src={crawlerImg6}
//                   alt="Competitor's Brand Monitoring for Online Food Delivery Platforms"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
    )
>>>>>>> Stashed changes
}

export default FoodApiComponent

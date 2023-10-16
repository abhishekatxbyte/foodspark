import React from 'react'
import style from './style.module.css'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import MyNavbar from '../../Navbar/MyNavbar'



const FoodApiComponent = () => {
  const data = useSelector(state => state.data.apiDataArray)
  const { id1, id2 } = useParams()
  console.log(id2)

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
}

export default FoodApiComponent

import React from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {PORTFOLIO_IMAGE_URL} from "../_helpers/params";
import {Link} from "react-router-dom";

const Portfolio = (props) => {
    const work = props.work

    return (
        <section className="portfolio-area portfolio-one light-bg section-padding clearfix" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="section-title text-center mb-30">
                            <h2 className="mb-20">My Portfolio</h2>
                            <div className="horizontal-line">
                                <div className="top"></div>
                                <div className="bottom"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                            <ResponsiveMasonry
                                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                            >
                               <Masonry columnsCount={3} >
                                   {
                                       work.map(
                                           (item,k) =>
                                       <div key={k} style={{margin : "2px"}} >
                                           <div className="single-portfolio overlay light-1 text-center">
                                               <img src={PORTFOLIO_IMAGE_URL+item.image} alt={item.titre}/>
                                               <div className="zoom-icon">
                                                   <Link to={`/portfolio/${item.slug}`}  className="fancybox">
                                                       <i className="zmdi zmdi-link"></i>
                                                   </Link>
                                               </div>
                                               <div className="project-title text-left">
                                                   <h4 className="font-20 montserrat weight-regular capitalize no-margin">{item.titre}</h4>
                                                   <p className="montserratlight">{item.name}</p>
                                               </div>
                                           </div>
                                       </div>

                                   )}


                               </Masonry>
                            </ResponsiveMasonry>
                        </div>
                </div>
            </div>
        </section>
    )
}

export  default Portfolio
import React from "react";
import {Link} from "react-router-dom";
import {BLOG_IMAGE_URL} from "../_helpers/params";

const Blog = (props) => {
    const article = props.article
    return (
        <section className="blog-area bg-color-1 section-padding" id="blog">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="section-title text-center mb-60">
                            <h2 className="mb-20">My Blog</h2>
                            <div className="horizontal-line">
                                <div className="top"/>
                                <div className="bottom"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        article.map(
                            (item,k) =>
                                <div key={k} className="mobile-mb-30 col-xs-12 col-sm-4">
                                    <div className="single-blog clearfix">
                                        <Link to={`/blog/${item.slug}`} ><img src={BLOG_IMAGE_URL+item.image} alt="Blog Image"/></Link>
                                        <div className="date-comment plr-20 ptb-20 clearfix">
                                            <div className="left floatleft">
                                                <h6 className="capitalize montserrat no-margin weight-regular">
                                                    <i className="zmdi zmdi-calendar"/> 20 Jun 2017</h6>
                                            </div>
                                            <div className="right floatright">
                                                <h6 className="capitalize montserrat no-margin weight-regular">
                                                    <i className="zmdi zmdi-eye"/> {item.views} views</h6>
                                            </div>
                                        </div>
                                        <div className="blog-title clearfix">
                                            <div className="left floatleft">
                                                <Link to={`/blog/${item.slug}`}>
                                                    <h4 className="capitalize montserrat no-margin weight-regular">{item.title}</h4>
                                                </Link>
                                            </div>
                                            <div className="right floatright">
                                                <Link to={`/blog/${item.slug}`}><i className="zmdi zmdi-arrow-forward"/></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Blog
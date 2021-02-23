import React from "react";
import moment from 'moment'
import moi from '../assets/moi.jpg'
import {motion} from 'framer-motion'
import {Link} from "react-router-dom";
const About = (props) => {
    return (
        <section className="about-area section-padding light-bg" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="section-title text-center mb-60">
                            <h2 className="mb-20">About Me</h2>
                            <div className="horizontal-line">
                                <div className="top"></div>
                                <div className="bottom"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-4">
                        <div className="left">
                            <motion.img    src={moi} className="myAbout" alt=""/>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-8 col-md-push-1 col-md-8">
                        <div className="right">
                            <h3 className="font-22 capitalize">Howdy!</h3>
                            <p className="font-16 line-height-28">
                                On the other hand, we denounce with righteous indignation and dislike men who are so
                                beguiled and demoralized by th charms of pleasure of the moment, so blinded by desire,
                                tht they cannot foresee the pain and trouble that are
                            </p>
                            <hr/>

                            <div className="row">
                                <div className="col-12 col-md-6 single-info">
                                    <p><span>Name:</span> {props.about.firstname} {props.about.lastname}</p>
                                </div>
                                <div className="col-12 col-md-6 single-info">
                                    <p><span>Phone:</span> {props.about.phone}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6 single-info">
                                    <p> <span>Birthday:</span> {moment(props.about.birthday,).format('Do MMMM YYYY')}</p>
                                </div>
                                <div className="col-12 col-md-6 single-info">
                                    <p><span>Nationality:</span> {props.about.nationality}</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-md-6 single-info">
                                    <p> <span>Work status:</span> {props.about.work}</p>
                                </div>
                                <div className="col-12 col-md-6 single-info">
                                    <p><span>Freelancer :</span> {props.about.freelance == 1 ? "Available" : "not Available" }</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6 single-info">
                                    <p> <span>Experience:</span> +{moment('20150605','YYYYMMDD').fromNow(true)} </p>
                                </div>
                                <div className="col-12 col-md-6 single-info">
                                    <p><span>Address :</span> {props.about.city}  - {props.about.country.toUpperCase()}</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="about-button mt-30">
                                    <Link className="btn" to="/cv-reader">Download cv</Link>
                                </div>
                                </div>
                                <div className="col-lg-9">

                                    <ul className="social-icons list-inline mt-4 mt-xl-0">
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fa fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fa fa-pinterest-p"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fa fa-git"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fa fa-tumblr"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
import React from "react";
import Logo from "../assets/images/dark-logo.png"
import HomePic from "../assets/images/slider/layer1.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {Link} from "react-router-dom";


const Header = (props) => {

    console.log(props)
    return (
        <>

            <header className="header-style-1 bg-color-1" id="home">
                <div className="top clearfix">
                    <div className="header-top active-sticky ptb-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-6 col-sm-5">
                                    <div className="left">
                                        <div className="logo">
                                            <Link to="/"><img src={Logo} alt="Mim"/></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-7">
                                    <div className="right">
                                        <div className="expand-menu-open floatright">
                                            <i className="zmdi zmdi-menu mobile"></i>
                                        </div>
                                        <nav className="mainmenu onepage-nev floatright">
                                            <ul className="clearfix">
                                                <li><AnchorLink href="#home">Home</AnchorLink></li>
                                                <li><AnchorLink href="#about">About</AnchorLink></li>
                                                <li><AnchorLink href="#portfolio">PORTFOLIO</AnchorLink></li>
                                                <li><AnchorLink href="#service">Services</AnchorLink></li>
                                                <li><AnchorLink href="#blog">Blog</AnchorLink></li>
                                                <li><AnchorLink href="#contact">Contact</AnchorLink></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mainmenu-expand bg-color-3">
                        <div className="close-menu">
                            <i className="zmdi zmdi-close-circle-o"></i>
                        </div>
                        <div className="menu-logo">
                            <Link to="/" ><img src={Logo} alt="Mim"/></Link>
                        </div>
                        <nav className="mainmenu-box onepage-nev">
                            <ul className="clearfix">
                                <li><AnchorLink href="#home">Home</AnchorLink></li>
                                <li><AnchorLink href="#about">About</AnchorLink></li>
                                <li><AnchorLink href="#portfolio">PORTFOLIO</AnchorLink></li>
                                <li><AnchorLink href="#service">Services</AnchorLink></li>
                                <li><AnchorLink href="#blog">Blog</AnchorLink></li>
                                <li><AnchorLink href="#contact">Contact</AnchorLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="bottom slider-area">
                    <div className="container">
                        <div className="row relative">
                            <div className="col-xs-12 col-sm-6 static">
                                <div className="slider-text percent-50">
                                    <h5 className="mb-11">Hello, my name is</h5>
                                    <h1 className="mb-30">{props.home.firstname} {props.home.lastname}</h1>
                                    <p className="font-16 line-height-28">
                                        On the other hand, we denounce with righteous indignation and dislike men who
                                        are so beguiled demord by
                                    </p>
                                    <div className="slider-button smooth-scroll mt-40">
                                        <a className="btn lg-btn" href="#portfolio">my work</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <div className="slider-img text-right">
                                    <img src={HomePic} alt="Image Layer"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
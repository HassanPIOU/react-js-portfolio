import React from "react";

const Experience = () => {
    return (
        <section className="experience-area section-padding bg-color-1">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="section-title text-center mb-60">
                            <h2 className="mb-20">My Experience</h2>
                            <div className="horizontal-line">
                                <div className="top"></div>
                                <div className="bottom"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 mobile-mb-30">
                        <div className="left">
                            <div className="single-experi mb-50">
                                <div className="left-text floatleft relative">
                                    <div className="dashed-line"></div>
                                    <h4 className="montserrat weight-medium mb-5 capitalize">Behance</h4>
                                    <p className="montserrat weight-medium">2007-2008</p>
                                </div>
                                <div className="right-text">
                                    <i className="zmdi zmdi-check-circle"></i>
                                    <h3 className="capitalize font-20">Web Designer & Developer</h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the
                                        majority </p>
                                </div>
                            </div>
                            <div className="single-experi">
                                <div className="left-text floatleft">
                                    <h4 className="montserrat weight-medium mb-5 capitalize">Regaltheme</h4>
                                    <p className="montserrat weight-medium">2007-2008</p>
                                </div>
                                <div className="right-text">
                                    <i className="zmdi zmdi-check-circle"></i>
                                    <h3 className="capitalize font-20">Graphic Designer</h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the
                                        majority </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6">
                        <div className="right">
                            <div className="single-experi mb-50">
                                <div className="left-text floatleft relative">
                                    <div className="dashed-line"></div>
                                    <h4 className="montserrat weight-medium mb-5 capitalize">Wipux</h4>
                                    <p className="montserrat weight-medium">2007-2008</p>
                                </div>
                                <div className="right-text">
                                    <i className="zmdi zmdi-check-circle"></i>
                                    <h3 className="capitalize font-20">Web & Print Designer</h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the
                                        majority </p>
                                </div>
                            </div>
                            <div className="single-experi">
                                <div className="left-text floatleft">
                                    <h4 className="montserrat weight-medium mb-5 capitalize">Themeforest</h4>
                                    <p className="montserrat weight-medium">2007-2008</p>
                                </div>
                                <div className="right-text">
                                    <i className="zmdi zmdi-check-circle"></i>
                                    <h3 className="capitalize font-20">Programmer & Developer</h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the
                                        majority </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
import React from "react";

const Service = (props) => {
    const services = props.services
    return (
        <section className="service-area bg-color-1 section-padding" id="service">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="section-title text-center mb-60">
                            <h2 className="mb-20">My Services</h2>
                            <div className="horizontal-line">
                                <div className="top"></div>
                                <div className="bottom"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row text-center">
                    {
                        services.map(
                            (item,k) => <div key={k} className="mobile-mb-30 col-xs-12 col-sm-6 col-md-3 ">
                                <div className="single-service pt-50 pb-60 plr-20 bg-white">
                                    <i className={`fa ${item.icon}`}></i>
                                    <h5 className="montserrat weight-medium no-margin">{item.title}</h5>
                                    <hr className="mtb-15"/>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )

}

export  default Service
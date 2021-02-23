import React  from "react";
import testimonial_pic from "../assets/images/testimonial/1.png"
import  'react-responsive-carousel/lib/styles/carousel.min.css'
const Testimonial = () => {
    return (
        <section className="testimonial-area light-bg section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="section-title text-center mb-60">
                            <h2 className="mb-20">Testimonial</h2>
                            <div className="horizontal-line">
                                <div className="top"></div>
                                <div className="bottom"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-text-center">
                            <div className="col-lg-4">
                                <div className="slide-text pb-60 plr-10">
                                    <div className="img mb-20">
                                        <img src={testimonial_pic} alt="Louis Morrison"/>
                                    </div>
                                    <div className="content">
                                        <h4 className="montserrat weight-bold">Louis Morrison</h4>
                                        <h6 className="montserrat weight-bold mb-10">rEGAL THEME</h6>
                                        <p className="line-height-28">Nemo enim ipsam voluptatem quia voluptas sit
                                            aspernatur aut odit aut fugit, sed quia <br/> consequuntur magni dolores eos
                                            qui ratione voluptatem sequi nesciunt</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="slide-text pb-60 plr-10">
                                    <div className="img mb-20">
                                        <img src={testimonial_pic} alt="Louis Morrison"/>
                                    </div>
                                    <div className="content">
                                        <h4 className="montserrat weight-bold">Louis Morrison</h4>
                                        <h6 className="montserrat weight-bold mb-10">rEGAL THEME</h6>
                                        <p className="line-height-28">Nemo enim ipsam voluptatem quia voluptas sit
                                            aspernatur aut odit aut fugit, sed quia <br/> consequuntur magni dolores eos
                                            qui ratione voluptatem sequi nesciunt</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="slide-text pb-60 plr-10">
                                    <div className="img mb-20">
                                        <img src={testimonial_pic} alt="Louis Morrison"/>
                                    </div>
                                    <div className="content">
                                        <h4 className="montserrat weight-bold">Louis Morrison</h4>
                                        <h6 className="montserrat weight-bold mb-10">rEGAL THEME</h6>
                                        <p className="line-height-28">Nemo enim ipsam voluptatem quia voluptas sit
                                            aspernatur aut odit aut fugit, sed quia <br/> consequuntur magni dolores eos
                                            qui ratione voluptatem sequi nesciunt</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
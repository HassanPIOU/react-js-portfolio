import React from "react";
import {SendContact} from "../_helpers/apiFetch";
import { ToastContainer, toast } from 'react-toastify';
import validations from "../_helpers/validations";
import Ajaxloader from '../assets/loader.svg'


export default class Contact  extends  React.Component {
    state = {
         form :  {
             name: '',
             email: '',
             subject: '',
             message: '',
         },
        nameError: '',
        emailError: '',
        subjectError: '',
        messageError: '',

        loading: false,
        resData : '',

    }

    change = (e) => {
        let fields = this.state.form;
        fields[e.target.name] = e.target.value;
        this.setState({fields});
    }


    onSubmit = (e) => {
        e.preventDefault();

        console.log(this.state.form)

        if (validations(this.state.form) === 'success') {
            this.setState({
                loading : true,
                form :  {
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                }
            })
            const dataSend = {
                name: this.state.form.name,
                email: this.state.form.email,
                subject: this.state.form.subject,
                message: this.state.form.message
            }
            const sendcontact = SendContact(dataSend)
            console.log(sendcontact)
            if (sendcontact.status === "success"){
                this.setState({
                    loading : false
                })
                toast(sendcontact.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }

        }
        else {
            toast.error(validations, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }


    }

    render() {
        const load  = this.state.loading;
        return (
            <section className="contact-area light-bg section-padding" id="contact">
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />

                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="left">
                                <div className="section-title mb-30">
                                    <h2 className="mb-15">GET IN TOUCH</h2>
                                    <div className="horizontal-line mb-20">
                                        <div className="top"></div>
                                        <div className="bottom"></div>
                                    </div>
                                    <p>There are many variations of pssges of Lorem Ipsum available, bu in some form,
                                        by</p>
                                </div>
                                <ul className="contact-text clearfix">
                                    <li>
                                        <i className="zmdi zmdi-phone-in-talk"></i>
                                        <h4 className="montserrat weight-regular no-margin capitalize">Phone</h4>
                                        <span><a className="montserrat weight-regular" href="tel:+88-669-658-6586">+88 669 658 6586</a></span>
                                    </li>
                                    <li>
                                        <i className="zmdi zmdi-email"></i>
                                        <h4 className="montserrat weight-regular no-margin capitalize">Email</h4>
                                        <span><a className="montserrat weight-regular capitalize"
                                                 href="mailto:regaltheme@email.com">regaltheme@email.com</a></span>
                                    </li>
                                    <li>
                                        <i className="zmdi zmdi-home"></i>
                                        <h4 className="montserrat weight-regular capitalize no-margin">Our Location</h4>
                                        <span
                                            className="montserrat weight-regular capitalize">Location Name,here.US</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-8">
                            <div className="right">
                                <div className="contact-form pt-40">
                                    <form className="custom-input contact_form" id="contact_form"
                                          action="http://regaltheme.com/tf/onepage/mim/mim/contact-form.php"
                                          method="post">
                                        <div className="row name-email">
                                            <div className="col-xs-12 col-sm-6">
                                                <input type="text" id="contact_name" name="name"
                                                       value={this.state.name}
                                                       onChange={e => this.change(e)}
                                                       placeholder="Your Name"/>
                                                <p className="form-error">{this.state.nameError}</p>
                                            </div>
                                            <div className="col-xs-12 col-sm-6">
                                                <input type="email" id="contact_email" name="email"
                                                       value={this.state.email}
                                                       onChange={e => this.change(e)}
                                                       placeholder="Your Email"/>
                                                <p className="form-error">{this.state.emailError}</p>
                                            </div>
                                        </div>
                                        <div className="row name-email">
                                            <div className="col-xs-12 col-sm-12 mt-30">
                                                <input type="text" id="contact_subject" name="subject"
                                                       value={this.state.subject}
                                                       onChange={e => this.change(e)}
                                                       placeholder="Your Subject"/>
                                                <p className="form-error">{this.state.subjectError}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-12">
                                            <textarea className="mt-50"
                                                      onChange={e => this.change(e)}
                                                      value={this.state.message}
                                                      name="message" id="contact_message" rows="6" placeholder="Your Message"/>
                                                <p className="form-error">{this.state.messageError}</p>

                                                <button className="btn montserrat weight-regular uppercase mt-30"
                                                        type="submit" name="submit" id="contact_submit"  onClick={e => this.onSubmit(e)}>
                                                    {load ? <img src={Ajaxloader} alt="" /> : <span> Send Message</span>}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}
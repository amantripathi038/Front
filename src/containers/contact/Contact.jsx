import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import swal from 'sweetalert';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current)
        emailjs
            .sendForm(
                'service_amqko7m',
                'template_jc6wbph',
                form.current,
                'DOHq4Uq3XWSb-If36'
            )
            .then(
                (result) => {
                    console.log('message sent');
                    swal({
                        title: "Good job!",
                        text: "Message Sent Successfully!",
                        icon: "success",
                        button: "OK",
                    });
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <div className="gpt3__header section__padding" id="contactus">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">Contact Us</h1>
                <h2 className="gradient__text">
                    We would be happy to hear from you, please fill the form. We promise,
                    guaranteed response within 8 Hrs.
                </h2>
                <div className="mb-5 mt-3">
                    <div lg="5" className="mb-5"></div>
                </div>
            </div>

            <div className="gpt3__header-image mybox">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form-group row m-2 mt-4">
                        <label htmlFor="name" className="col-sm-4">
                            <h5 className="text-white">Name</h5>
                        </label>
                        <div className="col-sm-8">
                            <input
                                type="name"
                                name="user_name"
                                className="form-control"
                                id="name"
                            />
                        </div>
                    </div>

                    <div className="form-group row m-2">
                        <label htmlFor="contact" className="col-sm-4">
                            <h5 className="text-white">Email</h5>
                        </label>
                        <div className="col-sm-8">
                            <input
                                type="email"
                                name="user_email"
                                className="form-control"
                                id=""
                            />
                        </div>
                    </div>

                    <textarea
                        className="form-control rounded-4 mx-auto"
                        id="message"
                        name="message"
                        placeholder="Message"
                        rows="5"
                        required
                    ></textarea>
                    <div className="form-group row m-4">
                        <button className="btn btn-primary btn-lg col-5" onClick={sendEmail}>Send </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
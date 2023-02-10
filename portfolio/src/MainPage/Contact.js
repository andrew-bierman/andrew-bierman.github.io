import React, { useState, useEffect } from "react";

const Contact = () => {
    const [successfulSubmission, setSuccessfulSubmission] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("https://formspree.io/f/mdovedvp", {
            method: "POST",
            body: new FormData(e.target),
            headers: {
                Accept: "application/json",
            },
        });
        console.log(res);
        if (res.ok) {
            setSuccessfulSubmission(true);
        }

    };

    return (
        <>
            {/* <!-- Begin Contact Content --> */}
            < div className="section-light contact" id="contact" >
                <div className="container">
                    <div
                        className="columns is-multiline"
                        data-aos="fade-in-up"
                        data-aos-easing="linear"
                    >
                        <div className="column is-12 about-me">
                            <h1 className="title has-text-centered section-title">
                                Get in touch
                            </h1>
                            <div className="columns is-8">
                                <div className="column">
                                    <a href="https://github.com/andrew-bierman">
                                        <span className='icon is-large'>
                                            <span>
                                                <i className="fab fa-github fa-2x">
                                                </i>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                                <div className="column">
                                    <a href="https://www.linkedin.com/in/andrew-bierman/">
                                        <span className='icon is-large'>
                                            <span className='icon'>
                                                <i className="fab fa-linkedin fa-2x">
                                                </i>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="column is-8 is-offset-2">
                            <form
                                // action="https://formspree.io/f/mdovedvp"
                                // action="https://fabform.io/f/cZAxG59"
                                // method="POST"
                                onSubmit={handleSubmit}

                            >
                                {successfulSubmission ?
                                    <div className="notification is-success">
                                        <button className="delete"></button>
                                        <strong>Thank you!</strong> Your message has been sent.
                                    </div>
                                    :
                                    <>
                                        <div className="field">
                                            <label className="label">Name</label>
                                            <div className="control has-icons-left">
                                                <input
                                                    className="input"
                                                    type="text"
                                                    placeholder="Ex. Jane Smith"
                                                    name="Name"
                                                />
                                                <span className="icon is-small is-left">
                                                    <i className="fas fa-user"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label className="label">Email</label>
                                            <div className="control has-icons-left">
                                                <input
                                                    className="input"
                                                    type="email"
                                                    placeholder="Ex. hello@arctheme.com"
                                                    name="Email"
                                                />
                                                <span className="icon is-small is-left">
                                                    <i className="fas fa-envelope"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label className="label">Message</label>
                                            <div className="control">
                                                <textarea
                                                    className="textarea"
                                                    placeholder="Message..."
                                                    name="Message"
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <div className="control ">
                                                <button className="button submit-button">
                                                    Submit&nbsp;&nbsp;
                                                    <i className="fas fa-paper-plane"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div >
            {/* <!-- End Contact Content --> */}
        </>
    )
}

export default Contact;
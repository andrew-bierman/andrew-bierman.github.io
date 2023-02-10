import React from 'react'

const AboutMe = () => {
    return (
        <>
            {/* <!-- Begin About Me Section --> */}
            < div className="section-light about-me" id="about-me" >
                <div className="container">
                    <div className="column is-12 about-me">
                        <h1 className="title has-text-centered section-title">About Me</h1>
                    </div>
                    <div className="columns is-multiline">
                        <div
                            className="column is-6 has-vertically-aligned-content"
                            data-aos="fade-right"
                        >
                            <p className="is-larger">
                                &emsp;&emsp;
                                <strong>
                                    Experienced software engineer with a background in communications and business.
                                </strong>
                            </p>
                            <br />
                            <p>
                                I'm a software engineer with a passion for developing innovative and user-friendly web applications.
                                <br></br>
                                <br></br>
                                With experience in JavaScript, Python, Node.js, React, Redux, Flask, SQL, Git, HTML5, CSS3, and WordPress - I have successfully delivered several projects, including a real-time stock exchange platform, a real-time messaging application, and a treehouse rental platform.
                                <br></br>
                                <br></br>
                                My strong communication skills and project management experience, developed through my previous role as Communications Manager, enable me to work effectively with team members and deliver high-quality results. I hold a Bachelor's Degree in Communications & Business from the University of Colorado @ Boulder.
                            </p>
                            <br />
                            <div className="is-divider"></div>
                            <div className="columns about-links">
                                <div className="column">
                                    <p className="heading">
                                        <strong>Email Me</strong>
                                    </p>
                                    <p className="subheading">
                                        hello@example.com
                                    </p>
                                </div>
                                <div className="column">
                                    <p className="heading">
                                        <strong>LinkedIn</strong>
                                    </p>
                                    <p className="subheading">
                                        <span>
                                            <a href="https://www.linkedin.com/in/andrew-bierman/">
                                                <i className="fab fa-linkedin fa-lg"></i>
                                            </a>
                                        </span>
                                    </p>
                                </div>
                                <div className="column">
                                    <p className="heading">
                                        <strong>GitHub</strong>
                                    </p>
                                    <p className="subheading">
                                        <span>
                                            <a href="https://github.com/andrew-bierman">
                                                <i className="fab fa-github fa-lg"></i>
                                            </a>
                                        </span>
                                    </p>
                                </div>
                                <div className="column">
                                    <p className="heading">
                                        <strong>View my full portfolio</strong>
                                    </p>
                                    <p className="subheading">
                                        andrewbierman.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="column is-6 right-image " data-aos="fade-left">
                            <img
                                className="is-rounded"
                                src="https://picsum.photos/id/366/600/375"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div >
            {/* <!-- End About Me Content --> */}
        </>
    )
}

export default AboutMe
import React from 'react'
// import '../images/coding_pic.jpg'
import about_me_pic from '../images/about_me_pic.jpg'
import headshot from '../images/headshot.jpg'

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
                            <p>
                                <strong>
                                    <i className="fad fa-solid fa-map-marker-alt fa-lg"></i>
                                    &nbsp;
                                    Washington D.C.
                                </strong>
                            </p>
                            <br></br>
                            <div className="is-divider"></div>
                            <div className="columns about-links">
                                {/* <div className="column">
                                    <p className="heading">
                                        <strong>Email Me</strong>
                                    </p>
                                    <p className="subheading">
                                        abbierman101@gmail.com
                                    </p>
                                </div> */}
                                <div className="column">
                                    {/* <p className="heading">
                                        <strong>LinkedIn</strong>
                                    </p> */}
                                    {/* <p className="subheading"> */}
                                    <a href="https://www.linkedin.com/in/andrew-bierman/">
                                        <span className='icon is-large'>
                                            <span className='icon'>
                                                <i className="fab fa-linkedin fa-2x">
                                                </i>
                                            </span>
                                        </span>
                                    </a>
                                    {/* </p> */}
                                </div>
                                <div className="column">
                                    {/* <p className="heading">
                                        <strong>GitHub</strong>
                                    </p> */}
                                    {/* <p className="subheading"> */}
                                    <a href="https://github.com/andrew-bierman">
                                        <span className='icon is-large'>
                                            <span>
                                                <i className="fab fa-github fa-2x">
                                                </i>
                                            </span>
                                        </span>
                                    </a>
                                    {/* </p> */}
                                </div>
                                <div className="column">
                                    <p className="heading">
                                        <strong>View my full portfolio</strong>
                                    </p>
                                    <p className="subheading">
                                        <a href='https://andrewbierman.com/'>
                                            andrewbierman.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="column is-6 right-image is-vcentered" data-aos="fade-left">
                            <figure className='box is-vcentered is-inline-block  is-rounded m-0' style={{maxWidth: '400px'}}>
                                <img
                                    className="is-rounded is-vcentered m-0"
                                    // src="https://picsum.photos/id/366/600/375"
                                    src={headshot}
                                    // src="../images/about_me_pic.jpg"
                                    alt=""
                                />

                            </figure>
                            {/* <img
                                className="is-rounded"
                                // src="https://picsum.photos/id/366/600/375"
                                src='https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80'
                                // src="../images/about_me_pic.jpg"
                                alt=""
                            /> */}
                        </div>
                    </div>
                </div>
            </div >
            {/* <!-- End About Me Content --> */}
        </>
    )
}

export default AboutMe
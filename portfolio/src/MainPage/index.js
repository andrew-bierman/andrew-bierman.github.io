import React, { useEffect } from 'react';
import $ from 'jquery';
import './MainPage.css';
import '../Showcase/Showcase.css';
// import '../Navbar';
import Navbar from '../Navbar';
import AboutMe from './AboutMe';
import Work from './Work';
import ViewResume from './ViewResume';
import Skills from './Skills';
import Contact from './Contact';
import AOS from 'aos';

const MainPage = () => {
    useEffect(() => {
        AOS.init({
            easing: "ease-out",
            duration: 800,
        });
    }, [])

    return (
        <div>
            <div>
                {/* <!-- Begin Preloader --> */}
                <div className="preloader-wrapper">
                    <div className="preloader">
                        <img src="img/preloader.gif" alt="" />
                    </div>
                </div>
                {/* <!-- End Preloader--> */}
                {/* <!-- Begin Scroll Up Button --> */}

                <form action="#home">
                    <button id="toTop" title="Go to top">
                        <i className="fas fa-angle-up"></i>
                    </button>
                </form>
                {/* <!-- End Scroll Up Button --> */}

                {/* <!-- Begin Header --> */}
                <div className="header-wrapper" id="home">
                    {/* <!-- Begin Hero --> */}
                    <section className="hero is-large">
                        {/* <div className="overlay-animation is-large">
                            <div className="hero-body">
                                <div className="container has-text-centered">
                                </div>
                            </div>
                        </div> */}
                        <Navbar />

                        {/* <!-- Begin Mobile Nav --> */}
                        {/* </nav> */}
                        {/* <!-- End Mobile Nav --> */}
                        {/* <!-- Begin Hero Content--> */}
                        <div className="hero-body">
                            <div className="container has-text-centered">
                                <h1 className="subtitle">Hey there, I'm</h1>
                                <h2 className="title">Andrew</h2>
                                <h1 className="subtitle profession">A Software Engineer</h1>
                            </div>
                        </div>
                        {/* <!-- End Hero Content--> */}
                        {/* <!-- Begin Hero Menu --> */}
                        <div className="hero-foot ">
                            <div className="hero-foot--wrapper">
                                <div className="columns">
                                    <div className="column is-12 hero-menu-desktop has-text-centered ">
                                        <ul>
                                            <li className="is-active has-text-primary">
                                                <a href="#home">Home</a>
                                            </li>
                                            <li>
                                                <a href="#about-me">About Me</a>
                                            </li>
                                            {/* <li>
                                                <a href="#services">Services</a>
                                            </li> */}
                                            <li>
                                                <a href="#skills">Skills</a>
                                            </li>
                                            <li>
                                                <a href="#my-work">My Work</a>
                                            </li>
                                            <li>
                                                <a href="#contact">Contact</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Hero Menu --> */}
                    </section>
                    {/* <!-- End Hero --> */}
                </div>
                {/* <!-- End Header --> */}

                {/* <!-- Begin Main Content --> */}
                <div className="main-content">
                    {/* <!-- Begin About Me Section --> */}
                    <AboutMe />
                    {/* <!-- End About Me Section --> */}




                    {/* <!-- Begin Work Content --> */}
                    <Work />
                    {/* <!-- End Work Content --> */}

                    {/* <!-- Begin Services Content --> */}
                    <Skills />
                    {/* <!-- End Services Content --> */}
                    {/* <!-- Begin Skills Content --> */}
                    {/* <div className="section-light skills" id="skills">
                        <div className="container">
                            <div className="columns is-multiline">
                                <div className="column is-12 about-me">
                                    <h1 className="title has-text-centered section-title">Skills</h1>
                                </div>
                                <div
                                    className="column is-6"
                                    data-aos="fade-in"
                                    data-aos-easing="linear"
                                >
                                    <h1>Adobe Experience Design</h1>
                                    <progress className="progress" value="70" max="100">30%</progress>
                                    <h1>Adobe After Effects</h1>
                                    <progress className="progress" value="65" max="100">30%</progress>
                                    <h1>Visual Studio Code</h1>
                                    <progress className="progress" value="58" max="100">45%</progress>
                                    <h1>Sketch</h1>
                                    <progress className="progress" value="90" max="100">60%</progress>
                                </div>
                                <div
                                    className="column is-6"
                                    data-aos="fade-in"
                                    data-aos-easing="linear"
                                >
                                    <h1>HTML</h1>
                                    <progress className="progress" value="85" max="100">30%</progress>
                                    <h1>CSS</h1>
                                    <progress className="progress" value="95" max="100">30%</progress>
                                    <h1>VueJS</h1>
                                    <progress className="progress" value="70" max="100">45%</progress>
                                    <h1>React</h1>
                                    <progress className="progress" value="60" max="100">60%</progress>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <!-- End Skills Content --> */}

                    {/* <!-- Begin View Resume Section */}
                    <ViewResume />
                    {/* <!-- End View Resume Section */}

                    {/* <!-- Begin Contact Content --> */}
                    <Contact />
                    {/* <!-- End Contact Content --> */}

                </div>
                {/* <!-- End Main Content --> */}

                {/* <!-- Begin Footer --> */}
                <div className="footer">
                    <p>
                        {/* Add icons and links for github and linkedin */}
                        <a href="https://github.com/andrew-bierman">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/andrew-bierman/">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <strong className="white">
                            <a>
                                Andrew Bierman
                            </a>
                        </strong>
                        &nbsp; &copy; {new Date().getFullYear()}
                    </p>
                </div>
                {/* <!-- End Footer --> */}


            </div >
        </div >
    )
};

export default MainPage;
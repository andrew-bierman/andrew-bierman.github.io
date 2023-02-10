import React from "react";

const ViewResume = () => {
    return (
        <>
            {/* <!-- Begin ViewResume Section --> */}
            <div className="section-dark resume">
                        <div className="container">
                            <div
                                className="columns is-multiline"
                                data-aos="fade-in"
                                data-aos-easing="linear"
                            >
                                <div className="column is-12 about-me">
                                    <h1 className="title has-text-centered section-title">
                                        View My Resume
                                    </h1>
                                </div>
                                <div className="column is-10 has-text-centered is-offset-1">
                                    <h2 className="subtitle">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et doloremagna aliqua
                                    </h2>
                                    <form action="example.docs">
                                        <button className="button">
                                            Resume&emsp;
                                            {/* <i className="fad fa-download fa-lg"></i> */}
                                            <i className="fad fa-solid fa-file fa-lg"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            {/* End ViewResume Section */}
        </>
    );
};

export default ViewResume;
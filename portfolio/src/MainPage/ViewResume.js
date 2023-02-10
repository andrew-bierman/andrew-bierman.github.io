import React from "react";

const ViewResume = () => {
    const handleClick = (e) => {
        e.preventDefault();
        window.open("https://www.linkedin.com/in/andrew-bierman/");
    };
    
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
                                        Click the button below to view my LinkedIn profile.
                                    </h2>
                                    <form action="example.docs">
                                        <button className="button" onClick={handleClick}>
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
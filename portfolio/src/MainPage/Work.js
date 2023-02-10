import React from "react";
import archer from "../images/archer_screenshot.png";
import whiskord from "../images/whiskord_screenshot.png";
import treebnb from "../images/treebnb_screenshot.png";

const Work = () => {
    const handleClick = (link) => {
        window.open(link);
    };

    const cards = [
        {
            title: "Archer",
            subtitle: "A real-time stock exchange platform",
            description: [
                `Tech Stack: JavaScript, Python, Flask, React/Redux, SQLAlchemy, and PostgreSQL.`,
                `Delivered a Robinhood-inspired experience, enabling users to trade over 7,500 stocks, monitor portfolio, create watchlists, and stay informed with financial news updates.`,
                `Implemented interactive charts for stock monitoring and portfolio management, utilizing financial APIs for real-time data updates.`,
                `Crafted a user-friendly interface with React, Redux, and ensured efficient database management with SQLAlchemy and PostgreSQL.`],
            image_link: "https://fontawesome.com/social/bow-arrow?f=classic&s=&v=5",
            image: archer,
            live_link: "https://archer.onrender.com/",
            repo_link: 'https://github.com/andrew-bierman/Archer'
        },
        {
            title: "Whiskord",
            subtitle: "A real-time messaging application",
            description: [
                "Tech Stack: JavaScript, Python, Flask, SocketIO, React/Redux, SQLAlchemy, and PostgreSQL",
                "Facilitated seamless communication with a platform allowing users to join/create servers, channels, and direct messages.",
                "Worked in collaboration with three other engineers to manage tasks and version control through Git.",
                "Utilized WebSocket and Socket.io library for real-time communication for all message CRUD features"
            ],
            image_link: "https://fontawesome.com/social/cat?f=classic&s=&v=5",
            image: whiskord,
            live_link: "https://whiskord-htb4.onrender.com/",
            repo_link: 'https://github.com/Me-legna/Whiskord'
        },
        {
            title: "TreeBnb",
            subtitle: "A treehouse rental platform",
            description: [
                "Built a treehouse rental platform with JavaScript, Node.js, Express, and React/Redux",
                "Developed a user-friendly application inspired by Airbnb, allowing users to create listings, schedule bookings, and leave reviews.",
                "Deployed a fully functional Express REST API for efficient data management and front-end/back-end communication.",
                "Created a dynamic, responsive, and user-friendly front-end using React and Redux to provide an optimal user experience.",
            ],
            image_link: "https://fontawesome.com/social/tree?f=classic&s=&v=5",
            image: treebnb,
            live_link: "https://treebnb.onrender.com/",
            repo_link: 'https://github.com/andrew-bierman/TreeBnb'
        },
    ]


    return (
        <>
            {/* <!-- Begin Work Content --> */}


            <div className="section-dark my-work" id="my-work">
                <div className="container">
                    <div className="column is-12">
                        <h1 className="title has-text-centered section-title">My Work</h1>
                    </div>
                    <div
                        className="columns is-multiline"
                        data-aos="fade-in"
                        data-aos-easing="linear"
                    >
                        {/* <div id="app" className="row columns is-multiline"> */}
                        {cards.map((card, index) => (
                            <div className="column is-4" key={index}>
                                <div className="card is-fullheight is-justify-content-space-between custom-card">
                                    <div className="card-image">
                                        <figure className="image is-16by9">
                                            <img src={card.image} alt="Image" />
                                        </figure>
                                    </div>

                                    <div className="card-header">
                                        <div className="media-content block">
                                            <p className="title is-4"></p>
                                            <div>
                                                <span className="title is-3 block">
                                                    <a href={card.live_link}>
                                                        {card.title}
                                                    </a>
                                                </span>
                                            </div>
                                            <div className="block"></div>
                                            <div className="subtitle is-5 block">
                                                {card.subtitle}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <div className="content has-text-left">
                                            <ul>
                                                {card.description.map((bullet, index) => (
                                                    <div key={index}>
                                                        {index > 0 ?
                                                            <li key={index} className='block'>
                                                                {bullet}
                                                            </li>
                                                            :
                                                            <li key={index} className='block'>
                                                                <strong>
                                                                    {bullet}
                                                                </strong>
                                                            </li>
                                                        }
                                                    </div>
                                                ))}
                                            </ul>

                                        </div>
                                    </div>
                                    <div className="card-footer custom-card-footer">
                                        <a className='card-footer-item'>
                                            <button className="button is-info is-outlined" onClick={() => handleClick(card.repo_link)}>
                                                <span className="icon">
                                                    <i className="fab fa-github"></i>
                                                </span>
                                                <span>View Repo</span>
                                            </button>
                                        </a>

                                        <a className='card-footer-item'>
                                            <button className="button is-info is-outlined" onClick={() => handleClick(card.live_link)}>
                                                <span className="icon">
                                                    <i className="fas fa-external-link-alt"></i>
                                                </span>
                                                <span>Live Demo</span>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}


                        {/* 
                        <div className="column is-3">
                            <a href="#">
                                <figure
                                    className="image is-2by1 work-item"
                                // style="background-image: url('https://picsum.photos/320/180?image=0');"
                                ></figure>
                            </a>
                        </div>
                        <div className="column is-3">
                            <a href="#">
                                <figure
                                    className="image is-2by1 work-item"
                                // style="background-image: url('https://picsum.photos/320/180?image=10');"
                                ></figure>
                            </a>
                        </div>
                        <div className="column is-3">
                            <a href="#">
                                <figure
                                    className="image is-2by1 work-item"
                                // style="background-image: url('https://picsum.photos/320/180?image=20');"
                                ></figure>
                            </a>
                        </div>
                        <div className="column is-3">
                            <a href="#">
                                <figure
                                    className="image is-2by1 work-item"
                                // style="background-image: url('https://picsum.photos/320/180?image=30');"
                                ></figure>
                            </a>
                        </div>
                        <div className="column is-3">
                            <a href="#">
                                <figure
                                    className="image is-2by1 work-item"
                                // style="background-image: url('https://picsum.photos/320/180?image=40');"
                                ></figure>
                            </a>
                        </div>
                        <div className="column is-3">
                            <a href="#">
                                <figure
                                    className="image is-2by1 work-item"
                                // style="background-image: url('https://picsum.photos/320/180?image=50');"
                                ></figure>
                            </a>
                        </div>
                        <div className="column is-3">
                            <a href="#">
                                <figure
                                    className="image is-2by1 work-item"
                                // style="background-image: url('https://picsum.photos/320/180?image=60');"
                                ></figure>
                            </a>
                        </div>
                        <div className="column is-3">
                            <a href="#">
                                <figure
                                    className="image is-2by1 work-item"
                                // style="background-image: url('https://picsum.photos/320/180?image=70');"
                                ></figure>
                            </a>
                        </div> 
                        */}
                    </div>
                </div>
            </div>
            {/* <!-- End Work Content --> */}
        </>
    );
};

export default Work;
import React from "react";

const Work = () => {

    const cards = [
        {
            title: "Archer",
            subtitle: "A real-time stock exchange platform",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            image: "https://fontawesome.com/social/bow-arrow?f=classic&s=&v=5",
            link: "https://archer.onrender.com/"
        },
        {
            title: "Whiskord",
            subtitle: "A real-time messaging application",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            image: "https://fontawesome.com/social/cat?f=classic&s=&v=5",
            link: "https://whiskord-htb4.onrender.com/"
        },
        {
            title: "TreeBnb",
            subtitle: "A treehouse rental platform",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            image: "https://fontawesome.com/social/tree?f=classic&s=&v=5",
            link: "https://treebnb.onrender.com/"
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
                                <div className="card large">
                                    <div className="card-image">
                                        <figure className="image is-16by9">
                                            <img src={card.image} alt="Image" />
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <div className="media">
                                            {/* <div className="media-left">
                                                            <figure className="image is-48x48">
                                                                <img src="card.avatar" alt="Image" />
                                                            </figure>
                                                        </div> */}
                                            <div className="media-content">
                                                <p className="title is-4 no-padding"></p>
                                                <p>
                                                    <span className="title is-6">
                                                        <a href={card.link}>
                                                            {card.title}
                                                        </a>
                                                    </span>
                                                </p>
                                                <p className="subtitle is-6">
                                                    {card.subtitle}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="content">
                                            {card.description}
                                        </div>
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
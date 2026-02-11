import React from 'react';

const Skills = () => {
    return (
        <>
            {/* <!-- Begin skills Content --> */}
            < div className="section-color services" id="skills" >
                <div className="container">
                    <div className="columns is-multiline">
                        <div
                            className="column is-12 about-me"
                            data-aos="fade-in"
                            data-aos-easing="linear"
                        >
                            <h1 className="title has-text-centered section-title">Skills</h1>

                            <h2 className="subtitle">
                                I have experience with the following technologies:
                            </h2>
                            <br />
                        </div>
                        <div className="columns is-12">
                            <div
                                className="column is-4 has-text-centered"
                                data-aos="fade-in"
                                data-aos-easing="linear"
                            >
                                <i className="fa-brands fa-js"></i>
                                <hr />
                                <h2>
                                    JavaScript is a high-level, interpreted programming language.
                                </h2>
                            </div>
                            <div
                                className="column is-4 has-text-centered"
                                data-aos="fade-in"
                                data-aos-easing="linear"
                            >
                                <i className="fa-brands fa-python"></i>
                                <hr />
                                <h2>
                                    Python is an interpreted, high-level and general-purpose programming language.
                                </h2>
                            </div>
                            <div
                                className="column is-4 has-text-centered"
                                data-aos="fade-in"
                                data-aos-easing="linear"
                            >
                                <i className="fa-brands fa-react"></i>
                                <hr />
                                <h2>
                                    React is an open-source, front end, JavaScript library for building user interfaces or UI components.
                                </h2>
                            </div>
                        </div>
                        <hr />
                        <div className="columns is-12">
                            <div
                                className="column is-4 has-text-centered"
                                data-aos="fade-in"
                                data-aos-easing="linear"
                            >
                                <i className="fa-brands fa-typescript"></i>
                                <hr />
                                <h2>
                                    TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
                                </h2>
                            </div>
                            <div
                                className="column is-4 has-text-centered"
                                data-aos="fade-in"
                                data-aos-easing="linear"
                            >
                                <i className="fa-brands fa-bun"></i>
                                <hr />
                                <h2>
                                    Bun is a fast JavaScript runtime, package manager, and test runner. Built with Zig.
                                </h2>
                            </div>
                            <div
                                className="column is-4 has-text-centered"
                                data-aos="fade-in"
                                data-aos-easing="linear"
                            >
                                <i className="fa-brands fa-rust"></i>
                                <hr />
                                <h2>
                                    Rust is a language empowering everyone to build reliable and efficient software. Used for performance-critical components.
                                </h2>
                            </div>
                        </div>
                        <hr />
                        <div className="columns is-12">
                            <div
                                className="column is-4 has-text-centered"
                                data-aos="fade-in"
                                data-aos-easing="linear"
                            >
                                <i className="fa-brands fa-golang"></i>
                                <hr />
                                <h2>
                                    Go is an open-source programming language that makes it easy to build simple, reliable, and efficient software.
                                </h2>
                            </div>
                            <div
                                className="column is-4 has-text-centered"
                                data-aos="fade-in"
                                data-aos-easing="linear"
                            >
                                <i className="fa-solid fa-robot"></i>
                                <hr />
                                <h2>
                                    Vercel AI SDK provides tools for building AI-powered applications with streaming, React hooks, and provider integrations.
                                </h2>
                            </div>
                            <div
                                className="column is-4 has-text-centered"
                                data-aos="fade-in"
                                data-aos-easing="linear"
                            >
                                <i className="fa-solid fa-network-wired"></i>
                                <hr />
                                <h2>
                                    MCP (Model Context Protocol) is a protocol for connecting AI assistants to external tools and data sources.
                                </h2>
                            </div>
                        </div>
                        <hr />
                        <div className="columns is-12">
                            <div
                                className="column is-4 has-text-centered"
                                data-aos="fade-in"
                                data-aos-easing="linear"
                            >
                                <i className="fa-solid fa-brain"></i>
                                <hr />
                                <h2>
                                    RAG (Retrieval-Augmented Generation) combines retrieval systems with LLMs for more accurate and contextual responses.
                                </h2>
                            </div>
                            <div
                                className="column is-4 has-text-centered"
                                data-aos="fade-in"
                                data-aos-easing="linear"
                            >
                                <i className="fa-solid fa-database"></i>
                                <hr />
                                <h2>
                                    Vector databases (Pinecone, pgvector, Chroma) enable semantic search and storage of embeddings for AI applications.
                                </h2>
                            </div>
                            <div
                                className="column is-4 has-text-centered"
                                data-aos="fade-in"
                                data-aos-easing="linear"
                            >
                                <i className="fa-brands fa-node"></i>
                                <hr />
                                <h2>
                                    Node.js is an open-source, cross-platform, back-end JavaScript runtime environment.
                                </h2>
                            </div>
                        </div>
                        <hr />
                        <div className="columns is-12">
                            <div
                                className="column is-4 has-text-centered"
                                data-aos="fade-in"
                                data-aos-easing="linear"
                            >
                                <i className="fa-brands fa-git-alt"></i>
                                <hr />
                                <h2>
                                    Git is a distributed version-control system for tracking changes in source code during software development.
                                </h2>
                            </div>
                            <div
                                className="column is-4 has-text-centered"
                                data-aos="fade-in"
                                data-aos-easing="linear"
                            >
                                <i className="fa-brands fa-aws"></i>
                                <hr />
                                <h2>
                                    Amazon Web Services (AWS) provides on-demand cloud computing platforms and APIs.
                                </h2>
                            </div>
                            <div
                                className="column is-4 has-text-centered"
                                data-aos="fade-in"
                                data-aos-easing="linear"
                            >
                                <i className="fa-brands fa-docker"></i>
                                <hr />
                                <h2>
                                    Docker enables containerization for consistent deployments and scalable infrastructure.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/* <!-- End skills Content --> */}
        </>
    )
}

export default Skills;

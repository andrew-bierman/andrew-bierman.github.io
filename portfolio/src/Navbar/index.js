import React from 'react'

function Navbar() {
    const [isActive, setisActive] = React.useState(false)

    return (
        <nav className='navbar is-transparent is-hidden-desktop' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
                <a href='/' className='navbar-item'>
                    <img
                        src='https://bulma.io/images/bulma-logo.png'
                        alt='Logo'
                        width='112'
                        height='28'
                    />
                </a>

                <a
                    onClick={() => {
                        setisActive(!isActive)
                    }}
                    role='button'
                    className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
                    aria-label='menu'
                    aria-expanded='false'
                    data-target='navbarBasicExample'
                >
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                </a>
            </div>
            <div id='navbarBasicExample' className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                <div className='navbar-end'>
                    <div className="navbar-item">
                        <a className="navbar-item" href="#home">
                            Home
                        </a>
                    </div>
                    <div className="navbar-item">
                        <a className="navbar-item" href="#about-me">
                            About Me
                        </a>
                    </div>
                    <div className="navbar-item">
                        <a className="navbar-item" href="#services">
                            Services
                        </a>
                    </div>
                    <div className="navbar-item">
                        <a className="navbar-item" href="#skills">
                            Skills
                        </a>
                    </div>
                    <div className="navbar-item">
                        <a className="navbar-item" href="#my-work">
                            My Work
                        </a>
                    </div>
                    <div className="navbar-item">
                        <a className="navbar-item" href="#contact">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar
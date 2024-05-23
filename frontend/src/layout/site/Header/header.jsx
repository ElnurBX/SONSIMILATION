
import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
const Header = () => {
return (
    <header className='mb-5 header' >
        <div className="header__navbar">
        <nav className="navbar   m-auto">
        <div className="header__top d-flex align-content-center justify-content-center p-5 col-12">
            <Link to="/"><img src="https://preview.colorlib.com/theme/wines/images/logo.png" alt="" /></Link> 
        </div>
        <div className="container-fluid justify-content-center  d-flex">
            <div className="container d-none d-xxl-flex  d-xl-flex d-lg-flex justify-content-center">
            <nav className="navbar  navbar-expand-lg ">
                <div className="container-fluid">

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                        <Link className="nav-link" href="#">Features</Link>
                        <Link className="nav-link" href="#">Pricing</Link>
                        <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
                    </div>
                    </div>
                </div>
                </nav>
            </div>
            <button className="navbar-toggler 	d-flex d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                    <Link  className="nav-link active" aria-current="page" href="#">Home</Link>
                </li>
                <li className="nav-item">
                    <Link  className="nav-link" href="#">Link</Link>
                </li>
                <li className="nav-item dropdown">
                    <Link  className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                    </Link>
                    <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" href="#">Action</Link></li>
                    <li><Link className="dropdown-item" href="#">Another action</Link></li>
                
                    <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                    </ul>
                </li>
                </ul>
            </div>
            </div>
        </div>
        </nav>
        </div>
    </header>
)
}

export default Header
                            
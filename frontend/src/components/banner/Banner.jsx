import React from 'react'
import './Banner.scss'
const Banner = () => {
  return (
    <section className='banner'>
        <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            
        </div>
        <div className="carousel-inner container">
            <div className="carousel-item active">
            <div className="carousel-caption h-100 d-none d-md-block ">
                <h5 className='fs-3 fw-normal'>Royal Wine</h5>
                <h2 className='display-1 fw-bolder'>Grape Wine</h2>
            </div>
            <img src="https://preview.colorlib.com/theme/wines/images/hero_1.jpg.webp" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <div className="carousel-caption h-100 d-none d-md-block">
                <h5 className='fs-3 fw-normal'>Welcome</h5>
                <h2 className='display-1 fw-bolder'>Wines For Everyone</h2>
            </div>
            <img src="https://preview.colorlib.com/theme/wines/images/hero_2.jpg.webp" className="d-block w-100" alt="..."/>
            </div>
            
        </div>
        <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon text-black" aria-hidden="true"><i className="fa-solid fa-arrow-left fa-xl"></i></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon text-black"  aria-hidden="true"> <i className="fa-solid fa-arrow-right fa-xl"></i></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    </section>
  )
}

export default Banner
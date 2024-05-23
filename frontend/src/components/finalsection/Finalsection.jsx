import React from 'react'
import './finalsec.scss'
import { Link } from 'react-router-dom'
const Finalsection = () => {
  return (
    <section className='finalsec crud-card' >
         <div className="crud-card__heaed text-center">
                <h2>Our Products</h2>
                <h5 className='fs-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, perspiciatis!</h5>
                <Link to="/shop" className='text-decoration-none  fs-5'>View All Products <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-12 p-5">
                    <img src="https://preview.colorlib.com/theme/wines/images/img_1.jpg.webp" className='w-100' alt="" />
                    <h4>What You Need To Know About Premium Rosecco</h4>
                    <p className='text-secondary-emphasis'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                    <span>Dave Rogers in News</span>
                </div>
                <div className="col-md-4 col-12 p-5">
                    <img src="https://preview.colorlib.com/theme/wines/images/img_2.jpg.webp" className='w-100' alt="" />
                    <h4>What You Need To Know About Premium Rosecco</h4>
                    <p className='text-secondary-emphasis'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                    <span>Dave Rogers in News</span>
                </div>
                <div className="col-md-4 col-12 p-5">
                    <img src="https://preview.colorlib.com/theme/wines/images/img_3.jpg.webp" className='w-100' alt="" />
                    <h4>What You Need To Know About Premium Rosecco</h4>
                    <p className='text-secondary-emphasis'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                    <span>Dave Rogers in News</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Finalsection
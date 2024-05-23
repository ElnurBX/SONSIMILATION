import React from 'react'
import "./CrudCard.scss"
import {Link} from "react-router-dom"
const CrudCard = ({data,addBasket}) => {

    return (
        <section className='crud-card container mt-5 mb-5'>
            <div className="crud-card__heaed text-center">
                <h2>Our Products</h2>
                <h5 className='fs-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, perspiciatis!</h5>
                <Link to="/shop" className='text-decoration-none  fs-5'>View All Products <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div className="crud-card__body">
                <div className="container">
                    <div className="row pt-5">
                        
                        {
                            data.map((item,index)=>{
                                const {name ,img,price} = item
                                return(
                                    <div className="col-md-4 col-12" key={index}>
                                        <div className="Crud__Card">
                                            <div className="Crud__Card__img">
                                                <img className='w-100' src={img} alt=""/>  
                                            </div>
                                            <div className="Crud__Card__body text-center">
                                                <h5>{name}</h5>
                                                <span>${price}</span>
                                            </div>
                                            <div className="Crud__Card__hidden text-center">
                                                <Link to={`/det/${item._id}` }className='text-decoration-none h5' >{name}</Link>
                                                <span>${price}</span>
                                                <p>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                                </p>
                                                <button onClick={()=>addBasket(item)} className='btn'><i className="fa-solid fa-bag-shopping"></i> Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CrudCard
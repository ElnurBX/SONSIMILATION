import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Details = () => {
    const {id}=useParams()
    const [wines,setWines]=useState({})
    useEffect(() => {
        axios.get(`http://localhost:8080/api/Wines/${id}`).then(res=>{
            setWines({...res.data})
        })
    },[])
    const {img,name,price,disc}=wines
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-6"><img src={img}  className='w-100' alt=""/></div>
                    <div className="col-6">
                        <h1>{name}</h1>
                        <p>{disc}</p>
                        <p>{price}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Details
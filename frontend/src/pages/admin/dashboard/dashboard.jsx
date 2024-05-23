
    import React, { useContext } from 'react'
    import { Helmet } from 'react-helmet'
    import MainContext from '../../../context/context'
import axios from 'axios'
    
    const Dashboard = () => {
        const {data,setdata} = useContext(MainContext)
        const DeleteItem=(id)=>{
            axios.delete(`http://localhost:8080/api/Wines/${id}`).then((res)=>{
                setdata([...res.data])
            })
            
        }
        return (
        <>
                <Helmet>
                    <title>Dashboard</title>
                </Helmet>
                <main>
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item,index)=>{
                            const {name,disc,img,price,_id}=item
                            return(
                                <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{name}</td>
                                <td>{disc}</td>
                                <td><img src={img} width={"50px"} height={"50px"} alt=""/></td>
                                <td>{price}</td>
                                <td><button onClick={()=>DeleteItem(_id)}> Delete</button></td>
                                </tr>
                                
                            )
                        
                        })
                    }
                </tbody>
                </table>
                </main>
        </>
        )
    }
    
    export default Dashboard
        
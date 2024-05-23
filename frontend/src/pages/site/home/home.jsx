import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import MainContext from '../../../context/context'
import Banner from '../../../components/banner/Banner'
import CrudCard from '../../../components/crud/CrudCard'
import Paralax from '../../../components/Paralax/Paralax'
import MultipleItems from '../../../components/Multicarusel/multicarusel'
import Finalsection from '../../../components/finalsection/Finalsection'

    
    const Home = () => {
        const {data,addBasket} = useContext(MainContext)
        return (
        <>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <main>
                    <Banner/>
                    <CrudCard data={data.slice(0,3)}  addBasket={addBasket}/>
                    <Paralax/>
                    <MultipleItems/>
                    <Finalsection/>
                </main>
        </>
        )
    }
    
    export default Home
        
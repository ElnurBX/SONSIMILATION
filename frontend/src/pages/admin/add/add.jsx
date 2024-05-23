
    import React, { useContext } from 'react'
    import { Helmet } from 'react-helmet'
    import MainContext from '../../../context/context'
    import { Formik } from 'formik';
    import axios from 'axios';
    const Add = () => {
        const {setdata} = useContext(MainContext)
        return (
        <>
                <Helmet>
                    <title>Add</title>
                </Helmet>
                <main>
                <Formik
                initialValues={{ name: '', img: '', disc: '', price: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                    errors.name = 'Required';
                    } 
                    return errors;
                }}
                onSubmit={(values) => {
                    axios.post('http://localhost:8080/api/Wines',values).then((res)=>{setdata([...res.data])}).catch((err)=>{console.log(err)})
                }}
                >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
        
                        <input
                            type="text"
                            name="name"
                            placeholder="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        {errors.name && touched.name && errors.name}
                        <input
                            type="text"
                            name="img"
                            placeholder="img"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.img}
                        />
                        {errors.img && touched.img && errors.img}
                        <input
                            type="text"
                            name="disc"
                            placeholder="disc"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.disc}
                        />
                        {errors.disc && touched.disc && errors.disc}
                        <input
                            type="number"
                            name="price"
                            placeholder="price"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.price}
                        />
                        {errors.price && touched.price && errors.price}
                    <button type="submit" >
                        Submit
                    </button>
                    </form>
                )}
                </Formik>
                </main>
        </>
        )
    }
    
    export default Add
        
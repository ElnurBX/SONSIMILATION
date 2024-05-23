import React, { useContext } from 'react';
import './Basket.scss';
import MainContext from '../../../context/context';
import { Helmet } from 'react-helmet';

const Basket = () => {
    const { basket, addBasket, delBasket } = useContext(MainContext);
    let sum=0;
    return (
        <>
            <Helmet>
                <title>Basket</title>
            </Helmet>
            <main>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Image</th>
                            <th scope="col">Price</th>
                            <th scope="col">Total</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        basket.map((items, index) => {
                            const { item, count } = items;
                            const { name, disc, img, price } = item;
                            sum += price * count;
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{name}</td>
                                    <td>{disc.slice(0, 30)}</td>
                                    <td><img src={img} width="50" height="50" alt="" /></td>
                                    <td>{price}</td>
                                    <td>{price * count}</td>
                                    <td>
                                        <button onClick={() => delBasket(item)}> - </button>
                                        {count}
                                        <button onClick={() => addBasket(item)}> + </button>
                                    </td>
                                </tr>
                            );
                        })
                        
                        }
                        <td>Total: {sum}</td>
                    </tbody>
                </table>
            </main>
        </>
    );
}

export default Basket;

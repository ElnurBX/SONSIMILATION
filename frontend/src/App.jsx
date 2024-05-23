import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./Routes/routes";
import MainContext from "./context/context";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const router = createBrowserRouter(ROUTES);

    const [basket, setBasket] = useState(() => JSON.parse(localStorage.getItem("basket")) || []);

    const modifyBasket = (item, action) => {
        const newBasket = [...basket];
        const target = newBasket.find(x => x.item._id === item._id);

        if (target) {
            target.count += action === "add" ? 1 : -1;
            if (target.count === 0) {
                const filteredBasket = newBasket.filter(x => x.item._id !== target.item._id);
                newBasket.length = 0;
                newBasket.push(...filteredBasket);
            }
        } else {
            if (action === "add") {
                newBasket.push({ item, count: 1 });
            }
        }

        localStorage.setItem("basket", JSON.stringify(newBasket));
        setBasket(newBasket);
    };

    const addBasket = (item) => modifyBasket(item, "add");
    const delBasket = (item) => modifyBasket(item, "del");





    
    useEffect(() => {
        axios.get('http://localhost:8080/api/Wines')
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(true);
                setLoading(false);
            });
    }, []);

    return (
        <MainContext.Provider value={{ data, setData, loading, setLoading, error, setError, basket, setBasket, addBasket, delBasket }}>
            <RouterProvider router={router} />
        </MainContext.Provider>
    );
}

export default App;

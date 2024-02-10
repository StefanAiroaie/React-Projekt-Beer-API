
import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const mainContext = createContext()


const MainProvider = ({ children }) => {


    const apiLinkProducts = "https://ih-beers-api2.herokuapp.com/beers"
    const apiLinkRandom = `https://ih-beers-api2.herokuapp.com/beers/random`

    const [fetchProduct, setFetchProduct] = useState(false)
    const [products, setProducts] = useState([])



    useEffect(() => {
        const fetchApi = async () => {
            const fetchResult = await axios.get(apiLinkProducts)
            console.log("fetchResult", fetchResult.data);
            setProducts(fetchResult.data)
        }
        fetchProduct == true ? fetchApi() : null
    }, [fetchProduct])





    return (<>
        <mainContext.Provider
            value={{ products, fetchProduct, setFetchProduct }}
        >
            {children}
        </mainContext.Provider >

    </>);
}

export default MainProvider;


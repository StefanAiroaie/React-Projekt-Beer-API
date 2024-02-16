
import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const mainContext = createContext()


const MainProvider = ({ children }) => {


    const apiLinkProducts = "https://ih-beers-api2.herokuapp.com/beers"
    const apiLinkRandom = `https://ih-beers-api2.herokuapp.com/beers/random`

    const [fetchProduct, setFetchProduct] = useState(false)
    const [products, setProducts] = useState([])
    const [productDetails, setProductDetails] = useState([])
    const [id, setId] = useState("65c71f1d9ad5cd00028bf21e")
    const [randomBeer, setRandomBeer] = useState(null)





    const apiLink = {
        products: `https://ih-beers-api2.herokuapp.com/beers`,
        detailProduct: `https://ih-beers-api2.herokuapp.com/beers/`,
        randomProduct: `https://ih-beers-api2.herokuapp.com/beers/random`
    }




    // const dasIdVomURL = useParams()
    // console.log("dasIdVomURL", dasIdVomURL.idDatLaURL);

    // const [numePeCareIlDauMaiDeparte, setNumePeCareIlDauMaiDeparte] = useState(null)

    // let newApiLink = `https://ih-beers-api2.herokuapp.com/beers/${dasIdVomURL.idDatLaURL}`
    // console.log(newApiLink);






    // fetch products nur wenn man die Products Seite ladet
    useEffect(() => {
        const fetchApi = async () => {
            const fetchResult = await axios.get(apiLink.detailProduct)
            console.log("Products Array", fetchResult.data);
            setProducts(fetchResult.data)
        }
        fetchProduct == true ? fetchApi() : null
    }, [fetchProduct])



    // fetch RANDOM product nur wenn man die RandomProduct Seite ladet
    useEffect(() => {
        const apiFetch = async () => {
            const raspuns = await axios.get(apiLink.randomProduct)
            console.log("s", raspuns.data._id);
            setRandomBeer(raspuns.data)
            setId(raspuns.id)
        }
        apiFetch()
    }, [])





    // fetch product DETAIL nur wenn man die Products Seite ladet
    useEffect(() => {
        const fetchApi = async () => {
            const fetchResults = await axios.get(`${apiLink.detailProduct}${id}`)
            setProductDetails(fetchResults.data)
        }
        // id !== "" ? fetchApi() : null
        fetchApi()
    }, [id])





    return (<>
        <mainContext.Provider
            value={{ products, fetchProduct, setFetchProduct, productDetails, setProductDetails, id, setId, randomBeer, setRandomBeer }}
        >
            {children}
        </mainContext.Provider >

    </>);
}

export default MainProvider;


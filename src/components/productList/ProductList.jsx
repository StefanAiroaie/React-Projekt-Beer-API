
import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../nav/Nav";
import ProductCard from "../productCard/ProductCard";


const ProductList = () => {

    const apiLink = "https://ih-beers-api2.herokuapp.com/beers"

    const [listaCuBere, setListaCuBere] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {

            const raspunsDeLaAPI = await axios.get(apiLink)
            setListaCuBere(raspunsDeLaAPI.data)
        }

        fetchAPI()


    }, [])

    console.log(listaCuBere);


    return (<>
        <h5>Das ist product list</h5>

        {listaCuBere.map((fiecareFelDeBere, index) => {
            return (
                <div key={index}>
                    <ProductCard
                        numePeCareIlDauMaiDeparte={fiecareFelDeBere}

                    />
                </div>
            )
        }
        )}





        <Nav />
    </>);
}

export default ProductList
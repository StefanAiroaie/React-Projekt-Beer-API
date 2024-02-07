
import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../nav/Nav";
import ProductCard from "../productCard/ProductCard";

import { Link } from "react-router-dom";


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



    return (<>

        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight p-4 text-gray-900">Customers also purchased</h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {listaCuBere.map((product) => (
                        <Link to={`/product/${product._id}`} key={product._id} className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    src={product.image_url}
                                    alt={product.name}
                                    className="h-full w-full object-contain object-center p-4 group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{product.tagline}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>







        <h5>Das ist product list</h5>

        {listaCuBere.map((fiecareFelDeBere, index) => {
            return (
                <div className="productCard" key={index}>
                    <ProductCard
                        numePeCareIlDauMaiDeparte={fiecareFelDeBere}

                    />
                </div>
            )
        }
        )}





        {/* <Nav /> */}
    </>);
}

export default ProductList
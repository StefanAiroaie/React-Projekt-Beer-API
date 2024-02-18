import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import { mainContext } from "../../context/mainProvider";




const ProductDetail = ({ id }) => {

    const { setId, productDetails } = useContext(mainContext)
    const [features, setFeatures] = useState([])


    const bierId = useParams()


    useEffect(() => {
        setId(bierId.id)
    },
        [setId])



    useEffect(() => {

        if (productDetails) {
            setFeatures([
                { name: 'First Brewed', description: `${productDetails.first_brewed}` },
                { name: 'Brewers tips', description: `${productDetails.brewers_tips}` },
                { name: 'Contributed by', description: `${productDetails.contributed_by}` },
                { name: 'Tagline', description: `${productDetails.tagline}` },
                { name: 'Attenuation Level', description: `${productDetails.attenuation_level}` },
                { name: 'Name', description: `${productDetails.name}` },
                { name: 'description', description: `${productDetails.description}` },
                { name: 'Image', description: `${productDetails.image_url}` }
            ])
        }

    }, [productDetails])


    console.log(features);

    return (
        <>
            <NavBar />




            {/* hei aici  */}
            {productDetails ?
                (
                    <main className="bg-white">

                        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-8 px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:grid-cols-2 lg:px-8">

                            <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 w-full aspect-h-1 aspect-w-1">
                                <img src={features[7]?.description} alt={features[5]?.description}
                                    className=" rounded-lg bg-gray-100 object-contain p-8" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{features[5]?.description}</h2>
                                <p className="mt-4 text-gray-500">
                                    {features[6]?.description}
                                </p>

                                <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                                    {features.slice(0, 5).map((feature) => (
                                        <div key={feature.name} className="border-t border-gray-200 pt-4">
                                            <dt className="font-medium text-gray-900">{feature.name}</dt>
                                            <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>

                    </main>
                )

                : (
                    <p>
                        Loadings.....
                    </p>
                )}

        </>

    )
}

export default ProductDetail;
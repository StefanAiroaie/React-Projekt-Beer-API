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
            <main className="bg-white">
                {productDetails ?
                    (
                        // <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
                        //     <div >
                        //         <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{features?.name}</h2>
                        //         <p className="mt-4 text-gray-500">
                        //             {features?.description}
                        //         </p>

                        //         <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        //             {features.map((feature) => (
                        //                 <div key={feature.name} className="border-t border-gray-200 pt-4">
                        //                     <dt className="font-medium text-gray-900">{feature.name}</dt>
                        //                     <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                        //                 </div>
                        //             ))}

                        //         </dl>
                        //         <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
                        //             <img src={productDetails.image_url} alt={productDetails.name}
                        //                 className=" w-1/6" />
                        //         </div>
                        //     </div>
                        //     <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
                        //         <img src={productDetails.image_url} alt={productDetails.name}
                        //             className=" w-1/6" />
                        //     </div>

                        // </div>
                        // <h1>h</h1>
                        <div className="bg-white">
                            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">

                                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 w-full aspect-h-1 aspect-w-1">
                                    <img src={productDetails?.image_url} alt={productDetails?.name}
                                        className=" rounded-lg bg-gray-100 object-contain p-8" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{productDetails?.name}</h2>
                                    <p className="mt-4 text-gray-500">
                                        {productDetails?.description}
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
                        </div>


                    )

                    : (
                        <p>
                            Loadings.....
                        </p>
                    )
                }
            </main>

            {/* hei aici  */}


            <main className="bg-white">
                <div className="bg-white">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">

                        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 w-full aspect-h-1 aspect-w-1">
                            <img src={features[7]?.description} alt={features[5]?.description}
                                className=" rounded-lg bg-gray-100 object-contain p-8" />
                            {/* <img
                                    src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                                    alt="Top down view of walnut card tray with embedded magnets and card groove."
                                    className="rounded-lg bg-gray-100"
                                />
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                                    alt="Side of walnut card tray with card groove and recessed card area."
                                    className="rounded-lg bg-gray-100"
                                />
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                                    alt="Walnut card tray filled with cards and card angled in dedicated groove."
                                    className="rounded-lg bg-gray-100"
                                /> */}
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
                </div>
            </main>
        </>
    );
}

export default ProductDetail;
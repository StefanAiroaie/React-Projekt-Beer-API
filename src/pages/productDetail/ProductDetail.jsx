import { useEffect, useState } from "react";
import Nav from "../../components/nav/Nav";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../../components/navBar/NavBar";



const ProductDetail = () => {

    const dasIdVomURL = useParams()
    console.log("dasIdVomURL", dasIdVomURL.idDatLaURL);

    const [numePeCareIlDauMaiDeparte, setNumePeCareIlDauMaiDeparte] = useState(null)

    let newApiLink = `https://ih-beers-api2.herokuapp.com/beers/${dasIdVomURL.idDatLaURL}`
    console.log(newApiLink);

    useEffect(() => {
        const apiFetch = async () => {
            const raspuns = await axios.get(newApiLink)
            console.log(raspuns.data);
            setNumePeCareIlDauMaiDeparte(raspuns.data)
        }
        apiFetch()
    }, [])


    const features = [
        { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
        { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
        { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
        { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
        { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
        { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
    ]

    //     contributed_by

    //     attenuation_level
    // : 
    // 76
    // brewers_tips
    // : 
    // "Be careful not to collect too much wort from the mash. Once the sugars are all washed out there are some very unpleasant grainy tasting compounds that can be extracted into the wort."
    // contributed_by
    // : 
    // "Sam Mason <samjbmason>"
    // description
    // : 
    // "A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist."
    // expireAt
    // : 
    // "2024-02-10T07:00:45.040Z"
    // first_brewed
    // : 
    // "04/2008"
    // image_url
    // : 
    // "https://images.punkapi.com/v2/2.png"
    // name
    // : 
    // "Trashy Blonde"
    // tagline
    // : 
    // "You Know You Shouldn't"
    // __v
    // : 
    // 0
    // _id
    // : 
    // "65c71f1d9ad5cd00028bf21e"



    return (
        <>
            <NavBar />
            <h5>Das ist Product detail website</h5>

            {numePeCareIlDauMaiDeparte ?
                (
                    <div className="bg-white">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{numePeCareIlDauMaiDeparte.name}</h2>
                                <p className="mt-4 text-gray-500">
                                    {numePeCareIlDauMaiDeparte.description}
                                </p>

                                <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="border-t border-gray-200 pt-4">
                                            <dt className="font-medium text-gray-900">{feature.name}</dt>
                                            <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                            <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
                                <img src={numePeCareIlDauMaiDeparte.image_url} alt={numePeCareIlDauMaiDeparte.name}
                                    className="w-3/5 object-contain object-center p-4 group-hover:opacity-75" />


                            </div>
                        </div>
                    </div>)

                : (
                    <p>
                        Loadings.....
                    </p>
                )
            }






            {numePeCareIlDauMaiDeparte ?
                (
                    <div>
                        <h2>{numePeCareIlDauMaiDeparte.name}</h2>
                        <img src={numePeCareIlDauMaiDeparte.image_url} alt={numePeCareIlDauMaiDeparte.name} />
                        <p>{numePeCareIlDauMaiDeparte.brewers_tips}</p>
                        <h5>{numePeCareIlDauMaiDeparte.tagline}</h5>
                        <h6>{numePeCareIlDauMaiDeparte.first_brewed}</h6>
                        <p>Attenuation level: <b>{numePeCareIlDauMaiDeparte.attenuation_level}</b> </p>
                        <p>{numePeCareIlDauMaiDeparte.description}</p>
                    </div>
                ) : (
                    <p>
                        Loadings.....
                    </p>
                )
            }
            {/* <Nav /> */}
        </>
    );
}

export default ProductDetail;
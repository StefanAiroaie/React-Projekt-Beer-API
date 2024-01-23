import { useEffect, useState } from "react";
import Nav from "../nav/Nav";
import { useParams } from "react-router-dom";
import axios from "axios";



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

    return (
        <>
            <h5>Das ist Product detail website</h5>


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
            <Nav />
        </>
    );
}

export default ProductDetail;
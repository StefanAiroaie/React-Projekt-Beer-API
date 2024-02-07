import { useState, useEffect } from "react";
import Nav from "../../components/nav/Nav";
import axios from "axios";
import NavBar from "../../components/navBar/NavBar";
const RandomProduct = () => {


    const [randomBeer, setRandomBeer] = useState(null)


    let randomApi = `https://ih-beers-api2.herokuapp.com/beers/random`


    useEffect(() => {
        const apiFetch = async () => {
            const raspuns = await axios.get(randomApi)
            console.log("s", raspuns.data);
            setRandomBeer(raspuns.data)
        }
        apiFetch()
    }, [])




    return (
        <>
            <NavBar />
            <h6>Hier ist unser random bier seite</h6>
            {/* <h1>{randomBeer.name}</h1> */}

            {randomBeer ?
                (
                    <div>
                        <h2>{randomBeer.name}</h2>
                        <img src={randomBeer.image_url} alt={randomBeer.name} />
                        <p>{randomBeer.brewers_tips}</p>
                        <h5>{randomBeer.tagline}</h5>
                        <h6>{randomBeer.first_brewed}</h6>
                        <p>Attenuation level: <b>{randomBeer.attenuation_level}</b> </p>
                        <p>{randomBeer.description}</p>
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

export default RandomProduct;
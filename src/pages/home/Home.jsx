
import { Link } from "react-router-dom";




const Home = () => {
    return (<>


        <h1>Welkome auf meine Bier Sorten Seite</h1>

        <Link to="/products">
            <div><img src="../src/assets/img/allBeers.jpg" alt="allbeers" />
                <p>Alle BierSorten</p>
            </div>
        </Link >

        <Link to="/random">
            <div><img src="../src/assets/img/random.png" alt="allbeers" />
                <p>Random Bier</p>
            </div>
        </Link >




    </>);
}

export default Home;
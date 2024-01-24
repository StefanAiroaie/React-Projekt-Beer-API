import { Link } from "react-router-dom";
import buttonLogo from "../../assets/img/logo.svg"
const Nav = () => {

    return (
        <>
            <Link to="/"><button><img src={buttonLogo} alt="homebutton"></img></button></Link>


        </>
    );
}

export default Nav;
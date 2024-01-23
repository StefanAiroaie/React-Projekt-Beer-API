import { Link } from "react-router-dom";
import "./productCard.css"
const ProductCard = ({ numePeCareIlDauMaiDeparte }) => {

    console.log(numePeCareIlDauMaiDeparte);
    return (<>


        <h5>{numePeCareIlDauMaiDeparte.name}</h5>
        <img src={numePeCareIlDauMaiDeparte.image_url} alt={numePeCareIlDauMaiDeparte.name} />
        <p>{numePeCareIlDauMaiDeparte.tagline}</p>
        {/* hier muss ich noch stat replace was anderes nutzen */}
        <p>{numePeCareIlDauMaiDeparte.contributed_by.replace(" <samjbmason>", "")}</p>
        <Link to={`/product/${numePeCareIlDauMaiDeparte._id}`}><button>More Infos About: {numePeCareIlDauMaiDeparte.name}</button></Link>

    </>);
}

export default ProductCard;
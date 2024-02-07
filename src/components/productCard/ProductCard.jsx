import { Link } from "react-router-dom";
import "./productCard.css"
const ProductCard = ({ numePeCareIlDauMaiDeparte }) => {

    // console.log(numePeCareIlDauMaiDeparte);

    let newby = numePeCareIlDauMaiDeparte.contributed_by
    newby = newby.substring(0, newby.indexOf("<")) + newby.substring(newby.indexOf(">") + 1);

    return (<>







        <img src={numePeCareIlDauMaiDeparte.image_url} alt={numePeCareIlDauMaiDeparte.name} />
        <div className="productCardInfos">
            <h5>{numePeCareIlDauMaiDeparte.name}</h5>

            <p>{numePeCareIlDauMaiDeparte.tagline}</p>
            <p>{newby}</p>
            <Link to={`/product/${numePeCareIlDauMaiDeparte._id}`}><button>More Infos About: {numePeCareIlDauMaiDeparte.name}</button></Link>
        </div>

    </>);
}

export default ProductCard;
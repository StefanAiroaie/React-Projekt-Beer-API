import Nav from "../nav/Nav";
import { useParams } from "react-router-dom";

const ProductDetail = () => {

    const dasIdVomURL = useParams()
    return (
        <>
            <h5>Das ist Product detail website</h5>
            <Nav />
        </>
    );
}

export default ProductDetail;
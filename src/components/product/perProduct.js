
import { useParams } from "react-router-dom";
import './preProduct.css';

export default ({ ads }) => {

    let { nameMilGya } = useParams();
    let shoe = ads.filter((ad) => {
        if (nameMilGya == ad.name) {
            return ad
        }
    })


    let { title, url, price } = shoe[0];

    return <div className="detailContainer">

        <div className="detailSectionImage">
            <img src={url} className='innerPic' />
        </div>

        <div className="descriptionOfItem">
            <div className="itemShortDetail">
                <h1 className="titleNameStyle">{title}</h1>
                <p className="shortInfo">STYLE: Sport-Men-Shoes</p>
                <p className="review">Be the first one to review</p>
            </div>

            <div className="priceBox">
                <span className="price">{price}</span>
            </div>

            <div className="btnContainer">
                <button className="cartButton">ADD TO CART</button>
            </div>

            <div className="shipmentBox">
                <p className="shipmentInfo">
                    Shipment will take 3-5 days after confirmation of the order.
                </p>
            </div>

        </div>
    </div>
}
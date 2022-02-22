
import { useParams } from "react-router-dom"

export default ({ ads }) => {

    let { nameMilGya } = useParams();
    let shoe = ads.filter((ad) => {
        if (nameMilGya == ad.name) {
            return ad
        }
    })


    let { title, url, price } = shoe[0];

    return <div>
        <h1>{title}</h1>
        <h3>{price}</h3>
        <img src={url} />
    </div>
}
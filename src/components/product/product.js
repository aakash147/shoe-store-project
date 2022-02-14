import Card from "../cards/cards";
import { Link } from 'react-router-dom'
export default ({ ads }) => {

    return <>
        <div className="ad-container">
            {ads.map((adItem) => {
                return <Link to='/'>
                    <Card mydata={adItem} />;
                </Link>
            })}
        </div>
    </>
}
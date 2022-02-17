import Card from "../cards/cards";
import { Link } from 'react-router-dom';
import './product.css';

export default ({ ads, setDataSet }) => {

    return <>
        <div className="ad-container">
            {ads.map((adItem) => {
                return <Link to='/detail' className="cardLink">
                    <Card mydata={adItem} setDataSet={setDataSet} />;
                </Link>
            })}
        </div>
    </>
}

import './detail.css';

export default ({ adDetail })=> {
    return (
        <div>
            {adDetail.map((item)=>{
                return <div>
                    <img src={item.url} />
                </div>
            })}
        </div>
    )
}
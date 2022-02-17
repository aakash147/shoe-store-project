
import './detail.css';

export default ({ adDetail }) => {
    console.log(adDetail);
    return (
        <div>
            {
                adDetail ? <div>
                    <img src={adDetail.url} />
                </div> : null
            }

            {/* {adDetail.map((item)=>{
                return <div>
                    <img src={item.url} />
                </div>
            })} */}
        </div>
    )
}
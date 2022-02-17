import './card.css';
import { useState } from 'react';

export default ({ mydata, setDataSet }) => {





    // let [bgColor, setBgColor] = useState("like-Btn");

    // function changeColor() {

    //     bgColor == "like-Btn" ? setBgColor("like-BtnColor") : setBgColor('like-Btn')
    // }

    return <div className="ad" onClick={() => {
        setDataSet(mydata)
    }}>
        <div className='imageDiv'>
            {/* <img
                src="https://www.olx.com.pk/assets/iconFavoriteUnselected_noinline.5767fec1cf12da79531e7c0b4a94f4e2.svg"
                className={bgColor}
                onClick={changeColor}
            /> */}

            <div className="img-container">
                <img src={mydata.url} />
            </div>
        </div>

        <div className='descriptionDiv'>
            <div>
                <p className='brandText'>{mydata.brand}</p>
            </div>
            <div>
                <p className='title'>{mydata.title}</p>
            </div>
            <div>
                <h3 className='price'>{mydata.price}</h3>
            </div>
        </div>
    </div>
}
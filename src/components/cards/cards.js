import './card.css';
import { useState } from 'react';

export default (props) => {

    let [bgColor, setBgColor] = useState("like-Btn");

    function changeColor() {

        bgColor == "like-Btn" ? setBgColor("like-BtnColor") : setBgColor('like-Btn')
    }

    return <div className="ad">
        <div className='imageDiv'>
            <img
                src="https://www.olx.com.pk/assets/iconFavoriteUnselected_noinline.5767fec1cf12da79531e7c0b4a94f4e2.svg"
                className={bgColor}
                onClick={changeColor}
            />
            <div className="img-container">
                <img src={props.mydata.url} />
            </div>
        </div>

        <div className='descriptionDiv'>
            <div className='brandName'>
                <p className='brandText'>{props.mydata.brand}</p>
            </div>
            <span>{props.mydata.title}</span>
            <h3>{props.mydata.price}</h3>
        </div>
    </div>
}
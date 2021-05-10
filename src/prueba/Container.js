import React from 'react';
import '../App.css';

export default function Container(props){
    
    return(
        <div className="div_viewport">
            <div className="div_container">
                <div className="div_image">
                    <img src="https://i.pinimg.com/originals/6c/2e/07/6c2e07660c6fcf90d6a362ced622e1ad.png" className="img"></img>
                </div>
                <div className="div_text">
                    <p className="p-titulo">Has programado tanto que te has topado con el chems de la suerte</p>
                    <br/>
                    <p className="p-titulo">Pidele un deseo: </p>
                    <p className="p-deseo">{props.text}</p>
                    <br/>
                    <br/>
                    <p className="p-deseo">Chems: No puede ser...</p>
                </div>
            </div>
        </div>
    )
}


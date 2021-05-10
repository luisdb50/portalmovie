import React from 'react';
import '../App.css';

export default function Random(){
    
    let num = Math.round(Math.random()*6);
    console.log(num)
    
    return(
        <div>
            {num % 2 === 0 && <div className="div_color"></div>}
        </div>
    );

}
import React from 'react';

let classname = "div_counter";
let counter;

export default class ButtonCount extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
        
        this.contValue = this.contValue.bind(this);
    }

    contValue(bool) {

        this.bool = bool;
        

        if(this.bool && this.state.count <= 18){
            this.setState(state => ({count : state.count +2}))
            counter= this.state.count +2;

        } else if(!this.bool && this.state.count >= 1) {
            this.setState(state => ({count : state.count -1}))
            counter= this.state.count -1;

        } else { alert("El valor debe de estar en el rango de 0 a 20"); }
        
        this.paintBorder()

    }

    paintBorder(){
        console.log(counter)
        if(counter == 0){
            classname = "div_counter"
        } else if(counter % 2 == 0){
            classname = "div_counter-blue";
        } else if(counter % 2 != 0){
            classname = "div_counter-red"
        }
    }

    render(){
        return (
            <div>
                <br />
                <button onClick={()=> this.contValue(false)}>Izquierda</button>
                <button onClick={()=> this.contValue(true)}>Derecha</button>
                <div className={classname}>
                    <p>{this.state.count}</p>
                </div>
            </div>
        );
    }
}


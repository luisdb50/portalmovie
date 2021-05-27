import React from 'react'
// import ReactDOM, { render } from 'react-dom'

const array = [1, 2];
let element;

export default class Component extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            ramdon : 0
        } 
    }

    componentDidMount(){
        this.timerID = setInterval(() => this.tick(), 3000);
    }
    
    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({ ramdon : Math.round(Math.random()* 10000000000) });
    }

    render(){

        console.log(this.state.ramdon);
        let n= this.state.ramdon;

        return(
            <div className="separate">
                {this.state.ramdon === 0 
                    ? <div>El aleatorio es cero</div> 
                    : this.state.ramdon % 2 === 0 ? <BarBlue n={n}/> : <BarRed n={n}/>}
            </div>
        );
    }
}

function BarRed(props){
    
    console.log("Rojo")

    element = array.map((number) => 
        <div className="check bar-red" key={number.toString()}></div>
    )

    return(
        <div>
            {element} {props.n}
        </div>    
    );
}

function BarBlue(props){

    console.log("Azul")

    element = array.map((number) => 
        <div className="check bar-blue" key={number.toString()}></div>
    )

    return(
        <div>
            {element} {props.n}
        </div>    
    );
}
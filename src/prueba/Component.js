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

        return(
            <div>
                {this.state.ramdon === 0 
                    ? <div>El aleatorio es cero</div> 
                    : this.state.ramdon % 2 === 0 ? <BarBlue /> : <BarRed />}
            </div>
        );
    }
}

function BarRed(){
    
    console.log("Rojo")

    element = array.map((number) => 
        <div className="check bar-red" key={number.toString()}></div>
    )

    return(
        <div>
            {element}
        </div>    
    );
}

function BarBlue(){

    console.log("Azul")

    element = array.map((number) => 
        <div className="check bar-blue" key={number.toString()}></div>
    )

    return(
        <div>
            {element}
        </div>    
    );
}
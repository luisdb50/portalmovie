import React from "react";
import Componentc from "./Component";

export class InitComponent extends React.Component{

    constructor(props){
        super(props);
        this.state= { count: 0, renderizer:"" }
    }

    componentDidMount(){
        this.timerID = setInterval(()=> this.tick() ,1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){

        if(this.state.count === 5){
            this.componentWillUnmount()
            let array = [1,2,3,4,5]

            this.setState({ 
                count: this.state.count +1, 
                renderizer: array.map((num)=> <Componentc key={num}/>)
            });
        } else {

            this.setState({ 
                count: this.state.count +1, 
                renderizer: <div><Componentc /><Componentc /></div>
            });
        }
    }

    render(){
        return(
            <div>
                {this.state.renderizer}
            </div>
        )
    }
} 
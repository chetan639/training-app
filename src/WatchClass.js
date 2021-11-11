import { Component } from "react";

class WatchClass extends Component{
    constructor(props){
        super(props);
        this.state={
            color:"red",
            price: 500000,
            brand: "Rolex"
        }
    }

    changeColor=()=>{
        this.setState(
            {
                color:"Blue",
                brand:"Swiss"
            }
        )
    }

    render(){
        return (
        <div>
            <h1>My watch is {this.state.color}</h1>
            <h1>My watch is {this.state.price}</h1>
            <h1>My watch is {this.state.brand}</h1>
            <button onClick={this.changeColor}>Change</button>
        </div>

        );
    }
}

export default WatchClass;

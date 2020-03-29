import React from 'react';
import ReactDOM from 'react-dom';
import Car from "./Car"

// A Class Componenet
class Garage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {colour: this.props.colour}
    }

    render() {
        return (
        <div>
            <h1> I have a garage with</h1>
            <Car colour={this.state.colour}></Car>
        </div>)
    }
}

// A function Component
function Drive() {
    return <h2>Drive the car!</h2>;
}

ReactDOM.render(<Garage colour="red"/>, document.getElementById('root'));


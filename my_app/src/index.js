import React from 'react';
import ReactDOM from 'react-dom';
import Car from "./Car"

// A Class Componenet
class Garage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            size: this.props.size, 
        }
    }

    componentDidUpdate() {
       console.log("Something changed!")
    }

    render() {
        const carInfo1 = {
            colour: "red", 
            brand: "Ford",
            show: true
        }
        const carInfo2 = {
            colour: "blue", 
            brand: "Toyota",
            show: true
        }
        let car1;
        if (carInfo1.show) {
            car1 = <Car carInfo={carInfo1}></Car>
        }
        let car2;
        if (carInfo2.show) {
            car2 = <Car carInfo={carInfo2}></Car>
        }
        return (
        <div>
            <h1> I have a {this.state.size} garage!</h1>
            {car1}
            {car2}
        </div>
        );
    }
}

// A function Component
function Drive() {
    return <h2>Drive the car!</h2>;
}

ReactDOM.render(<Garage size="large"/>, document.getElementById('root'));


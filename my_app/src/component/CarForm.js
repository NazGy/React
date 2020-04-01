import React from 'react';
import ReactDOM from 'react-dom';

class CarForm extends React.Component {

    contructor(props) {
        this.state = {
            colour: "",
            brand: ""
        }
    }

    colourChange = (event) => {
        this.setState({ colour: event.target.value })
    }

    brandChange = (event) => {
        this.setState({ brand: event.target.value })
    }

    newCar = (event) => {
    }

    render() {
        return (
            <form onSubmit={this.newCar}>
                <p>Enter your car information</p>
                <p>
                    Colour: <input type="text" onColourChange={this.colourChange}></input>
                </p>
                <p>
                    Brand: <input type="text" onBrandChange={this.brandChange}></input>
                </p>
                <input
                    type='submit'
                />
            </form>

        )
    }

}

export default CarForm;
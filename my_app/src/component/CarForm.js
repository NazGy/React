import React from 'react';
import ReactDOM from 'react-dom';

class CarForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            colour: "",
            colourValidation: "",
            brand: "",
            brandValidation: ""
        }
    }

    // Change handler that works for all form elements given they have a type name in state
    onChangeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        this.setState({ [event.target.name + "Validation"]: /\d/.test(event.target.value) ? <strong>Do not include numbers!</strong> : '' })
    }

    newCar = (event) => {
    }

    render() {
        return (
            <form onSubmit={this.newCar}>
                <p>Enter your car information</p>
                <p>
                    Colour: <input type="text" name="colour" onChange={this.onChangeHandler}></input>
                </p>
                {this.state.colourValidation}
                <p>
                    Brand: 
                    <select name="brand" value="Select" onChange={this.onChangeHandler}>
                        <option value="Select">Select</option>
                        <option value="Ford">Ford</option>
                        <option value="Volvo" selected>Volvo</option>
                        <option value="Fiat">Fiat</option>
                    </select>
                </p>
                {this.state.brandValidation}
                <input
                    type="submit"
                />
            </form>

        )
    }

}

export default CarForm;
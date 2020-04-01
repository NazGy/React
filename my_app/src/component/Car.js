import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            colour: this.props.carInfo.colour,
            brand: this.props.carInfo.brand,
            movement: "Parked"
        }
    }

    componentDidUpdate() {
        if (this.state.movement == 0) {
            this.setState({ movement: "Vroom Vroom!" })
        }
        else if (this.state.movement > 0) {
            setTimeout(() => {
                this.setState({ movement: this.state.movement - 1 })
            }, 1000)
        }
    }

    /** 
     * setState will update the state then call the render
     * method to ensure that the component is properlly updated
     *  */
    beginDriving = () => {
        this.setState({ movement: 5 })
    }

    render() {
        return (
            <div>
                <h2>This is my {this.state.brand} Car!</h2>
                <p>
                    It is {this.state.colour}
                </p>
                <button
                    type="button"
                    onClick={this.beginDriving}
                >Start Driving!</button>
                <p>
                    Currently {this.state.movement}
                </p>
            </div>
        );
    }
}

export default Car;
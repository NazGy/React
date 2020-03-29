import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {

    constructor(props) {
        super(props)
        this.state = {colour: this.props.colour}
    }

    render() {
        return <h2>a {this.state.colour} Car!</h2>;
      }
}

export default Car;
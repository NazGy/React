// import "../css/HexaCell.css"
import React from 'react';
import { Typography } from "@material-ui/core";
import HexaLarge from './HexaLarge'
import HexaSmall from './HexaSmall'

class HexaCell extends React.Component {

    render() {
        if (this.props.size == "large")
            return <HexaLarge imgSrc={this.props.imgSrc} sty={this.props.sty} text={this.props.text}></HexaLarge>
        else if (this.props.size == "small")
            return <HexaSmall></HexaSmall>
    }

}

export default HexaCell
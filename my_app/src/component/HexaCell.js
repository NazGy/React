// import "../css/HexaCell.css"
import React from 'react';
import { Typography } from "@material-ui/core";
import HexaLarge from './HexaLarge'
import HexaSmall from './HexaSmall'
import Hexagon from 'react-hexagon'
import '../css/HexaCell.css'

class HexaCell extends React.Component {

    render() {
        // if (this.props.size == "large")
        //     return <HexaLarge imgSrc={this.props.imgSrc} sty={this.props.sty} text={this.props.text}></HexaLarge>
        // else if (this.props.size == "small")
        //     return <HexaSmall></HexaSmall>
        return (
        <Hexagon
            style={{stroke: 'black', height: '80px', width: '80px', strokeWidth: '20'}}
            // flatTop={true}
            backgroundImage={this.props.imgSrc}
            // diagonal={300}
        >
            </Hexagon>
        )
    }

}

export default HexaCell
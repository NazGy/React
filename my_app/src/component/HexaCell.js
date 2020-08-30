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
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Hexagon
                    style={{ stroke: this.props.color ? this.props.color : 'black', height: '80px', width: '80px', strokeWidth: '20' }}
                // flatTop={true}
                // backgroundImage={this.props.imgSrc}
                // diagonal={300}
                >
                </Hexagon>
                <img src={this.props.imgSrc} width="70px" height="70px" style={{marginLeft: '-85px'}}></img>
            </div>
        )
    }

}

export default HexaCell
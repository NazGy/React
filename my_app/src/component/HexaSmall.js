import "../css/HexaSmall.css"
import React from 'react';
import { Typography } from "@material-ui/core";

class HexaSmall extends React.Component {

    componentDidMount() {
    }

    renderText = () => {

        if (!this.props.text) return null;
        
        return (
        <Typography className={this.props.sty} style={{ width: '165', marginLeft: '8.5px', zIndex: 10, position: 'absolute'}}>
            {this.props.text? this.props.text : ""}
        </Typography>
        )
    }

    render() {
        return (
            <div>
                <div style={{marginLeft: '-5px'}} className="hex">
                    <img style={{bottom: '-41px', width: '165', height: '187', position: 'absolute' , zIndex: 5, marginLeft: '8.5px'}} src={this.props.imgSrc}></img>
                    {this.renderText()}
                </div>
            </div>
        )
    }

}

export default HexaSmall
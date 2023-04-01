import React from 'react';
import Hexagon from 'react-hexagon'
import '../css/HexaCell.css'

class HexaCell extends React.Component {

    render() {
        return (
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Hexagon
                    style={{ 
                        stroke: this.props.color ? this.props.color : 'black', 
                        height: this.props.size? this.props.size : '80px', 
                        width: this.props.size? this.props.size : '80px', 
                        strokeWidth: '20'
                        }}
                    backgroundImage={this.props.background}
                >
                </Hexagon>
                <img 
                    src={this.props.imgSrc} 
                    width={this.props.size? this.props.size - 10 : "70px"} 
                    height={this.props.size? this.props.size - 10 : "70px"} 
                    style={{marginLeft: '-85px'}}>
                </img>
            </div>
        )
    }
}

export default HexaCell
import python from '../pictures/python.png'
import React from 'react';
import HexaCell from './HexaCell';

export default function HexTree(props) {

    const renderTree = () => {

        
        let count = 0;

        if (props.reverse) {
            count = 1
        }

        return props.images.map(imgSrc => {
            let margin = (count % 2) * 52
            count += 1
            return (
                <div  style={{ marginLeft: `${margin}px`, marginBottom: '-25px' }}>
                    <HexaCell color={props.color} imgSrc={imgSrc}></HexaCell>
                </div>
            )
        })

    }

    return (
        <div style={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'column'}}>
            {renderTree()}
        </div>
    )



}
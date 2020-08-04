import python from '../pictures/python.png'
import React from 'react';
import HexaCell from './HexaCell';
export default function HexTree(props) {

    const renderTree = () => {

        let count = -45;

        return props.images.map(imgSrc => {
            count = count + 50;
            return (
                <div  style={{ marginLeft: `${count}px`, marginBottom: '-25px' }}>
                    <HexaCell imgSrc={imgSrc}></HexaCell>
                </div>
            )
        })

    }

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', width: '100%' }}>
            {renderTree()}
        </div>
    )



}
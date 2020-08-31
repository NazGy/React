import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router';
import "../css/About.css"
import HexaCell from './HexaCell'
import HexTree from './HexTree'
import poly1 from '../pictures/AP_Polygon_1.png'
import poly2 from '../pictures/AP_Polygon_2.png'
import poly3 from '../pictures/AP_Polygon_3.png'
import poly4 from '../pictures/AP_Polygon_4.png'
import poly5 from '../pictures/AP_Polygon_5.png'

class AboutPage extends React.Component {
    render() {
        return (
            <div className={"row"} style={{ width: '100%', height: '100%' }}>
                <div class="background" >
                    <div className={"background_box"}>

                        <div className="column" style={{ height: '100%' }}>
                            <div>
                                <Typography className={"about_title"}>About Me.</Typography>
                            </div>
                            <div>
                                <Typography className={"about_desc"}>Passionate enthusiast for software design and machine learning</Typography>
                            </div>
                        </div>
                    </div>
                    <div className={"pink_box"}>
                        <div className="hexColumn">
                            <div className="hexRow" style={{ marginTop: '45px' }}>
                                <HexTree color="#DAB6F9" reverse images={[poly1]}></HexTree>
                                <HexaCell size="large" imgSrc={poly1} ></HexaCell>
                                <HexaCell size="large" imgSrc={poly2} sty="poly1" text="Studying Computer Science"></HexaCell>
                            </div>
                            <div style={{ marginTop: '45px' }} className={"hexRow"}>
                                <HexaCell size="large" imgSrc={poly3} sty="poly3" text="4th Year Student at the University of Toronto"></HexaCell>
                            </div>
                            <div className="hexRow" style={{ marginTop: '45px' }}>
                                <HexaCell size="large" imgSrc={poly4}></HexaCell>
                                <HexaCell size="large" imgSrc={poly5} sty="poly5" text="Machine Learning"></HexaCell>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"hexa"}>
                    {/* <div className="hexRow" style={{marginTop: '45px'}}>
                        <HexaCell imgSrc={poly1} ></HexaCell>
                        <HexaCell imgSrc={poly2} sty="poly1" text="Studying Computer Science"></HexaCell> 
                    </div>
                    <div style={{marginTop: '45px'}} className={"hexRow"}>
                        <HexaCell imgSrc={poly3} sty="poly3" text="4th Year Student at the University of Toronto"></HexaCell>
                    </div>
                    <div className="hexRow" style={{marginTop: '45px'}}>
                        <HexaCell imgSrc={poly4}></HexaCell>
                        <HexaCell imgSrc={poly5} sty="poly5" text="Machine Learning"></HexaCell> 
                    </div> */}
                </div>
            </div>
        )
    }
}

export default withRouter(AboutPage)
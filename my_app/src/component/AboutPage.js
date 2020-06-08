import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router';
import "../css/About.css"
import HexaCell from './HexaCell'

class AboutPage extends React.Component {
    render() {
        return (
            <div className={"row"} style={{ width: '100%', height: '100%' }}>
                <div class="background" >
                    <div className={"background_box"}>

                        <div className="column" style={{height: '100%', border: "solid blue 1px"}}>
                            <div>
                                <Typography className={"about_title"}>About Me.</Typography>
                            </div>
                            <div>
                                <Typography className={"about_desc"}>Passionate enthusiast for software design and machine learning</Typography>
                            </div>
                        </div>
                    </div>
                    <div className={"pink_box"}></div>
                </div>
                {/* <div className="column" style={{width: '70%', height: '100%', border: 'solid blue 1px'}}>
                    <div>
                        <Typography className={"about_title"}>About Me.</Typography>
                    </div>
                    <div>
                        <Typography className={"about_desc"}>Passionate enthusiast for software design and machine learning</Typography>
                    </div>
                </div>
                <div style={{width: '30%', height: '100%', border: 'solid blue 1px'}}></div> */}
            </div>
        )
    }
}

export default withRouter(AboutPage)
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import HexaCell from './HexaCell';
import { withRouter } from 'react-router';
import "../css/Experience.css"
import "../css/Skill.css"
import poly1 from '../pictures/AP_Polygon_1.png'


class SkillPage extends React.Component {

    render() {
        return (
            <div class="full_background" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <img style={{width: "100px", marginTop: '70px', position: 'absolute'}} src={require('../pictures/skill_icon.png')}></img>
                <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                        <div style={{ marginBottom: '120px' }}></div>
                        <div class="pink_background" style={{ display: 'flex', flexDirection: 'column', flexGrow: '1' }}>
                            <div class="left_title">
                                MY SK
                            </div>
                            <div style={{ marginRight: '10px' }}>
                                <div class="left_body">Python</div>
                                <div class="left_body">Java</div>
                                <div class="left_body">SQL</div>
                                <div class="left_body">NodeJS</div>
                                <div class="left_body">Tensorflow</div>
                            </div>
                            <div style={{position: 'absolute', width: '100%'}}>
                            <div className="column" style={{width: '50%'}}>
                                <HexaCell size="small" imgSrc={poly1}></HexaCell>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                        <div style={{ marginBottom: '120px' }}></div>
                        <div class="black_background" style={{ display: 'flex', flexDirection: 'column', flexGrow: '1' }}>
                            <div class="right_title">
                                ILLS
                            </div>
                            <div class="right_body">React</div>
                            <div class="right_body">Google API</div>
                            <div class="right_body">Javascript</div>
                            <div class="right_body">Git</div>
                            <div class="right_body">C</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SkillPage
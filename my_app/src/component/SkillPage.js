import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import HexaCell from './HexaCell';
import HexTree from './HexTree';
import { withRouter } from 'react-router';
import "../css/Experience.css"
import "../css/Skill.css"
import python from '../pictures/python.png'
import java from '../pictures/java.png'
import node from '../pictures/node.png'
import javascript from '../pictures/javascript.png'
import tensorflow from '../pictures/tensorflow.png'
import c from '../pictures/c.png'
import restapi from '../pictures/restapi.png'
import cucumber from '../pictures/cucumber.png'
import jira from '../pictures/jira.png'
import selenium from '../pictures/selenium.png'
import git from '../pictures/git.png'
import react from '../pictures/react.png'
import sql from '../pictures/sql.png'
import googleapi from '../pictures/googleapi.png'
import pytorch from '../pictures/pytorch.png'
import mongodb from '../pictures/mongodb.png'
import postman from '../pictures/postman.png'
import protractor from '../pictures/protractor.png'
import jenkins from '../pictures/jenkins.png'
import ml from '../pictures/ml.png'

class SkillPage extends React.Component {

    render() {

        const farLeftSkillsMap = {
            Python: python,
            Javascript: javascript,
            Java: java,
            Tensorflow: tensorflow,
            RestAPIs: restapi,
            SQL: sql,
        }

        const leftSkillsMap = {
            Selenium: selenium,
            Cucumber: cucumber,
            Jira: jira,
            "Machine Learning": ml
        }

        const farRightSkillsMap = {
            React: react,
            NodeJS: node,
            Git: git,
            PyTorch: pytorch,
            GoogleAPI: googleapi,
            MongoDB: mongodb,
        }

        const rightSkillsMap = {
            Postman: postman,
            Protractor: protractor,
            Jenkins: jenkins,
            C: c
        }

        const farLeftSkills = Object.keys(farLeftSkillsMap)
        const leftSkills = Object.keys(leftSkillsMap)
        const farRightSkills = Object.keys(farRightSkillsMap)
        const rightSkills = Object.keys(rightSkillsMap)



        const farLeftImages = farLeftSkills.map(skill => {
            return farLeftSkillsMap[skill]
        })
        const leftImages = leftSkills.map(skill => {
            return leftSkillsMap[skill]
        })
        const farRightImages = farRightSkills.map(skill => {
            return farRightSkillsMap[skill]
        })
        const rightImages = rightSkills.map(skill => {
            return rightSkillsMap[skill]
        })

        return (
            <div class="full_background" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <img style={{ width: "100px", marginTop: '70px', position: 'absolute' }} src={require('../pictures/skill_icon.png')}></img>
                <div style={{ display: 'flex', flexDirection: 'row', width: '100%'}}>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                        <div style={{ marginBottom: '120px' }}></div>
                        <div class="pink_background" style={{ display: 'flex', flexDirection: 'column', flexGrow: '1' }}>
                            <div class="left_title">
                                MY SK
                            </div>
                            <div style={{ marginRight: '10px' }}>
                                {farLeftSkills.map(skill => {
                                    return <div class="left_body">{skill}</div>
                                })}
                                {leftSkills.map(skill => {
                                    return <div class="left_body">{skill}</div>
                                })}
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                        <div style={{ marginBottom: '120px' }}></div>
                        <div class="black_background" style={{ display: 'flex', flexDirection: 'column', flexGrow: '1' }}>
                            <div class="right_title">
                                ILLS
                            </div>
                            {farRightSkills.map(skill => {
                                return <div class="right_body">{skill}</div>
                            })}
                            {rightSkills.map(skill => {
                                return <div class="right_body">{skill}</div>
                            })}
                        </div>
                    </div>
                    <div style={{ position: 'absolute', width: '100%', marginTop: '150px', display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ width: '50%', display: 'flex', justifyContent: 'flex-start' }}>
                            <div style={{marginLeft: '2%'}}><HexTree images={farLeftImages}></HexTree></div>
                            <div style={{marginTop: '179px', marginLeft: '-33px'}}><HexTree style={{marginTop: '50px'}} images={leftImages}></HexTree></div>
                            
                        </div>
                        <div style={{ width: '50%', display: 'flex', justifyContent: 'flex-end'  }}>
                            <div style={{marginTop: '179px', marginRight: '-33px'}}><HexTree color="#DAB6F9" reverse images={rightImages}></HexTree></div>
                            <div style={{marginRight: '5%'}}><HexTree color="#DAB6F9" reverse images={farRightImages}></HexTree></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SkillPage
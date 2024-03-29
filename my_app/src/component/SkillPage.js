import React from 'react';
import HexTree from './HexTree';
import { withRouter } from 'react-router';
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
import cypress from '../pictures/cypress.png'
import typescript from '../pictures/typescript.png'
import aws from '../pictures/aws.png'
import cloudwatch from '../pictures/CloudWatch.png'
import dynamodb from '../pictures/DynamoDB.png'
import ec2 from '../pictures/EC2.png'
import lambda from '../pictures/Lambda.png'
import s3 from '../pictures/S3.png'

class SkillPage extends React.Component {

    render() {

        const farLeftSkillsMap = {
            Python: python,
            Javascript: javascript,
            Java: java,
            Tensorflow: tensorflow,
            RestAPIs: restapi,
            SQL: sql,
            AWS: aws,
            DynamoDB: dynamodb,
        }

        const leftSkillsMap = {
            Selenium: selenium,
            Cucumber: cucumber,
            "Machine Learning": ml,
            Jira: jira,
            Cypress: cypress,
            EC2: ec2
        }

        const farRightSkillsMap = {
            React: react,
            NodeJS: node,
            Git: git,
            PyTorch: pytorch,
            GoogleAPI: googleapi,
            MongoDB: mongodb,
            Lambda: lambda,
            CloudWatch: cloudwatch
        }

        const rightSkillsMap = {
            Postman: postman,
            Protractor: protractor,
            C: c,
            Jenkins: jenkins,
            Typescript: typescript,
            S3: s3
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
                            <div style={{ marginRight: '10px', zIndex: '1' }}>
                                {farLeftSkills.map(skill => {
                                    return <div  class="left_body">{skill}</div>
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
                            <div style={{zIndex: '1'}}>
                            {farRightSkills.map(skill => {
                                return <div class="right_body">{skill}</div>
                            })}
                            {rightSkills.map(skill => {
                                return <div class="right_body">{skill}</div>
                            })}
                            </div>
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
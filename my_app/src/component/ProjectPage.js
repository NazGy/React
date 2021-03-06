import React from 'react';
import Typography from '@material-ui/core/Typography';
import '../css/Project.css'
import Divider from '@material-ui/core/Divider';
import facially from '../pictures/Facialy_Logo.png'
import balanceCheck from '../pictures/BalanceCheck_Logo.png'
import radar from '../pictures/Radar_Logo.png'
import elementScanner from '../pictures/ElementScanner_Logo.png'
import myInterviewer from '../pictures/MyInterviewer_Logo.png'
import projects from "../info/projects.json"
import DialogViewer from '../component/DialogViewer'

import radar1 from '../pictures/Radar_1.png'
import radar2 from '../pictures/Radar_2.png'
import radar3 from '../pictures/Radar_3.png'
import radar4 from '../pictures/Radar_4.png'
import radar5 from '../pictures/Radar_5.png'
import radar6 from '../pictures/Radar_6.png'
const radar_video = 'https://youtu.be/ITwl_mZSy-4'


class ProjectPage extends React.Component {

    componentDidMount() {
        this.setState({ open: " " })
    }

    handleOpen = (item) => {
        this.setState({ open: item })
    }

    handleClose = () => {
        this.setState({ open: " " })
    }

    render() {
        if (!this.state) {
            return null;
        }
        return (
            <div style={{ width: '100%', minHeight: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography className={"project_title"} style={{ marginTop: '90px' }}>My Projects.</Typography>
                </div>
                <div className="proj_row">
                    <div className="proj_col">
                        <img src={radar} className={"project_logo"}></img>
                        <p className="link" onClick={() => this.handleOpen("radar")}>Click for Images</p>
                        <DialogViewer items={[radar1, radar2, radar3, radar4, radar5, radar6, radar_video]} width={window.screen.width} height={window.screen.height} title="R.A.D.A.R" onClose={() => this.handleClose()} open={this.state.open === "radar"}></DialogViewer>
                    </div>
                    <div className={"column"} style={{ width: '30%' }}>
                        <p className={"project_name"} style={{ borderBottom: '0.8px solid white' }}>
                            R.A.D.A.R
                        </p>
                        <p className={"project_name"}>
                            April-August 2020
                        </p>
                        <p className={"project_name"}>
                            Intact
                        </p>
                        <p className={"project_desc"}>
                            • A web app solution to monitor and maintain environment stability by aggregating automated test data and build status reports to help over 100 employees
                        </p>
                        <p className={"project_desc"}>
                            • Deployed with React as the front end, flask as back end using a MongoDB database.
                        </p>
                        <p className={"project_desc"}>
                            • Created an proffessional commercial seen by vice-presidents, that displays key features of the application.
                        </p>
                    </div>
                </div>
                <div className={"proj_row"}><Divider className={"divider"}></Divider></div>
                <div className={"proj_row"}>
                    <div className={"column"} style={{ width: '30%' }}>
                        <p className={"project_name"} style={{ borderBottom: '0.8px solid white' }}>
                            MyInterviewer
                        </p>
                        <p className={"project_name"}>
                            March 2020
                        </p>
                        <p className={"project_name"}>
                            NewHacks
                        </p>
                        <p className={"project_desc"}>
                            • Created a web app made with React that prompts common interview questions and listens for speech responses in real time
                        </p>
                        <p className={"project_desc"}>
                            • Google API Speech to text was used to process audio and Flask was used for the backend
                        </p>
                    </div>
                    <img src={myInterviewer} className={"project_logo"}></img>
                </div>
                <div className={"proj_row"}><Divider className={"divider"}></Divider></div>
                <div className={"proj_row"}>
                    <img src={elementScanner} className={"project_logo"}></img>
                    <div className={"column"} style={{ width: '30%' }}>
                        <p className={"project_name"} style={{ borderBottom: '0.8px solid white' }}>
                            Element Scanner
                        </p>
                        <p className={"project_name"}>
                            2019
                        </p>
                        <p className={"project_name"}>
                            Intact
                        </p>
                        <p className={"project_desc"}>
                            • A machine learning solution in Python for locator errors in automation frameworks
                        </p>
                        <p className={"project_desc"}>
                            • Developed using Python libraries like scipy, numpy and flask
                        </p>
                        <p className={"project_desc"}>
                            • Presented the solution in front of lead manager for software department of commercial lines
                        </p>
                    </div>

                </div>
                <div className={"proj_row"}><Divider className={"divider"}></Divider></div>
                <div className={"proj_row"}>
                    <div className={"column"} style={{ width: '30%' }}>
                        <div className={"project_name"} style={{ borderBottom: '0.8px solid white' }}>
                            Facial.ly
                        </div>
                        <div className={"project_name"}>
                            2019-2020
                        </div>
                        <div className={"project_name"}>
                            UoftAI
                        </div>
                        <p className={"project_desc"}>
                            • Developed a Neural Network in TensorFlow using transfer learning to classify multiple facial features of a given image.
                        </p>
                        <p className={"project_desc"}>
                            • Processed and trained on thousands of photos from a face dataset through pandas, NumPy and sklearn
                        </p>
                    </div>
                    <img src={facially} className={"project_logo"}></img>
                </div>
                <div className={"proj_row"}><Divider className={"divider"}></Divider></div>
                <div className={"proj_row"}>
                    <img src={balanceCheck} className={"project_logo"}></img>
                    <div className={"column"} style={{ width: '30%' }}>
                        <p className={"project_name"} style={{ borderBottom: '0.8px solid white' }}>
                            BalanceCheck
                        </p>
                        <p className={"project_name"}>
                            2018
                        </p>
                        <p className={"project_name"}>
                            CSC301
                        </p>
                        <p className={"project_desc"}>
                            • Developed a React web application with Django as the back end, that validates the correctness of online news articles through user feedback
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectPage;
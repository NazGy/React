import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import { withRouter } from 'react-router';
import "../css/Experience.css"

class ExperiencePage extends React.Component {

    render() {
        return (
            <div style={{ width: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography className={"experience_title"} style={{ marginTop: '90px' }}>My Experiences.</Typography>
                    <Typography className={"snappy_byline"}>You had me at Hello World</Typography>
                    <img className={"cover_photo"} src={require('../pictures/Cover.png')} />
                    {/* Job 1 */}
                    <div className={"job_row"}>
                        <div className={"column"} style={{ width: '33%' }}>
                            <p className={"job_title"} >
                                Automation Developer
                            </p>
                            <Divider className={"horizontal"}></Divider>
                            <p className={"job_date"}>
                                May 2019 - Present
                            </p>
                            <p className={"job_date"}>
                                Toronto, Ontario
                            </p>
                        </div>
                        <Divider className={"vert"} orientation="vertical" flexItem />
                        <div className={"column"} style={{ flexWrap: 'wrap', width: '33%', marginRight: '20px', marginLeft: '20px', marginTop: '15px' }} className="job_desc">
                            <p className={"desc_row"}>•	Created and maintained UI and API tests for several web applications and services using protractor and postman</p>
                            <p className={"desc_row"}>•	Developed a machine learning solution for locator errors in automation frameworks, through Python and flask</p>
                            <p className={"desc_row"}>•	Proposed and designed a UI testing framework by implementing practices of BDD using CucumberJS</p>
                            <p className={"desc_row"}>•	Involved in developing a reporting dashboard to display the stability of the system over time, using React, Flask and MongoDB</p>
                        </div>
                        <Divider className="vert" orientation="vertical" flexItem />
                        <div className={"column"} style={{ width: '33%' }}>
                            <img className={"logo"} src={require('../pictures/Intact.png')}></img>
                        </div>
                    </div>
                    {/* Job 2 */}
                    <div className={"job_row"}>
                        <div className={"column"} style={{ width: '33%'}}>
                            <p className={"job_title"}>
                                Community Engagement Ambassador
                            </p>
                            <Divider className={"horizontal"}></Divider>
                            <p className={"job_date"}>
                                August 2018 - April 2019
                            </p>
                            <p className={"job_date"}>
                                Toronto, Ontario
                            </p>
                        </div>
                        <Divider className={"vert"} orientation="vertical" flexItem />
                        <div className={"column"} style={{ flexWrap: 'wrap', width: '33%', marginRight: '20px', marginLeft: '20px' }} className="job_desc">
                            <p className={"desc_row"}>•	Initiated the drop-in badminton program and led weekly board game café events at Hart house</p>
                            <p className={"desc_row"}>•	Outreached events to visiting students to promote inclusivity and support wellness</p>
                        </div>
                        <Divider className="vert" orientation="vertical" flexItem />
                        <div className={"column"} style={{ width: '33%' }}>
                            <img className={"logo"} src={require('../pictures/Hart House.png')}></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExperiencePage
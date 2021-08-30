import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import { withRouter } from 'react-router';
import "../css/Experience.css"
import { volunteer } from '../info/volunteer';
import { job } from '../info/job';


class ExperiencePage extends React.Component {

    render() {
        return (
            <div style={{ width: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography className={"experience_title"} style={{ marginTop: '90px' }}>My Experiences.</Typography>
                    <Typography className={"snappy_byline"}>You had me at Hello World</Typography>
                    <img className={"cover_photo"} src={require('../pictures/Cover.png')} />
                    {/* Jobs */}
                    {job.map(exp => {
                        return (<div className={"job_row"}>
                            <div className={"column"} style={{ width: '33%' }}>
                                <p className={"job_title"}>
                                    {exp.role}
                                </p>
                                <Divider className={"horizontal"}></Divider>
                                <p className={"job_date"}>
                                    {exp.name}
                                </p>
                                <p className={"job_date"}>
                                    {exp.date}
                                </p>
                                <p className={"job_date"}>
                                    {exp.location}
                            </p>
                            </div>
                            <Divider className={"vert"} orientation="vertical" flexItem />
                            <div className={"column"} style={{ flexWrap: 'wrap', width: '33%', marginRight: '20px', marginLeft: '20px' }} className="job_desc">
                                {
                                    exp.description.map(desc => {
                                        return <p className={"desc_row"}>• {desc}</p>
                                    })
                                }
                            </div>
                            <Divider className="vert" orientation="vertical" flexItem />
                            <div className={"column"} style={{ width: '33%' }}>
                                <img className={"logo"} src={exp.photo}></img>
                            </div>
                        </div>
                        )
                    })
                    }
                    {/* VOLUNTEER */}
                    <div style={{ marginTop: "120px" }}>
                        <p className="other_exp">Volunteer experiences</p>
                    </div>
                    {volunteer.map(exp => {
                        return (<div className={"job_row"}>
                            <div className={"column"} style={{ width: '33%' }}>
                                <p className={"job_title"}>
                                    {exp.name}
                                </p>
                                <Divider className={"horizontal"}></Divider>
                                <p className={"job_date"}>
                                    {exp.date}
                                </p>
                                <p className={"job_date"}>
                                    {exp.position}
                                </p>
                            </div>
                            <Divider className={"vert"} orientation="vertical" flexItem />
                            <div className={"column"} style={{ flexWrap: 'wrap', width: '33%', marginRight: '20px', marginLeft: '20px' }} className="job_desc">
                                {
                                    exp.description.map(desc => {
                                        return <p className={"desc_row"}>• {desc}</p>
                                    })
                                }
                            </div>
                            <Divider className="vert" orientation="vertical" flexItem />
                            <div className={"column"} style={{ width: '33%' }}>
                                <img className={"logo"} src={exp.photo}></img>
                            </div>
                        </div>
                        )
                    })
                    }
                </div>
            </div>
        )
    }
}

export default ExperiencePage
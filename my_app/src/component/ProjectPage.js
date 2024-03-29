import React from 'react';
import Typography from '@material-ui/core/Typography';
import '../css/Project.css'
import Divider from '@material-ui/core/Divider';
import { projects } from "../info/projects"
import DialogViewer from '../component/DialogViewer'

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

    generateDialogue = (proj) => {
        return (
            <div>
                <p className="link" onClick={() => this.handleOpen(proj.name)}>Click for Images</p>
                <DialogViewer items={[].concat(
                    proj.dialogue.images ? proj.dialogue.images : [],
                    proj.dialogue.video ? proj.dialogue.video : [])}
                    width={window.screen.width}
                    height={window.screen.height}
                    title={proj.name}
                    onClose={() => this.handleClose()}
                    open={this.state.open === proj.name}>
                </DialogViewer>
            </div>
        )
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
                {projects.map((proj, index) => {
                    return (
                        <div>
                            <div className="proj_row">
                                {index % 2 == 0 ?
                                    <div className="proj_col">
                                        <img src={proj.logo} className={"project_logo"}></img>
                                        {proj["dialogue"] ? this.generateDialogue(proj) : ""}
                                    </div> : ""
                                }
                                <div className={"column"} style={{ width: '30%' }}>
                                    <p className={"project_name"} style={{ borderBottom: '0.8px solid white' }}>
                                        {proj.name}
                                    </p>
                                    <p className={"project_name"}>
                                        {proj.date}
                                    </p>
                                    <p className={"project_name"}>
                                        {proj.setting}
                                    </p>
                                    {proj.description.map(desc => {
                                        return (
                                            <p className={"project_desc"}>
                                                • {desc}
                                            </p>)
                                    })}
                                </div>
                                {index % 2 == 1 ?
                                    <div className="proj_col">
                                        <img src={proj.logo} className={"project_logo"}></img>
                                        {proj["dialogue"] ? this.generateDialogue(proj) : ""}
                                    </div> : ""
                                }
                            </div>
                            {index < projects.length - 1 ?
                                <div className={"proj_row"}><Divider className={"divider"}></Divider></div>
                                : ""
                            }
                        </div>
                    )
                })
                }
                <div className={"proj_row"}></div>
            </div>
        )
    }
}

export default ProjectPage;
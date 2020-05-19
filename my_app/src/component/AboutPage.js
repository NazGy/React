import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import {withRouter} from 'react-router';
import "../css/About.css"

class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <Typography className={"about_title"}>About Me.</Typography>

                <Typography className={"about_desc"}>Passionate enthusiast for software design and machine learning</Typography>
            </div>
        )
    }
}

export default withRouter(AboutPage)
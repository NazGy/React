import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import {withRouter} from 'react-router';


class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <Typography>Hello I'm the About Page</Typography>
            </div>
        )
    }
}

export default withRouter(AboutPage)
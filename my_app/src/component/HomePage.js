import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router';
import "../css/Home.css"

class HomePage extends React.Component {
    render() {
        return (
            <div className={"center_page"} style={{minHeight: '100%'}}>
                <div className={"row"} style={{marginTop: '90px', }}>
                    <img className={"photo"} style={{ width: '400', height: '400', borderRadius: '50%' }} src={require('../pictures/Home_Photo.jpg')} />
                    <Typography className={"name"}>Nazar Georgis-Yap.</Typography>
                </div>
                <div className={"row"}>
                    <Typography className={"title"}>Software Developer</Typography>
                </div>
            </div>
        )
    }
}

export default withRouter(HomePage)
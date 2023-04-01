import React from 'react';
import { withRouter } from 'react-router';
import "../css/Home.css"

class HomePage extends React.Component {
    render() {
        return (
            <div className={"center_page"} style={{minHeight: '100%'}}>
                <img className={"photo"} style={{width: '33%', borderRadius: '50%', position: 'absolute' }} src={require('../pictures/Home_Photo.jpg')} />
                <div style={{marginTop: '35%', zIndex: '5'}}>
                    <p className={"name"}>Nazar Georgis-Yap.</p>
                    <p className={"title"}>Software Developer</p>
                </div>
            </div>
        )
    }
}

export default withRouter(HomePage)
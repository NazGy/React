import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import "./css/Header.css"
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';

class Header extends React.Component {

    componentDidMount() {
        this.setState({
            toggled: this.props.location.pathname? this.props.location.pathname !== "/" ? this.props.location.pathname : "/Home" : "/Home"
        })
    }

    handleChange = (index) => {
        this.setState({
            toggled: index
        })
    }

    render() {

        const colorMap = {
            "/Home": 'white',
            "/About": 'white',
            "/Experience": 'white',
            "/Skills": 'white',
            "/Projects": 'white',
            "/Contact": 'white',
        }

        if (this.state && this.state.toggled) {
            colorMap[this.state.toggled] = "#7F13D3"
        }

        return (
            <AppBar position="fixed" style={{ backgroundColor: '#23251C', boxShadow: 'none', padding: 'none', width: '100%'}}>
                <Toolbar>
                    <img style={{width: '40', height: '40'}} src={require('./pictures/Logo.png')}/>
                    <Link to="/">
                        <Button style={{color: colorMap["/Home"]}} onClick={() => this.handleChange("/Home")}>Home</Button>
                    </Link>
                    {/* /
                    <Link to="/About">
                        <Button style={{color: colorMap["/About"]}} onClick={() => this.handleChange("/About")}>About</Button>
                    </Link> */}
                    /
                    <Link to="/Experience">
                        <Button style={{color: colorMap["/Experience"]}} onClick={() => this.handleChange("/Experience")}>Experience</Button>
                    </Link>
                    /
                    <Link to="/Skills">
                        <Button style={{color: colorMap["/Skills"]}} onClick={() => this.handleChange("/Skills")}>Skills</Button>
                    </Link>
                    /
                    <Link to="/Projects">
                        <Button style={{color: colorMap["/Projects"]}} onClick={() => this.handleChange("/Projects")}>Projects</Button>
                    </Link>
                    /
                    <Link to="/Contact">
                        <Button style={{color: colorMap["/Contact"]}} onClick={() => this.handleChange("/Contact")}>Contact</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withRouter(Header);
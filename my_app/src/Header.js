import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import "./css/Header.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { withRouter } from 'react-router';

class Header extends React.Component {

    componentDidMount() {
        this.setState({
            toggled: "/"
        })
    }

    handleChange = (index) => {
        this.setState({
            toggled: index
        })
    }

    render() {

        const colorMap = {
            "/": 'white',
            "/About": 'white',
            "/Experience": 'white',
            "/Skills": 'white',
            "/Projects": 'white',
        }

        if (this.state && this.state.toggled) {
            colorMap[this.state.toggled] = "#7F13D3"
        }

        return (
            <AppBar position="fixed" style={{ backgroundColor: '#23251C', boxShadow: 'none', padding: 'none', width: '100%'}}>
                <Toolbar>
                    <img style={{width: '40', height: '40'}} src={require('./pictures/Logo.png')}/>
                    <Link to="/">
                        <Button style={{color: colorMap["/"]}} onClick={() => this.handleChange("/")}>Home</Button>
                    </Link>
                    /
                    <Link to="/About">
                        <Button style={{color: colorMap["/About"]}} onClick={() => this.handleChange("/About")}>About</Button>
                    </Link>
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
                </Toolbar>
            </AppBar>
        )
    }
}

export default withRouter(Header);
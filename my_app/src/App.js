import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './component/HomePage.js'
import Header from './Header.js'
import { Typography } from '@material-ui/core';
import "./css/Home.css"
import { withRouter, Redirect } from 'react-router';
import {
    Switch,
    Route,
    BrowserRouter as Router
} from "react-router-dom";
import AboutPage from './component/AboutPage.js';
import ExperiencePage from './component/ExperiencePage.js';
import SkillPage from './component/SkillPage.js';
import ProjectPage from './component/ProjectPage.js';


class App extends React.Component {
    render() {
        return (
            <div className="backdrop">
                <Router>
                    <div>
                        <Header></Header>
                        <Switch>
                            <Route exact path="/">
                                <Redirect to="/Home"></Redirect>
                            </Route>
                            <Route exact path="/Home">
                                <HomePage></HomePage>
                            </Route>
                            <Route exact path="/About">
                                <AboutPage></AboutPage>
                            </Route>
                            <Route exact path="/Experience">
                                <ExperiencePage></ExperiencePage>
                            </Route>
                            <Route exact path="/Skills">
                                <SkillPage></SkillPage>
                            </Route>
                            <Route exact path="/Projects">
                                <ProjectPage></ProjectPage>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;
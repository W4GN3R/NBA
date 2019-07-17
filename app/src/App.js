import React, { Component } from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import ContentHome from './pages/home';
import ContentTeams from './pages/teams';

import "./styles/reset.css";

class App extends Component {
    render() {
        return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={ContentHome} />
                    <Route path="/lakers" component={ContentTeams} />
                    <Route path="/warriors" component={ContentTeams} />
                    <Route path="/celtics" component={ContentTeams} />
                    <Route path="/toronto" component={ContentTeams} />
                    <Route path="/bucks" component={ContentTeams} />
                    <Route path="/houston" component={ContentTeams} />
                    <Route path="*" component={ContentHome} />
                </Switch>
            </BrowserRouter>
        </>
        )
    }
}

export default App;


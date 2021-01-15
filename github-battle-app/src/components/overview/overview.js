import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import OverviewTechnology from './pages/overview-technology';

const GithubOverviewPage = () => {

    return (
        <>
            <ul className="flex-center">
                <li><NavLink activeClassName="active" to="/overview/all" className="btn-clear nav-link"> All </NavLink></li>
                <li><NavLink activeClassName="active" to="/overview/js" className="btn-clear nav-link" >JavaScript</NavLink></li>
                <li><NavLink activeClassName="active" to="/overview/ruby" className="btn-clear nav-link ">Ruby</NavLink></li>
                <li><NavLink  activeClassName="active" to="/overview/java" className="btn-clear nav-link ">Java</NavLink></li>
                <li><NavLink activeClassName="active" to="/overview/css" className="btn-clear nav-link ">CSS</NavLink></li>
                <li><NavLink activeClassName="active" to="/overview/python" className="btn-clear nav-link ">Python</NavLink></li>
            </ul>
            
            <Switch>
                <Route exact path="/" component={OverviewTechnology} />
                <Route exact path="/overview" component={OverviewTechnology} />
                <Route path="/overview/:name" component={OverviewTechnology} />
            </Switch>
        </>
    )

}

export default GithubOverviewPage;
import React from 'react';
import { HashRouter, NavLink, Route } from 'react-router-dom';
import GithubBattlePage from './components/battle/battle';
import GithubOverviewPage from './components/overview/overview';

const App = () => {
  return (
    <HashRouter>
      <div className="container">
        <div>
          <nav className="row space-between">
            <ul className="row nav">
              <li>
                <NavLink activeClassName="active" className="nav-link" to="/overview">
                  Overview
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" className="nav-link" to="/compare" aria-current="page" href="/compare">
                  Battle
                </NavLink>
              </li>
            </ul>
          </nav>

          <Route exact path="/" component={GithubOverviewPage} />
          <Route path="/overview" component={GithubOverviewPage} />
          <Route exact path="/compare" component={GithubBattlePage} />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;

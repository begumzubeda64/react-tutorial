import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";

const pages = [
    //Public pages
    {
        exact: true,
        path: '/login',
        component: LoginPage,
        layout: PublicLayout
    },
    //Authenticated pages
    {
        exact: false,
        path: '/dashboard',
        component: DashboardPage,
        layout: AuthLayout
    },
    {
        exact: false,
        path: '/settings',
        component: SettingPage,
        layout: SettingLayout
    }
];

const App = () => {
    const history = createBrowserHistory();
    return (
        <Router history={history}>
            <Switch>
                {pages.map((i, index) => {
                    return (
                        <Route key={index}
                        exact={i.exact}
                        path={i.path}
                        render={props => (
                            <i.layout history={props.history}>
                                <i.component {...props} />
                            </i.layout>
                        )}></Route>
                    )
                })}
            </Switch>
        </Router>
    )
}
import { Redirect, Route } from "react-router-dom";

export const Private = ({component: Component, isAuthenticated, ...rest}) => (
    <Route {...rest} render={props => (
        isAuthenticated ? (<Component {...props} />) : 
        (<Redirect to={{pathname: '/login', state: {from: props.location}}} />)
    )}></Route>
);

export const Public = ({component: Component, isAuthenticated, ...rest}) => (
    <Route {...rest} render={props => (
        isAuthenticated ? 
        (<Redirect to={{pathname: '/dashboard', state: {from: props.location}}} />) : 
        (<Component {...props} />)
    )}></Route>
);

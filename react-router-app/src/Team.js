import React from 'react';
import { Link } from 'react-router-dom';

export default class TeamComponent extends React.Component{
    render(){
        return (
            <ul>
                <li>
                    <Link to="/teams/team1">Team1</Link>
                </li>
                <li>
                    <Link to="/teams/team2">Team2</Link>
                </li>
                <li>
                    <Link to="/teams/team3">Team3</Link>
                </li>
            </ul>
        )
    }
}
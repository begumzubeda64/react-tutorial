import React from 'react';

export default class TeamChildComponent extends React.Component{
    render(){
        const { match } = this.props;
        return (
            <>
                <h1>Team name is {match.params.teamname}</h1>
            </>
        )
    }
}
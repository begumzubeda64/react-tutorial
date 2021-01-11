import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    handleChange(){

    }

    addNewName(){

    }
    
    render(){
        console.log(this.props.names); //accessing props name
        const names = this.props.names.map(i => {
            return <li key={i.name}>{i.name} {i.profile}</li>
        })
        return (
            <>
                <input onChange={this.handleChange} type="text" name="username" />
                <button onClick={this.addNewName}>Add New Name</button>
                <ul>{names}</ul>
            </>
        )
    }
}

const names = [
    {
        name: 'Zubeda',
        profile: 'Node Js Dev'
    },
    {
        name: 'Zubeda1',
        profile: 'Js Dev'
    },
    {
        name: 'Zubeda2',
        profile: 'React Js Dev'
    }
]

ReactDOM.render(<Hello names={names} />, document.getElementById("app")); //passing name from parent to child
import React from 'react'

class Hello extends React.Component {
    state = {
        completed: false
    }

    removeItem(index){
        this.setState({ completed: true });
        this.props.removeItem(index);
    }

    render(){
        const { tasks } = this.props;
        return (
            <ol>
            {tasks && tasks.map((item, index) => { //check for tasks
                return (
                    <li key={index}>
                        {item}
                        <button onClick={() => this.removeItem(index)}>
                            Delete
                        </button>
                    </li>
                );
            })}
            </ol>
        )
    }
  
}
export default Hello;
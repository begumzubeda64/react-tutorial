import React, { Component, useContext } from 'react';

const MyContext = React.createContext();

class MyProvider extends Component {
    state = {
        name: "Wes",
        age: 100,
        cool: true
    }

    render() {
        return (
            <MyContext.Provider value={{
                state: this.state,
                growAYearOlder: () => this.setState({
                    age: this.state.age + 1
                })
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

const Family = () => {
    return (
        <div className="family">
            <Person />
            <Person1 />
        </div>
    );
}

class Person extends Component {
    componentDidMount(){
        console.log(this.context.state.name); //accessed directly
    }

    render() {
        return (
            <div className="person">
                <MyContext.Consumer>
                    {(context) => (
                        <>
                            <p>Age: {context.state.age}</p>
                            <p>Name: {context.state.name}</p>
                            <button onClick={context.growAYearOlder}>🍰🍥🎂</button>
                        </>
                    )}
                </MyContext.Consumer>
            </div>
        )
    }
}
Person.contextType = MyContext; //to access context directly

const Person1 = () => {
    const { state, growAYearOlder } = useContext(MyContext);
    
    return(
        <div>
            <p>Age: {state.age}</p>
            <p>Name: {state.name}</p>
            <button onClick={growAYearOlder}>🍰🍥🎂</button>
        </div>
    )
}

class App extends Component {
    render() {
        return (
            <MyProvider>
                <div>
                    <p>I am the App</p>
                    <Family />
                </div>
            </MyProvider>
        )
    }
}

export default App;



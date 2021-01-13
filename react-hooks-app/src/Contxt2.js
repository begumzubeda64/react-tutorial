import React, { useContext,  useEffect,  useReducer } from 'react';
import{ formReducer, sharedContext } from './context';

const init = (initialState) => { //lazy initialization
    return { count: initialState };
}
const initialState = { data: [] };

const Parent = () => {
    const [ state, dispatch ] = useReducer(formReducer, initialState, init);
    
    useEffect(() => {
        dispatch({
            type: 'update',
            data: [
                {email: 'zubu@gb.com', password: 'llyyyuu'},
                {email: 'ara@gb.com', password: 'sxsefu'}
            ]
        });
        return () => null;
    }, []);

    return (
        <sharedContext.Provider value={[state, dispatch]}>
            <Form />
        </sharedContext.Provider>
    );
}

const Form = () => {
    const [ state, dispatch ] = useContext(sharedContext);
    const obj = [
        {email: 'newzubu@gb.com', password: 'llyyyuu'},
        {email: 'newara@gb.com', password: 'sxsefu'}
    ]
    return (
        <div>
            <ul>
            {
                state.data && state.data.map((i, index) => {
                    return <li key={index}>{i.email}</li>
                })
            }
        </ul>
        <button onClick={ () => dispatch({type: 'update', data: obj}) }>Change</button>
        </div>
        
    )
}

export default Parent;
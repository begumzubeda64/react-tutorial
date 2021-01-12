import React, { useState } from 'react';

const User = (props) => {
    const [ user, setUser ] = useState({name: '', email: ''});
    const [ submitted, setSubmitted ] = useState(false);
    const [ message, setMessage ] = useState('');

    const handleSubmit = (e) => {
        if(user.name && user.email){
            setSubmitted(true);
        }
        setMessage('Please enter values...');
        return;
    }

    return (
        <form>
            <input type="text" onChange={(e) => setUser({...user, name: e.target.value})} value={user.name} />
            <input type="email" onChange={(e) => setUser({...user, email: e.target.value})} value={user.email} /> 
            <button onClick={handleSubmit}>Submit</button> <br />
            {user.name}<br />
            {user.email}<br />
            {message}
        </form>
    )
}

export default User;
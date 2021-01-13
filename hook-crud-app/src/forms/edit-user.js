import React, { useEffect, useState } from 'react';

const EditUserForm = (props) => {
    const [ user, setUser ] = useState(props.currentUser);

    useEffect(() => { //setting currentUser after evry update
        setUser(props.currentUser);
        return () => null;
    }, [props]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({
            ...user, [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.updateUser(user.id, user);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleChange} />
            <label>Username</label>
            <input type="text" name="username" value={user.username} onChange={handleChange} />
            <button>Update user</button>
            <button onClick={() => props.setEditing(false)} className="button muted-button">
                Cancel
            </button>
        </form>
    );
}

export default EditUserForm;

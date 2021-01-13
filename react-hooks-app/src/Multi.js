import React, { useEffect, useState } from 'react';

const Multiple = () => {
    const [ form, setForm ] = useState({
        username: '',
        password: ''
    });
    const [ valid, setValid ] = useState(false);

    useEffect(() => {
        if(form && form.username.length > 2 && form.password.length > 4){
            setValid(true);
        }
        return () => null;
    }, [form]);

    const updateField = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({
            ...form, [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(valid){
            alert("Valid!!" + form.username);
        }
        else{
            alert("Not Valid!!");
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" value={form.username} onChange={updateField} />
                <input type="password" name="password" value={form.password} onChange={updateField} />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default Multiple;
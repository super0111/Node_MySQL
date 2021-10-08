import React, { useState, useEffect } from 'react';

const EditUserForm = (props) => {

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const [user, setUser] = useState(props.currentUser);

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.username) props.updateUser(user);
    }

    return (
        <form>
            <label>Username</label>
            <input className="u-full-width" type="text" value={user.name} name="name" onChange={handleChange} />
            <label>Email</label>
            <input className="u-full-width" type="text" value={user.username} name="username" onChange={handleChange} />
            <button className="button-primary size mt-2" type="submit" onClick={handleSubmit} >Edit user</button>
            <button type="submit" onClick={() => props.setEditing(false)} >Cancel</button>
        </form>
    )
}

export default EditUserForm;
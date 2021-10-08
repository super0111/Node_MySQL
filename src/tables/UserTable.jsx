import React from 'react';

const UserTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.users.length > 0 ? (
                    props.users.map(user => {
                        const { id, name, username } = user;
                        const id1 = id + 1;
                        return (
                            <tr key={id1}>
                                <td>{id1}</td>
                                <td>{name}</td>
                                <td>{username}</td>
                                <td>
                                    <button className="bg-del-color" onClick={() => props.deleteUser(id)}>Delete</button>
                                    <button className="bg-edit-color" onClick={() => props.editUser(id, user)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                ) : (
                    <tr>
                        <td colSpan={4}>No users found</td>
                    </tr>
                )
                }
            </tbody>
        </table>
    )
}

export default UserTable;
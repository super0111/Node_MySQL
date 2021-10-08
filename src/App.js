import React, { useState } from "react";
import userList from "./data.js";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";

const App = () => {
  const [users, setUsers] = useState(userList);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const [editing, setEditing] = useState(false);

  const initialUser = { id: null, name: "", username: "" };

  const [currentUser, setCurrentUser] = useState(initialUser);

  const editUser = (id, user) => {
    setEditing(true);
    setCurrentUser(user);
  };

  const updateUser = (newUser) => {
    setUsers(
      users.map((user) => (user.id === currentUser.id ? newUser : user))
    );
    setCurrentUser(initialUser);
    setEditing(false);
  };

  return (
    <div className="container font">
      <h1 className="mt-5 header-title">React Hooks CRUD App</h1>
      <div className="row">
        <div className="col-lg-5 mt-5">
          <div className="align-items-center">
            {editing ? (
              <div>
                <h2 className='form-title'>Edit User</h2>
                <EditUserForm
                  currentUser={currentUser}
                  setEditing={setEditing}
                  updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
                <h2 className="form-title">Add User</h2>
                <AddUserForm addUser={addUser} />
              </div>
            )}
          </div>
        </div>
        <div className="col-lg-7 mt-5 pl-5 d-flex justify-content-center">
          <div className="align-items-center">
            <h2 className="form-title">View Users</h2>
            <UserTable
              users={users}
              deleteUser={deleteUser}
              editUser={editUser}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

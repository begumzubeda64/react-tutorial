import React, { useState } from 'react';
import AddUserForm from './forms/add-user';
import EditUserForm from './forms/edit-user';
import UserTable from './tables/user-table';

const App = () => {
  const userData = [{ id: 1, name: 'Zubu', username: 'Abbas'}];
  const initialUserData = [{ id: null, name: '', username: ''}];
  
  const [users, setUsers] = useState(userData);
  const [currentUser, setCurrentUser] = useState(initialUserData);
  const [editing, setEditing] = useState(false);

  const addUser = (user) => {
    let res = users.map(a => a.id).sort();
    if(users.length > 0){
      user.id = res[res.length -1] + 1;
    }
    else{
      user.id = 1;
    }
    
    setUsers([
      ...users, user
    ]);
  }

  const deleteRow = (id) => {
    setEditing(false);
    setUsers(users.filter(user => user.id !== id));
  }

  const updateRow = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => user.id === id ? updatedUser: user));
  }

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({id: user.id, name: user.name, username: user.username});
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="d-flex flex-lg">
          {editing ? (
            <>
              <h1>Edit User</h1>
              <EditUserForm setEditing={setEditing} currentUser={currentUser} updateUser={updateRow} />
            </>
          ) : (
            <>
              <h2>Add User</h2>
              <AddUserForm addUser={addUser} />
            </>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editUser={editRow} deleteUser={deleteRow} />
        </div>
      </div>
      
    </div>
  );
}

export default App;

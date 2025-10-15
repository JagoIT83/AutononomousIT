import React, { useState, useEffect } from 'react';
import { display, value } from '../utils/fields.js';

export default function AdminPanel({ authService }) {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    active: true,
    is_admin: false
  });
  const [editingUser, setEditingUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const userList = await authService.getUserList();
      setUsers(userList);
    } catch (error) {
      setError('Failed to load users: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    if (!newUser.username || !newUser.password) {
      setError('Username and password are required');
      return;
    }

    try {
      setError('');
      await authService.createUser({
        username: newUser.username,
        password: newUser.password,
        active: newUser.active,
        is_admin: newUser.is_admin
      });
      
      setNewUser({ username: '', password: '', active: true, is_admin: false });
      await loadUsers();
    } catch (error) {
      setError('Failed to create user: ' + error.message);
    }
  };

  const handleUpdateUser = async (user) => {
    const newPassword = prompt('Enter new password (leave empty to keep current):');
    const updateData = {};
    
    if (newPassword && newPassword.trim()) {
      updateData.password = newPassword.trim();
    }
    
    const newActive = confirm(`Set user as ${display(user.active) === 'true' ? 'INACTIVE' : 'ACTIVE'}?`);
    if (newActive) {
      updateData.active = display(user.active) === 'true' ? false : true;
    }

    if (Object.keys(updateData).length === 0) {
      return;
    }

    try {
      setError('');
      await authService.updateUser(value(user.sys_id), updateData);
      await loadUsers();
    } catch (error) {
      setError('Failed to update user: ' + error.message);
    }
  };

  const handleDeleteUser = async (user) => {
    if (!confirm(`Are you sure you want to delete user "${display(user.username)}"?`)) {
      return;
    }

    try {
      setError('');
      await authService.deleteUser(value(user.sys_id));
      await loadUsers();
    } catch (error) {
      setError('Failed to delete user: ' + error.message);
    }
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel - User Management</h2>
      
      {error && <div className="error">{error}</div>}
      
      <form onSubmit={handleCreateUser} className="user-form">
        <div>
          <label>Username</label>
          <input
            type="text"
            value={newUser.username}
            onChange={(e) => setNewUser({...newUser, username: e.target.value})}
            placeholder="Username"
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={newUser.password}
            onChange={(e) => setNewUser({...newUser, password: e.target.value})}
            placeholder="Password"
            required
          />
        </div>
        <div>
          <label>Role</label>
          <select
            value={newUser.is_admin}
            onChange={(e) => setNewUser({...newUser, is_admin: e.target.value === 'true'})}
          >
            <option value={false}>User</option>
            <option value={true}>Admin</option>
          </select>
        </div>
        <button type="submit" className="add-user-btn">
          Add User
        </button>
      </form>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '20px' }}>Loading users...</div>
      ) : (
        <table className="users-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Status</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={value(user.sys_id)}>
                <td>{display(user.username)}</td>
                <td>
                  <span className={`status-badge ${display(user.active) === 'true' ? 'status-active' : 'status-inactive'}`}>
                    {display(user.active) === 'true' ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td>
                  <span className={`status-badge ${display(user.is_admin) === 'true' ? 'admin-badge' : 'user-badge'}`}>
                    {display(user.is_admin) === 'true' ? 'Admin' : 'User'}
                  </span>
                </td>
                <td>
                  <div className="admin-actions">
                    <button 
                      className="update-btn"
                      onClick={() => handleUpdateUser(user)}
                    >
                      Edit
                    </button>
                    <button 
                      className="delete-btn"
                      onClick={() => handleDeleteUser(user)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      
      {users.length === 0 && !loading && (
        <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
          No users found. Create the first user above.
        </div>
      )}
    </div>
  );
}
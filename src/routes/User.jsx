import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

const User = () => {
  const navigate = useNavigate();
  const { clientId } = useParams();
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const token = sessionStorage.getItem('access_token');

      const response = await axios.get(`https://user-service-production-08be.up.railway.app/users/${clientId}/client`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [clientId]);

 const handleAddUser = () => {
  navigate(`/oauth/client/${clientId}/dashboard/user/addUser`);
};

  const handleEdit = (id) => {
    console.log('Edit user:', id);
  };

  const handleDelete = (id) => {
    console.log('Delete user:', id);
  };

  return (
    <>
      <div className="min-h-screen bg-white p-2">
        <div className="max-w-5xl ml-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold mb-6">Users</h2>
            <button
              onClick={handleAddUser}
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200"
            >
              Add User
            </button>
          </div>

          <div className="bg-white rounded-lg shadow border border-gray-300 overflow-hidden w-[1000px]">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-300">
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Name</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Email</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Roles</th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 border-b border-gray-200">
                    <td className="px-6 py-4 text-gray-800">{user.name}</td>
                    <td className="px-6 py-4 text-gray-800">{user.email}</td>
                    <td className="px-6 py-4 text-gray-800">{user.roles.join(', ')}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => handleEdit(user.id)}
                          className="bg-zinc-900 text-white px-3 py-1 rounded-md hover:bg-gray-800 transition-colors duration-200"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="bg-zinc-900 text-white px-3 py-1 rounded-md hover:bg-gray-800 transition-colors duration-200"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {users.length === 0 && (
                  <tr>
                    <td colSpan="4" className="text-center px-6 py-4 text-gray-500">
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default User;

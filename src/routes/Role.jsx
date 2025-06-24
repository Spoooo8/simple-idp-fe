import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

const Role = () => {
  const navigate = useNavigate();
  const { clientId } = useParams();
  const [roles, setRoles] = useState([]);

  const fetchRoles = async () => {
    try {
      const token = sessionStorage.getItem('access_token');

      const response = await axios.get(`http://localhost:8080/client-roles/${clientId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setRoles(response.data);
    } catch (error) {
      console.error('Error fetching roles:', error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    fetchRoles();
  }, [clientId]);

  const handleAddRole = () => {
    navigate(`/oauth/client/${clientId}/dashboard/role/addRole`);
  };

  const handleEdit = (id) => {
    console.log('Edit role:', id);
  };

  const handleDelete = (id) => {
    console.log('Delete role:', id);
  };

  return (
    <>
      <div className="min-h-screen bg-white p-2">
        <div className="max-w-5xl ml-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold mb-6">Roles</h2>
            <button
              onClick={handleAddRole}
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200"
            >
              Add Role
            </button>
          </div>

          <div className="bg-white rounded-lg shadow border border-gray-300 overflow-hidden w-[1000px]">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-300">
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Id</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Name</th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {roles.map((role) => (
                  <tr key={role.id} className="hover:bg-gray-50 border-b border-gray-200">
                    <td className="px-6 py-4 text-gray-800">{role.clientRoleId}</td>
                    <td className="px-6 py-4 text-gray-800">{role.roleName}</td>
              
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => handleEdit(role.id)}
                          className="bg-zinc-900 text-white px-3 py-1 rounded-md hover:bg-gray-800 transition-colors duration-200"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(role.id)}
                          className="bg-zinc-900 text-white px-3 py-1 rounded-md hover:bg-gray-800 transition-colors duration-200"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {roles.length === 0 && (
                  <tr>
                    <td colSpan="4" className="text-center px-6 py-4 text-gray-500">
                      No roles found.
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

export default Role;

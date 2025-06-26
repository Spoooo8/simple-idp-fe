import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from '../components/general/Modal';

// Axios instance with token interceptor
const axiosInstance = axios.create({
  baseURL: 'https://user-service-zvct.onrender.com',
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('access_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const AddRole = () => {
  const { clientId } = useParams();
  const navigate = useNavigate();

  const [roleName, setRoleName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axiosInstance.post('/client-roles', {
        clientRoleId: parseInt(clientId),
        roleName: roleName
      });

      // Navigate after successful submission
      navigate(`/oauth/client/${clientId}/dashboard/role`);
    } catch (error) {
      console.error('Error adding role:', error);
      // Optionally handle error display here
    }
  };

  return (
    <Modal navigateTo={`/oauth/client/${clientId}/dashboard/role`}>
      <form className="space-y-6 p-4 text-black" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold">Add Role</h2>

        <div className="w-4/5 mx-auto">
          <label className="block font-medium mb-2">Role Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-400 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            placeholder="Enter Role Name"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
            required
          />
        </div>

        <div className="w-4/5 mx-auto flex justify-end mt-2">
          <button
            type="submit"
            className="bg-gray-800 text-white font-medium py-1.5 px-4 rounded-md hover:bg-gray-700 transition duration-200 text-sm"
          >
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddRole;

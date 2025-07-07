import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Modal from '../components/general/Modal';
import axios from 'axios';

const AddUser = () => {
  const { clientId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    clientRoleId: ''
  });

  const [roles, setRoles] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const fetchRoles = async () => {
    try {
      const token = sessionStorage.getItem('access_token');
      const response = await axios.get(`https://user-service-production-08be.up.railway.app/client-roles/${clientId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setRoles(response.data);
    } catch (error) {
      console.error('Error fetching roles:', error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    fetchRoles();
  }, [clientId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Submitting form with data:', formData);

    if (!formData.clientRoleId) {
      alert('Please select a role');
      return;
    }

    const payload = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      clientId: Number(clientId),
      clientRoleId: Number(formData.clientRoleId)
    };

    try {
      const token = sessionStorage.getItem('access_token');
      await axios.post('https://user-service-production-08be.up.railway.app/users', payload, {
        headers: { Authorization: `Bearer ${token}` }
      });

      console.log('User created successfully');
      // Navigate back to the User list after submission
      navigate(`/oauth/client/${clientId}/dashboard/user`);

    } catch (error) {
      console.error('Error adding user:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <Modal navigateTo={`/oauth/client/${clientId}/dashboard/user`}>
      <form className="space-y-6 p-4 text-black" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold">Add User</h2>

        <div className="w-4/5 mx-auto">
          <label className="block font-medium mb-2">Name</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-400 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            placeholder="Enter user name"
          />
        </div>

        <div className="w-4/5 mx-auto">
          <label className="block font-medium mb-2">Email</label>
          <input
            name="email"
            type="text"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-400 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            placeholder="Enter user email"
          />
        </div>

        <div className="w-4/5 mx-auto">
          <label className="block font-medium mb-2">Password</label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-400 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            placeholder="Enter user password"
          />
        </div>

        <div className="w-4/5 mx-auto">
          <label className="block font-medium mb-2">Select Role</label>
          <select
            name="clientRoleId"
            value={formData.clientRoleId}
            onChange={handleChange}
            className="w-full p-2 border border-gray-400 rounded-md bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          >
            <option value="">Select a role</option>
            {roles.map((role, index) => (
              <option key={index} value={role.clientRoleId}>
                {role.roleName}
              </option>
            ))}
          </select>
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

export default AddUser;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Clients = () => {
  const navigate = useNavigate();
  const [clients, setClients] = useState([]);

  const fetchClients = async () => {
    try {
      const token = sessionStorage.getItem('access_token');

      if (!token) {
        console.error('No token found');
        return;
      }

      const response = await axios.get('http://localhost:8080/client', {
        headers: { Authorization: `Bearer ${token}` },
      });

      setClients(response.data);
    } catch (error) {
      console.error('Error fetching clients:', error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleView = (client) => {
   navigate(`/oauth/client/${client.id}/dashboard`, { state: { client } });

     
  };

  return (
    <section className="bg-white text-gray-800 px-8 pt-20 pb-2 w-full">
      <div className="bg-white px-8 py-6">
        <div className="flex justify-between items-center mb-6 w-full">
          <h1 className="text-4xl font-bold text-gray-900">Clients</h1>
          <button
            onClick={() => navigate('/oauth/createclient')}
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200"
          >
            Add Client
          </button>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-300 overflow-x-auto w-full">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-300">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Client Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">OAuth Flow</th>
                <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id} className="hover:bg-gray-50 border-b border-gray-200">
                  <td className="px-6 py-4 text-gray-800">{client.clientId}</td>
                  <td className="px-6 py-4 text-gray-800">{client.grantTypes}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => handleView(client)}
                        className="bg-zinc-900 text-white px-3 py-1 rounded-md hover:bg-gray-800 transition-colors duration-200"
                      >
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {clients.length === 0 && (
                <tr>
                  <td colSpan="3" className="text-center px-6 py-4 text-gray-500">
                    No clients found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Clients;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Clients = () => {
  const navigate = useNavigate();

  const users = [
    { id: 1, name: "John Doe Doe Doe", flow: "Authorization Code with PKCE" },
    { id: 2, name: "Jane Smith",flow: "Authorization Code with PKCE" },
    { id: 3, name: "Alex Johnson",flow: "Authorization Code with PKCE" },
  ];

  const handleAddUser = () => {
    navigate('/oauth/createclient');
  };

  const handleEdit = (id) => {
    console.log('Edit user:', id);
  };

  return (
    <section className="bg-white text-gray-800 px-8 pt-20 pb-2 w-full">
      <div className="bg-white px-8 py-6">
        {/* Heading and Add Button in one line */}
        <div className="flex justify-between items-center mb-6 w-full">
          <h1 className="text-4xl font-bold text-gray-900">Clients</h1>
          <button
            onClick={handleAddUser}
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200"
          >
            Add Client
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow border border-gray-300 overflow-x-auto w-full">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-300">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Client Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">OAuth FLow</th>
                <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 border-b border-gray-200">
                  <td className="px-6 py-4 text-gray-800">{user.name}</td>
                  <td className="px-6 py-4 text-gray-800">{user.flow}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => handleEdit(user.id)}
                        className="bg-zinc-900 text-white px-3 py-1 rounded-md hover:bg-gray-800 transition-colors duration-200"
                      >
                        view
                      </button>

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Clients;

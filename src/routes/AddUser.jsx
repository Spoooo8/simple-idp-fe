import React from 'react';
import Modal from '../components/general/Modal';

const AddUser = () => {

  return (
    <Modal navigateTo={'/jwt/users'}>
      <form className="space-y-6 p-4 text-black">
        <h2 className="text-2xl font-bold">JWT Token</h2>

        <div className="w-4/5 mx-auto">
          <label className="block font-medium mb-2">Algorithm</label>
          <select className="w-full p-2 border border-gray-400 rounded-md bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
            <option value="HS256">HS256</option>
            <option value="RS256">RS256</option>
          </select>
        </div>

        <div className="w-4/5 mx-auto">
          <label className="block font-medium mb-2">Secret</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-400 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            placeholder="Enter your secret"
          />
        </div>

        <div className="w-4/5 mx-auto">
          <label className="block font-medium mb-2">Payload</label>
          <textarea
            className="w-full p-2 border border-gray-400 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            rows="4"
            placeholder="Enter your payload"
          />
        </div>

        <div className="w-4/5 mx-auto">
          <label className="block font-medium mb-2">JWT</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-400 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            placeholder="Enter your JWT"
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

export default AddUser;

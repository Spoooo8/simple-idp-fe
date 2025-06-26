import React, { useState } from 'react';
import axios from 'axios';
import InputForm from '../components/oauth_flows/InputForm';
import lock from '../../public/images/lock_black.png';

function Register({ onClose }) {
  const fields = [
    { name: 'name', label: 'Name', type: 'text', placeholder: 'Enter name' },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter email' },
    { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter password' },
  ];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const values = { name, email, password };
  const setters = { setName, setEmail, setPassword };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Register user
      await axios.post('https://user-service-zvct.onrender.com/users', {
        name: name,
        email: email,
        password: password,
        clientId: 1
      });

      // Show success message
      alert('Registration successful. Please login.');

      // Close the registration window/modal
      if (onClose) {
        onClose();
      }

      // Redirect to /login page
      window.location.href = '/login';
    } catch (error) {
      console.error('Registration failed', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="p-6 sm:p-10 flex flex-col items-center">
      <img src={lock} alt="Lock" className="w-20 h-20 mb-4" />
      <InputForm fields={fields} values={values} setters={setters} onSubmit={handleRegister} title="Register" />
    </div>
  );
}

export default Register;

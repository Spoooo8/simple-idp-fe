import React, { useState } from 'react';
import axios from 'axios';
import InputForm from '../components/oauth_flows/InputForm';
import { useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();

  const values = { name, email, password };
  const setters = { setName, setEmail, setPassword };

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://user-service-zvct.onrender.com/users', {
        name,
        email,
        password,
        clientId: 1,
      });

      console.log('Registration successful');

      // After successful registration, navigate to Login page and pass email and password
      navigate('/login', { state: { email, password } });

    } catch (registerError) {
      console.error('Registration failed:', registerError);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="p-6 sm:p-10 flex flex-col items-center">
      <img src={lock} alt="Lock" className="w-20 h-20 mb-4" />
      <InputForm fields={fields} values={values} setters={setters} onSubmit={handleRegistration} title="Register" />
    </div>
  );
}

export default Register;

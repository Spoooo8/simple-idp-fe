import React, { useState } from 'react';
import InputForm from '../components/oauth_flows/InputForm';

function Register({ onClose }) {
  const fields = [
    { name: 'username', label: 'Username', type: 'text', placeholder: 'Enter username' },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter email' },
    { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter password' },
  ];

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const values = { username, email, password };
  const setters = { setUsername, setEmail, setPassword };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, email, password });
    onClose(); // Close modal after submission
  };

  return (
    <>
    <div className="p-6 sm:p-10">
      <InputForm fields={fields} values={values} setters={setters} onSubmit={handleSubmit} title="Register" />
    </div>
    </>
  );
}

export default Register;

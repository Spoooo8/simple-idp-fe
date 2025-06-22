import React, { useState } from 'react';
import InputForm from '../components/oauth_flows/InputForm';
  import lock from '../../public/images/lock.png'

function Login({ onClose }) {
  const fields = [
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter email' },
    { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter password' },
  ];

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const values = { email, password };
  const setters = { setEmail, setPassword };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    onClose(); // Close modal after submission
  };

  return (
    <>
      <div className="p-6 sm:p-10">

      <InputForm fields={fields} values={values} setters={setters} onSubmit={handleSubmit} title="Login" />  

    </div>
      </>
  );
}

export default Login;

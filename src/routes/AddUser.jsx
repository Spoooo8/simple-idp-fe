// import React from 'react';
// import InputForm from '../components/InputForm';
// import Modal from '../components/Modal';

// const AddUser = () => {
//   const fields = [
//     {
//       name: 'name',
//       label: 'Name',
//       type: 'text',
//       placeholder: 'Enter your secret',
//     },
//     {
//       name: 'email',
//       label: 'Email',
//       type: 'textarea',
//       placeholder: 'Enter your payload',
//       rows: 4,
//     },
//     {
//       name: 'password',
//       label: 'Password',
//       type: 'text',
//       placeholder: 'Enter your JWT',
//     },
//   ];

//   const [jwt, setJwt] = React.useState('');
//   const [algorithm, setAlgorithm] = React.useState('HS256');
//   const [secret, setSecret] = React.useState('');
//   const [payload, setPayload] = React.useState('');

//   const [name, setName] = React.useState('');
//   const [email, setEmail] = React.useState('');
//   const [password, setPassword] = React.useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({ name, email, password });
//   };

//   const values = { jwt, algorithm, secret, payload, name, email, password };
//   const setters = { name: setName, email: setEmail, password: setPassword };

//   return (
//     <Modal>
//       <InputForm
//         fields={fields}
//         values={values}
//         setters={setters}
//         onSubmit={handleSubmit}
//         title="Create User"
//       />
//     </Modal>
//   );
// };

// export default AddUser;

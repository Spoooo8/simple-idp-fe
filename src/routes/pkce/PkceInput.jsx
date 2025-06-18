import React from 'react';
import InputForm from '../../components/oauth_flows/InputForm';
import FormDescription from '../../components/oauth_flows/FormDescription';

const PkceInput = () => {
  const fields = [
    {
      name: 'algorithm',
      label: 'Algorithm',
      type: 'select',
      options: [
        { value: 'HS256', label: 'HS256' },
        { value: 'HS384', label: 'HS384' },
        { value: 'HS512', label: 'HS512' },
      ],
    },
    {
      name: 'secret',
      label: 'Secret',
      type: 'text',
      placeholder: 'Enter your secret',
    },
    {
      name: 'payload',
      label: 'Payload',
      type: 'textarea',
      placeholder: 'Enter your payload',
      rows: 4,
    },
    {
      name: 'jwt',
      label: 'JWT',
      type: 'text',
      placeholder: 'Enter your JWT',
    },
  ];

  const [jwt, setJwt] = React.useState('');
  const [algorithm, setAlgorithm] = React.useState('HS256');
  const [secret, setSecret] = React.useState('');
  const [payload, setPayload] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ jwt, algorithm, secret, payload });
  };

  const values = { jwt, algorithm, secret, payload };
  const setters = { setJwt, setAlgorithm, setSecret, setPayload };

  return (
    <>
      <InputForm
        fields={fields}
        values={values}
        setters={setters}
        onSubmit={handleSubmit}
        title="PKCE"
      />
      <FormDescription />
    </>
  );
};

export default PkceInput;
  
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import InputForm from '../components/oauth_flows/InputForm';
import FormDescription from '../components/oauth_flows/FormDescription';
import { useOAuthFlow } from '../components/oauth_flows/OAuthFlowContext';

const ClientView = () => {
  const { flow, setFlow } = useOAuthFlow();
  const { id } = useParams();
  const { state } = useLocation();
  const { client } = state;

  const [clientId, setClientId] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [clientName, setClientName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (client) {
      setClientId(client.clientId || '');
      setClientSecret(client.clientSecret || '');
      setClientName(client.name || '');
      setDescription(client.redirectUrl || '');
      setFlow(mapGrantType(client.grantTypes));
    }
  }, [client, setFlow]);

  const mapGrantType = (grantType) => {
    if (grantType === 'Authorization Code with PKCE') return 'pkce';
    if (grantType === 'Client Credentials') return 'client';
    if (grantType === 'Authorization Code') return 'code';
    return '';
  };

  const fields = [
    {
      name: 'flow',
      label: 'OAuth Flow',
      type: 'select',
      options: [
        { value: '', label: 'Select an OAuth Flow' },
        { value: 'client', label: 'Client Credentials' },
        { value: 'code', label: 'Authorization Code' },
        { value: 'pkce', label: 'Authorization Code with PKCE' },
      ],
      disabled: true,
    },
    {
      name: 'clientId',
      label: 'Client ID',
      type: 'text',
      placeholder: 'Enter your secret',
      disabled: true,
    },
    {
      name: 'clientSecret',
      label: 'Client Secret',
      type: 'text',
      placeholder: 'Enter your client secret',
      disabled: true,
    },
    {
      name: 'clientName',
      label: 'Client Name',
      type: 'text',
      placeholder: 'Enter your JWT',
      disabled: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      placeholder: 'Enter your payload',
      rows: 4,
      disabled: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('View mode, submit is disabled');
  };

  const values = { flow, clientId, clientSecret, clientName, description };
  const setters = { setFlow, setClientId, setClientSecret, setClientName, setDescription };

  return (
    <>
      <InputForm
  fields={fields}
  values={values}
  setters={setters}
  onSubmit={handleSubmit}
  title="View Client"
  isDisabled={true} // Disable inputs and button
/>
      <FormDescription />
    </>
  );
};

export default ClientView;

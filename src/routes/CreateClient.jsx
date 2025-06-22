import React, { useEffect } from 'react';
import InputForm from '../components/oauth_flows/InputForm';
import FormDescription from '../components/oauth_flows/FormDescription';
import { useOAuthFlow } from '../components/oauth_flows/OAuthFlowContext';

const CreateClient = ({ flow: initialFlow }) => {
  const { flow, setFlow } = useOAuthFlow();

  const [clientId, setClientId] = React.useState('');
  const [clientName, setClientName] = React.useState('');
  const [description, setDescription] = React.useState('');

  // 👇 On mount, set initial flow from props
  useEffect(() => {
    if (initialFlow) {
      setFlow(initialFlow);
    }
  }, [initialFlow, setFlow]);

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
    },
    {
      name: 'clientId',
      label: 'Client ID',
      type: 'text',
      placeholder: 'Enter your secret',
    },
    {
      name: 'clientName',
      label: 'Client Name',
      type: 'text',
      placeholder: 'Enter your JWT',
    },
    {
      name: 'description',
      label: 'Descrition',
      type: 'textarea',
      placeholder: 'Enter your payload',
      rows: 4,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ flow, clientId, clientName, description });
  };

  const values = { flow, clientId, clientName, description };
  const setters = { setFlow, setClientId, setClientName, setDescription };

  return (
    <>
      <InputForm
        fields={fields}
        values={values}
        setters={setters}
        onSubmit={handleSubmit}
        title="Create Client"
      />
      <FormDescription />
    </>
  );
};

export default CreateClient;

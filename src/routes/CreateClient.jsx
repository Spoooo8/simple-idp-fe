import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputForm from '../components/oauth_flows/InputForm';
import FormDescription from '../components/oauth_flows/FormDescription';
import { useOAuthFlow } from '../components/oauth_flows/OAuthFlowContext';
import axios from 'axios';

const CreateClient = ({ flow: initialFlow }) => {
  const { flow, setFlow } = useOAuthFlow();
  const navigate = useNavigate();

  const [clientId, setClientId] = useState('');
  const [clientName, setClientName] = useState('');
  const [grantTypeOptions, setGrantTypeOptions] = useState([]);
  const [selectedGrantTypeIds, setSelectedGrantTypeIds] = useState([]);

  // Fetch grant types for dropdown
  const fetchGrantTypes = async () => {
    try {
      const token = sessionStorage.getItem('access_token');

      const response = await axios.get('http://localhost:8080/grant-types/dropdown', {
        headers: { Authorization: `Bearer ${token}` },
      });

      setGrantTypeOptions(response.data);
    } catch (error) {
      console.error('Error fetching grant types:', error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    fetchGrantTypes();

    if (initialFlow) {
      setFlow(initialFlow);
    }
  }, [initialFlow, setFlow]);

  const handleGrantTypeChange = (selectedLabel) => {
    setFlow(selectedLabel);

    const selectedOption = grantTypeOptions.find(opt => opt.label === selectedLabel);
    if (selectedOption) {
      setSelectedGrantTypeIds(selectedOption.value);
    }
  };

  const fields = [
    {
      name: 'flow',
      label: 'OAuth Flow',
      type: 'select',
      options: [
        { value: '', label: 'Select an OAuth Flow' },
        ...grantTypeOptions.map(opt => ({ value: opt.label, label: opt.label }))
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
  ];

const handleSubmit = async (e) => {
  e.preventDefault();

  const token = sessionStorage.getItem('access_token');

  if (!token) {
    console.error('No token found');
    return;
  }

  // Decode the JWT to extract userId
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const decodedPayload = JSON.parse(atob(base64));
  const userId = decodedPayload.userId; // Make sure the token has this claim

  const requestBody = {
    clientId: clientId,
    name: clientName,
    userId: userId, // ✅ dynamic userId from token
    grantTypesIds: selectedGrantTypeIds
  };

  try {
    await axios.post('http://localhost:8080/client', requestBody, {
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log('Client created successfully.');
    navigate('/'); // ✅ Redirect after success
  } catch (error) {
    console.error('Error creating client:', error.response ? error.response.data : error.message);
  }
};


  const values = { flow, clientId, clientName };
  const setters = { 
    setFlow: handleGrantTypeChange,
    setClientId, 
    setClientName 
  };

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

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
  const [redirectUrl, setRedirectUrl] = useState('');
  const [grantTypeOptions, setGrantTypeOptions] = useState([]);
  const [selectedGrantTypeIds, setSelectedGrantTypeIds] = useState([]);
  const [scopeOptions, setScopeOptions] = useState([]);
  const [selectedScopeIds, setSelectedScopeIds] = useState([]);

  // Fetch grant types
  const fetchGrantTypes = async () => {
    try {
      const token = sessionStorage.getItem('access_token');
      const response = await axios.get('http://localhost:8080/grant-types/dropdown', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setGrantTypeOptions(response.data);
    } catch (error) {
      console.error('Error fetching grant types:', error.response?.data || error.message);
    }
  };

  // Fetch scopes
  const fetchScopes = async () => {
    try {
      const token = sessionStorage.getItem('access_token');
      const response = await axios.get('http://localhost:8080/scopes', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setScopeOptions(response.data);
    } catch (error) {
      console.error('Error fetching scopes:', error.response?.data || error.message);
    }
  };

  useEffect(() => {
    fetchGrantTypes();
    fetchScopes();
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

  const handleScopeChange = (selectedIds) => {
    setSelectedScopeIds(selectedIds);
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
      placeholder: 'Enter your Client ID',
    },
    {
      name: 'clientName',
      label: 'Client Name',
      type: 'text',
      placeholder: 'Enter your Client Name',
    },
    {
      name: 'redirectUrl',
      label: 'Redirect URL',
      type: 'text',
      placeholder: 'http://localhost:3000/callback',
    },
    {
      name: 'scopeIds',
      label: 'Scopes',
      type: 'multi-select',
      options: scopeOptions.map(scope => ({
        value: scope.id,
        label: scope.name,
      })),
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem('access_token');
    if (!token) {
      console.error('No token found');
      return;
    }

    // Decode JWT to get userId
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const decodedPayload = JSON.parse(atob(base64));
    const userId = decodedPayload.userId;

    const requestBody = {
      clientId: clientId,
      name: clientName,
      userId: userId,
      grantTypesIds: selectedGrantTypeIds,
      scopeIds: selectedScopeIds,
      redirectUrl: redirectUrl
    };

    try {
      await axios.post('http://localhost:8080/client', requestBody, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log('Client created successfully.');
      navigate('/');
    } catch (error) {
      console.error('Error creating client:', error.response?.data || error.message);
    }
  };

  const values = {
    flow,
    clientId,
    clientName,
    redirectUrl,
    scopeIds: selectedScopeIds
  };

  const setters = {
    setFlow: handleGrantTypeChange,
    setClientId,
    setClientName,
    setRedirectUrl,
    setScopeIds: handleScopeChange
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

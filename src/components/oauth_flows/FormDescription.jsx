import React from 'react';

const FormDescription = () => {
  return (
    <div className="w-1/3">
      <h3 className="text-2xl font-semibold mb-4">Instruction</h3>
      <ul className="space-y-3 text-sm leading-relaxed">
        <li><strong>OAuth Flow:</strong>  Select the desired OAuth flow (e.g., Client Credentials).</li>
        <li><strong>Client ID:</strong> Enter the unique identifier for your client application.</li>
        <li><strong>Client Name:</strong>Enter a descriptive name for your client (e.g., "WebApp Client").</li>
        <li><strong>Description: </strong>Briefly describe the purpose or usage of this client.</li>
        <li>Click <strong>Next</strong> to continue. You can add users and assign roles to them</li>
      </ul>
    </div>
  );
};

export default FormDescription;

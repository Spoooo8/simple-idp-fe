import React from 'react';

const FormDescription = () => {
  return (
    <div className="w-1/3">
      <h3 className="text-2xl font-semibold mb-4">How to fill the form</h3>
      <ul className="space-y-3 text-sm leading-relaxed">
        <li><strong>Algorithm:</strong> Choose the algorithm used to sign the JWT. Common choices are HS256, HS384, or HS512.</li>
        <li><strong>Secret:</strong> This is your secret key used to encode/decode the JWT. Keep it secure.</li>
        <li><strong>Payload:</strong> Provide the JSON data to be encoded. This typically includes user or session data.</li>
        <li><strong>JWT:</strong> Paste an existing JWT if you want to decode or verify it.</li>
        <li>Click <strong>Submit</strong> to view or process the data entered. This can be used for testing or verification purposes.</li>
      </ul>
    </div>
  );
};

export default FormDescription;

import { createContext, useContext, useState } from 'react';

const OAuthFlowContext = createContext();

export const OAuthFlowProvider = ({ children }) => {
  const [flow, setFlow] = useState('');

  return (
    <OAuthFlowContext.Provider value={{ flow, setFlow }}>
      {children}
    </OAuthFlowContext.Provider>
  );
};

export const useOAuthFlow = () => useContext(OAuthFlowContext);

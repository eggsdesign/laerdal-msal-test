import React from 'react';
// eslint-disable-next-line no-unused-vars
import { AzureAD, IAzureADFunctionProps } from 'react-aad-msal';
import authProvider from './authProvider';

type Props = {
  children: any;
}

const AuthenticationContext = React.createContext({});

export const AuthenticationProvider: React.FunctionComponent<Props> = ({ children }: Props) => (
  <AzureAD provider={authProvider}>
    {({
      login, logout, authenticationState, accountInfo, error,
    }: IAzureADFunctionProps) => (
      <AuthenticationContext.Provider value={{
        login,
        logout,
        authenticationState,
        accountInfo,
        error,
      }}
      >
        {children}
      </AuthenticationContext.Provider>
    )}
  </AzureAD>
);

export default AuthenticationContext;

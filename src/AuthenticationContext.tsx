import React from 'react';
import { AzureAD } from 'react-aad-msal';
import authProvider from './authProvider';

type Props = {
  children: any;
}

export type AADProps = {
  login?: () => void;
  logout?: () => void;
  authenticationState?: string;
}

const AuthenticationContext = React.createContext({});

export const AuthenticationProvider: React.FunctionComponent<Props> = ({ children }: Props) => (
  <AzureAD provider={authProvider}>
    {({ login, logout, authenticationState }: AADProps) => (
      <AuthenticationContext.Provider value={{
        login,
        logout,
        authenticationState,
      }}
      >
        {children}
      </AuthenticationContext.Provider>
    )}
  </AzureAD>
);

export default AuthenticationContext;

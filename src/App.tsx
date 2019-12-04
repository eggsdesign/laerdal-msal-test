import React, { useContext } from 'react';
// eslint-disable-next-line no-unused-vars
import { AuthenticationState, IAzureADFunctionProps } from 'react-aad-msal';
import AuthenticationContext from './AuthenticationContext';

const Menu = () => {
  // @ts-ignore
  // eslint-disable-next-line max-len
  const {
    login, logout, authenticationState, accountInfo,
  }: IAzureADFunctionProps = useContext(AuthenticationContext);
  return (
    <>
      <div>{authenticationState}</div>
      <div>{accountInfo?.account?.name}</div>
      <div>{accountInfo?.account?.userName}</div>
      <button type="button" onClick={login} disabled={authenticationState === AuthenticationState.Authenticated}>Login</button>
      <button type="button" onClick={logout} disabled={authenticationState === AuthenticationState.Unauthenticated}>Logout</button>
    </>
  );
};

const App = () => (
  <>
    <Menu />
    <hr />
    <h2>React AAD MSAL Test</h2>
    <p>This is accessible for all</p>
    <p>Run this app in a browser incognito window to avoid caching issues</p>
  </>
);

export default App;

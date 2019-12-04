import React, { useContext } from 'react';
import { AuthenticationState } from 'react-aad-msal';
// eslint-disable-next-line no-unused-vars
import AuthenticationContext, { AADProps } from './AuthenticationContext';

const Menu = () => {
  const { login, logout, authenticationState }: AADProps = useContext(AuthenticationContext);
  return (
    <>
      <div>{authenticationState}</div>
      <button type="button" onClick={login} disabled={authenticationState === AuthenticationState.Authenticated}>Login</button>
      <button type="button" onClick={logout} disabled={authenticationState === AuthenticationState.Unauthenticated}>Logout</button>
    </>
  );
};

export default Menu;

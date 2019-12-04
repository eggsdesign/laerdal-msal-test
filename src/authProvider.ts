import {
  MsalAuthProvider, LoginType,
} from 'react-aad-msal';

const config = {
  auth: {
    authority: 'https://laerdalmedicalb2ctest.b2clogin.com/laerdalmedicalb2ctest.onmicrosoft.com/b2c_1a_v1_local_signupsignin',
    clientId: 'ba2415ee-8fc7-43b4-a7ed-58d0446146ed',
    redirectUri: 'http://localhost:1234/auth',
    postLogoutRedirectUri: window.location.origin,
    validateAuthority: false,
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: true,
  },
};

const authenticationParameters = {
  scopes: 'https://laerdalmedicalb2ctest.onmicrosoft.com/967eaa4d-75f7-4445-84de-d20121de40ca/user_impersonation;https://laerdalmedicalb2ctest.onmicrosoft.com/967eaa4d-75f7-4445-84de-d20121de40ca/read'.split(';'),
};

// @ts-ignore
const authProvider = new MsalAuthProvider(config, authenticationParameters, LoginType.Redirect);

export default authProvider;

const CLIENT_ID = process.env.CLIENT_ID || '0oa2d0j7c7VeFr0Sf5d7';
const ISSUER = process.env.ISSUER || 'https://dev-9211166.okta.com/oauth2/default'

export default {
  clientId: CLIENT_ID,
  issuer: ISSUER,
  redirectUri: 'http://localhost:3000/implicit/callback',
  scopes: ['openid', 'profile', 'email'],
  // pkce: true,
  pkce: false,
  // This was a major issue but now it has been caught
  disableHttpsCheck: false,
};
// src/react-auth0-spa.js
import React, { useState, useEffect, useContext } from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';

//encryption
import { CONFIG } from '../config.js';
import nodeRSA from 'node-rsa';

var crypto = require('crypto');
var Buffer = require('buffer').Buffer;

//const key = nodeRSA({ b: 64 });
//key.importKey(CONFIG.publickey, 'pkcs8-public-pem');

const DEFAULT_REDIRECT_CALLBACK = () =>
  window.history.replaceState({}, document.title, window.location.pathname);

export const Auth0Context = React.createContext();
export const useAuth0 = () => useContext(Auth0Context);
export const Auth0Provider = ({
  children,
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  ...initOptions
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [user, setUser] = useState();
  const [auth0Client, setAuth0] = useState();
  const [loading, setLoading] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const initAuth0 = async () => {
      const auth0FromHook = await createAuth0Client(initOptions);
      setAuth0(auth0FromHook);

      if (window.location.search.includes('code=')) {
        const { appState } = await auth0FromHook.handleRedirectCallback();
        onRedirectCallback(appState);
      }

      const isAuthenticated = await auth0FromHook.isAuthenticated();

      setIsAuthenticated(isAuthenticated);

      if (isAuthenticated) {
        const claims = await auth0FromHook.getIdTokenClaims();
        const encrypted = await crypto
          .publicEncrypt(CONFIG.publickey, Buffer.from(claims.sub))
          .toString('base64');
        //const encrypted = await key.encrypt(claims.sub, 'hex');
        setUser(encrypted);
      }

      setLoading(false);
    };
    initAuth0();
    // eslint-disable-next-line
  }, []);

  const loginWithPopup = async (params = {}) => {
    setPopupOpen(true);
    try {
      await auth0Client.loginWithPopup(params);
    } catch (error) {
      console.error(error);
    } finally {
      setPopupOpen(false);
    }
    const claims = await auth0Client.getIdTokenClaims();
    const encrypted = crypto
      .publicEncrypt(CONFIG.publickey, Buffer.from(claims.sub))
      .toString('base64');
    //const encrypted = await key.encrypt(claims.sub, 'hex');
    setUser(encrypted);
    setIsAuthenticated(true);
  };

  const handleRedirectCallback = async () => {
    setLoading(true);
    await auth0Client.handleRedirectCallback();
    const claims = await auth0Client.getIdTokenClaims();
    setLoading(false);
    setIsAuthenticated(true);
    const encrypted = crypto
      .publicEncrypt(CONFIG.publickey, Buffer.from(claims.sub))
      .toString('base64');
    //const encrypted = await key.encrypt(claims.sub, 'hex');
    setUser(encrypted);
  };
  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        popupOpen,
        loginWithPopup,
        handleRedirectCallback,
        getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
        loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
        getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
        getTokenWithPopup: (...p) => auth0Client.getTokenWithPopup(...p),
        logout: (...p) => auth0Client.logout(...p)
      }}
    >
      {children}
    </Auth0Context.Provider>
  );
};

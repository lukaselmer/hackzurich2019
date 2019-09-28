import React, { useState, useEffect, useContext, createContext, ReactElement } from 'react';
import queryString from 'query-string';
import firebase from 'firebase/app';
import 'firebase/auth';

// Replace with your own Firebase credentials
firebase.initializeApp({
  apiKey: 'AIzaSyBkkFF0XhNZeWuDmOfEhsgdfX1VBG7WTas',
  authDomain: 'divjoy-demo.firebaseapp.com',
  projectId: 'divjoy-demo',
  appID: 'divjoy-demo'
});

const authContext = createContext<ReturnType<typeof useProvideAuth>>(undefined as any);

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }: { children: ReactElement[] }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... update when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState<firebase.User | null | false>(null);

  const signin = async (email: string, password: string) => {
    const response = await firebase.auth().signInWithEmailAndPassword(email, password);
    setUser(response.user);
    return response.user;
  };

  const signup = async (email: string, password: string) => {
    const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
    setUser(response.user);
    return response.user;
  };

  const signout = async () => {
    await firebase.auth().signOut();
    setUser(false);
  };

  const sendPasswordResetEmail = async (email: string) => {
    await firebase.auth().sendPasswordResetEmail(email);
    return true;
  };

  const confirmPasswordReset = async (password: string, code: string) => {
    // Get code from query string object
    const resetCode = code || getFromQueryString('oobCode');
    if (typeof resetCode !== 'string') throw new Error(`Invalid value ${resetCode}`);

    await firebase.auth().confirmPasswordReset(resetCode, password);
    return true;
  };

  // Subscribe to user on mount
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    // Subscription unsubscribe function
    return () => unsubscribe();
  }, []);

  return {
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset
  };
}

const getFromQueryString = (key: string) => {
  return queryString.parse(window.location.search)[key];
};

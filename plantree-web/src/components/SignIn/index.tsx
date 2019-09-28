import React, { useState } from 'react';
import { Auth } from './../Auth';
import { useAuth } from './../../util/auth';
import './styles.scss';

type P = {
  onSignin: () => void;
  buttonText: string;
  parentColor?: string;
};

export function SignIn(props: P) {
  const auth = useAuth();
  const [status, setStatus] = useState();

  const onSubmit = ({ email, pass }: { email: string; pass: string }) => {
    setStatus({ type: 'pending' });
    auth
      .signin(email, pass)
      .then(user => {
        props.onSignin && props.onSignin();
      })
      .catch(error => {
        setStatus({
          type: 'error',
          message: error.message
        });
      });
  };

  return (
    <Auth
      mode="signin"
      buttonText={props.buttonText}
      parentColor={props.parentColor}
      onSubmit={onSubmit}
      status={status}
    />
  );
}

import React, { useState } from 'react';
import Auth from './../Auth';
import { useAuth } from './../../util/auth.js';
import './styles.scss';

type P = {
  buttonText: string;
  parentColor: string;
};

function ForgotPass(props: P) {
  const auth = useAuth();
  const [status, setStatus] = useState();

  const onSubmit = ({ email }: { email: string }) => {
    setStatus({ type: 'pending' });
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setStatus({
          type: 'success',
          message: 'Password reset email sent'
        });
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
      mode="forgotpass"
      buttonText={props.buttonText}
      parentColor={props.parentColor}
      onSubmit={onSubmit}
      status={status}
    />
  );
}

export default ForgotPass;

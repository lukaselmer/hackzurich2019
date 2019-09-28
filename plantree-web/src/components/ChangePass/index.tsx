import React, { useState } from 'react';
import { Auth } from './../Auth';
import { useAuth } from './../../util/auth';
import './styles.scss';

export function ChangePass(props: { buttonText: string; parentColor: string }) {
  const auth = useAuth();
  const [status, setStatus] = useState();

  const onSubmit = ({ pass }: { pass: string }) => {
    setStatus({ type: 'pending' });
    auth
      .confirmPasswordReset(pass, '')
      .then(() => {
        setStatus({
          type: 'success',
          message: 'Your password has been changed'
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
      mode="changepass"
      buttonText={props.buttonText}
      parentColor={props.parentColor}
      onSubmit={onSubmit}
      status={status}
    />
  );
}

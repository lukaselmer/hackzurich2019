import React from 'react';
import './styles.scss';

export function FormStatus(props: { type: string; message: string }) {
  return (
    <div
      className={
        'notification' +
        (props.type === 'error' ? ' is-danger' : '') +
        (props.type === 'success' ? ' is-success' : '')
      }
    >
      {props.message}
    </div>
  );
}

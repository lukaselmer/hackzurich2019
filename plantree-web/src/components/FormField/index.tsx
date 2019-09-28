import React from 'react';
import './styles.scss';

type P = {
  type?: string;
  value: string | number | string[] | undefined;
  placeholder?: string;
  onChange: (value: string) => void;
  error:
    | {
        field: string;
        message: string;
      }
    | false
    | undefined;
};

export function FormField(props: P) {
  return (
    <div className="field">
      <div className="control">
        {props.type === 'textarea' && (
          <textarea
            className="textarea is-medium"
            value={props.value}
            placeholder={props.placeholder}
            onChange={e => props.onChange(e.target.value)}
          />
        )}

        {props.type !== 'textarea' && (
          <input
            className="input is-medium"
            type={props.type}
            value={props.value}
            placeholder={props.placeholder}
            onChange={e => props.onChange(e.target.value)}
          />
        )}
      </div>

      {props.error && <p className="help is-danger">{props.error.message}</p>}
    </div>
  );
}

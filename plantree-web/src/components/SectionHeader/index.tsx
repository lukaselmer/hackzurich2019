import React from 'react';
import './styles.scss';

type P = {
  title: string;
  subtitle: string;
  centered?: boolean;
  size: string | number;
};

function SectionHeader(props: P) {
  return (
    <>
      {(props.title || props.subtitle) && (
        <header className={'SectionHeader__header' + (props.centered ? ' is-centered' : '')}>
          {props.title && (
            <h1
              className={
                'title is-spaced has-text-weight-bold' +
                (props.size ? ` is-${props.size}` : '') +
                (props.size === 1 ? ' is-size-2-mobile' : '')
              }
            >
              {props.title}
            </h1>
          )}

          {props.subtitle && (
            <p className={'subtitle' + (props.size > 4 ? ' is-6' : '')}>{props.subtitle}</p>
          )}
        </header>
      )}
    </>
  );
}

export default SectionHeader;

import React from 'react';
import './styles.scss';

type P = {
  color: string;
  spaced: boolean;
  children: React.ReactNode;
};

function NavbarContainer(props: P) {
  return (
    <nav
      className={
        'navbar' + (props.color ? ` is-${props.color}` : '') + (props.spaced ? ' is-spaced' : '')
      }
    >
      {props.children}
    </nav>
  );
}

export default NavbarContainer;

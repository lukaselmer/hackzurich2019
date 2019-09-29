import React from 'react';
import { Section } from './../Section';
import { Link } from './../../util/router';
import './styles.scss';
import logo from '../../images/tree.svg';

type P = {
  color: string;
  size: string | number;
  copyright: string;
};

export function Footer(props: P) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="FooterComponent__container container">
        <div className="brand left">
          <img src={logo} alt="Logo" />
        </div>
        <div className="links right">
          <Link to="/about">About</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
          <a target="_blank" href="https://medium.com" rel="noopener noreferrer">
            Blog
          </a>
        </div>
        <div className="social right">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <span className="icon">
              <i className="fab fa-twitter" />
            </span>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <span className="icon">
              <i className="fab fa-facebook-f" />
            </span>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <span className="icon">
              <i className="fab fa-instagram" />
            </span>
          </a>
        </div>
        <div className="copyright left">{props.copyright}</div>
      </div>
    </Section>
  );
}

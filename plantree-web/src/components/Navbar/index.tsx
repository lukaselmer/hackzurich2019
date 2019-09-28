import React, { useState } from 'react';
import { NavbarContainer } from './../NavbarContainer';
import { Link } from './../../util/router';
import { useAuth } from './../../util/auth';
import './styles.scss';

type P = {
  spaced: boolean;
  color: string;
  logo: string | undefined;
};

export function Navbar(props: P) {
  const auth = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContainer spaced={props.spaced} color={props.color}>
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to="/">
              <img className="image" src={props.logo} alt="Logo" />
            </Link>
          </div>
          <div
            className={'navbar-burger burger' + (menuOpen ? ' is-active' : '')}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={'navbar-menu' + (menuOpen ? ' is-active' : '')}>
          <div className="navbar-end">
            {auth.user && (
              <>
                <div className="navbar-item has-dropdown is-hoverable">
                  <Link className="navbar-link" to="/">
                    Planter
                  </Link>
                  <div className="navbar-dropdown is-boxed">
                    <Link className="navbar-item" to="/faq">
                      How to plant a tree?
                    </Link>
                    <Link className="navbar-item" to="/planter/find-planting-locations">
                      Find planting locations
                    </Link>
                    <Link className="navbar-item" to="/planter/my-upcoming-plantings">
                      My upcoming plantings
                    </Link>
                    <Link className="navbar-item" to="/planter/my-trees">
                      My trees
                    </Link>
                  </div>
                </div>
                <Link className="navbar-item" to="/treehost">
                  Treehost
                </Link>
                {/* <div className="navbar-item has-dropdown is-hoverable">
                  <Link className="navbar-link" to="/">
                    Treehost
                  </Link>
                  <div className="navbar-dropdown is-boxed">
                    <Link className="navbar-item" to="/treehost/offer-planting-location">
                      Offer planting location
                    </Link>
                    <Link className="navbar-item" to="/treehost/my-tree-locations">
                      My tree locations
                    </Link>
                  </div>
                </div> */}
                <div className="navbar-item has-dropdown is-hoverable">
                  <Link className="navbar-link" to="/">
                    Account
                  </Link>
                  <div className="navbar-dropdown is-boxed">
                    <Link className="navbar-item" to="/dashboard">
                      Dashboard
                    </Link>
                    <Link
                      className="navbar-item"
                      to="/signout"
                      onClick={e => {
                        e.preventDefault();
                        auth.signout();
                      }}
                    >
                      Sign out
                    </Link>
                  </div>
                </div>
              </>
            )}

            {!auth.user && (
              <Link className="navbar-item" to="/signin">
                Sign in
              </Link>
            )}
          </div>
        </div>
      </div>
    </NavbarContainer>
  );
}

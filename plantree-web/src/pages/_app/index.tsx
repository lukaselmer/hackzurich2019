import React from 'react';
import { Navbar } from './../../components/Navbar';
import { HomePage } from './../home';
import { AboutPage } from './../about';
import { FaqPage } from './../faq';
import { PricingPage } from './../pricing';
import { ContactPage } from './../contact';
import { DashboardPage } from './../dashboard';
import { SigninPage } from './../signin';
import { SignupPage } from './../signup';
import { ForgotpassPage } from './../forgotpass';
import { ChangepassPage } from './../changepass';
import { Switch, Route, Router } from './../../util/router';
import { Footer } from './../../components/Footer';
// eslint-disable-next-line
import { analytics as _analytics } from './../../util/analytics';
import { ProvideAuth } from './../../util/auth';
import './styles.scss';
import { RouteProps } from 'react-router';
import { FindPlantingLocations } from '../planter/find-planting-locations';
import { MyUpcompingPlantings } from '../planter/my-upcomping-plantings';
import { MyTrees } from '../planter/my-trees';
import { MyTreeLocations } from '../treehost/my-tree-locations';
import { OfferPlantingLocation } from '../treehost/offer-planting-location';
import { Treehost } from '../treehost/treehost';
import { LoadScript } from '@react-google-maps/api';
import logo from '../../images/logo-horizontal.svg';
import { FirestoreProvider } from '@react-firebase/firestore';
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAohft0DdRVswDugjjMC03pE5XoftNz9Lc',
  projectId: 'plantreex',
  databaseURL: 'https://plantreex.firebaseio.com',
  authDomain: 'plantreex.firebaseapp.com',
  storageBucket: 'plantreex.appspot.com',
  messagingSenderId: '942045837063',
  appId: '1:942045837063:web:f13d5a05a2911415da37a2',
  measurementId: 'G-EGHDWE7KTR'
};

export function App(_props: any) {
  return (
    <FirestoreProvider {...config} firebase={firebase}>
      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyBI4LWE7CibpWAg-o6MqvyOn2Y59d93BCQ"
        libraries={['places']}
      >
        <ProvideAuth>
          <Router>
            <>
              <Navbar color="white" spaced={false} logo={logo} />
              <div style={{ paddingTop: '20px' }}>
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/about" component={AboutPage} />
                  <Route exact path="/faq" component={FaqPage} />
                  <Route exact path="/pricing" component={PricingPage} />
                  <Route exact path="/contact" component={ContactPage} />
                  <Route exact path="/dashboard" component={DashboardPage} />
                  <Route exact path="/signin" component={SigninPage} />
                  <Route exact path="/signup" component={SignupPage} />
                  <Route exact path="/forgotpass" component={ForgotpassPage} />
                  <Route exact path="/changepass" component={ChangepassPage} />

                  <Route
                    exact
                    path="/planter/find-planting-locations"
                    component={FindPlantingLocations}
                  />
                  <Route exact path="/planter/my-upcoming-plantings" component={MyUpcompingPlantings} />
                  <Route exact path="/planter/my-trees" component={MyTrees} />

                  <Route exact path="/treehost" component={Treehost} />
                  <Route exact path="/treehost/my-tree-locations" component={MyTreeLocations} />
                  <Route
                    exact
                    path="/treehost/offer-planting-location"
                    component={OfferPlantingLocation}
                  />

                  <Route
                    component={({ location }: RouteProps) => {
                      return (
                        <div
                          style={{
                            padding: '50px',
                            width: '100%',
                            textAlign: 'center'
                          }}
                        >
                          The page <code>{location && location.pathname}</code> could not be found.
                        </div>
                      );
                    }}
                  />
                </Switch>
              </div>

              <Footer color="light" size="normal" logo={logo} copyright="© 2019 PLANTree" />
            </>
          </Router>
        </ProvideAuth>
      </LoadScript>
    </FirestoreProvider>
  );
}

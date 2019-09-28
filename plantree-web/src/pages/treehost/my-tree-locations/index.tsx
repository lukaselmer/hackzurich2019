import React from 'react';
import './styles.scss';
import { Link } from './../../../util/router';
import { Container, Content, Button } from 'bloomer';
import { Breadcrumbs } from '../../../components/Breadcrumbs';
import { FirestoreCollection } from '@react-firebase/firestore';
import { Loading } from '../../../components/Loading';
import { firebasePaths } from '../../../util/firebase';

export function MyTreeLocations(_props: unknown) {
  return (
    <Container>
      <Breadcrumbs items={[['Home', '/'], ['Treehost', '']]} />

      <Content style={{ minHeight: '500px', paddingTop: '20px' }}>
        <h1>Your planting locations</h1>

        <FirestoreCollection path={firebasePaths.plantingLocations} limit={10}>
          {dbRequest => (dbRequest.isLoading ? <Loading /> : renderLocations(dbRequest.value))}
        </FirestoreCollection>

        <Link to="/treehost/offer-planting-location">
          <Button isColor="primary">Offer a new planting location</Button>
        </Link>
      </Content>
    </Container>
  );
}

function renderLocations(locations: any[]) {
  if (locations.length === 0) return <p>You haven't provided any planting locations yet.</p>;

  return <pre>{locations}</pre>;
}

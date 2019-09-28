import React from 'react';
import './styles.scss';
import { Link } from './../../../util/router';
import { Container, Content, Button } from 'bloomer';
import { Breadcrumbs } from '../../../components/Breadcrumbs';

export function MyTreeLocations(_props: unknown) {
  return (
    <Container>
      <Breadcrumbs items={[['Home', '/'], ['Treehost', '']]} />

      <Content style={{ minHeight: '500px', paddingTop: '20px' }}>
        <h1>Your planting locations</h1>
        <p>You haven't provided any planting locations yet.</p>
        <Link to="/treehost/offer-planting-location">
          <Button isColor="primary">Offer a new planting location</Button>
        </Link>
      </Content>
    </Container>
  );
}

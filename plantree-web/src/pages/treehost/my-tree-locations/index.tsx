import React from 'react';
import './styles.scss';
import { Link } from './../../../util/router';
import { Container, Content, Button, Breadcrumb, BreadcrumbItem } from 'bloomer';

export function MyTreeLocations(_props: unknown) {
  return (
    <Container>
      <Breadcrumb>
        <ul>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem isActive>
            <a>Treehost</a>
          </BreadcrumbItem>
        </ul>
      </Breadcrumb>

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

import React from 'react';
import { Container, Notification } from 'bloomer';

export function App() {
  return (
    <Container isFluid style={{ marginTop: 10 }}>
      <Notification isColor="warning">
        This container is <strong>fluid</strong>: it will have a 20px gap on either side.
      </Notification>
    </Container>
  );
}

import React from 'react';
import { FaqSection } from './../../components/FaqSection';
import './styles.scss';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Container } from 'bloomer/lib/layout/Container';

export function FaqPage(_props: unknown) {
  return (
    <>
      <Container>
        <Breadcrumbs items={[['Home', '/'], ['Planter', '/'], ['How to plant a tree?', '']]} />
      </Container>
      <FaqSection color="white" size="medium" title="How to plant a tree?" subtitle="" />
    </>
  );
}

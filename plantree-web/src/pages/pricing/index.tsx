import React from 'react';
import { PricingSection } from './../../components/PricingSection';
import './styles.scss';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Container } from 'bloomer/lib/layout/Container';

export function PricingPage(_props: unknown) {
  return (
    <>
      <Container>
        <Breadcrumbs items={[['Home', '/'], ['Sponsor', '']]} />
      </Container>
      <PricingSection color="white" size="medium" title="Sponsor Tree Plantation" subtitle="" />
    </>
  );
}

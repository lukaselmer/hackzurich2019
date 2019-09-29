import React from 'react';
import { ContentSection } from '../../../components/ContentSection';
import { TeamBiosSection } from '../../../components/TeamBiosSection';
import './styles.scss';
import { Container } from 'bloomer/lib/layout/Container';
import { Breadcrumbs } from '../../../components/Breadcrumbs';

export function MyTrees(_props: unknown) {
  return (
    <>
      <Container style={{ marginBottom: '12px' }}>
        <Breadcrumbs items={[['Home', '/'], ['Planter', '/'], ['My Trees', '']]} />
      </Container>
      <ContentSection
        color="primary"
        size="large"
        title="My trees"
        subtitle="Please check your mobile app to see all the trees you have planted, and the CO2 you have reduced."
      />
    </>
  );
}

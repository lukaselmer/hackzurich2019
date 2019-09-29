import React from 'react';
import { ContentSection } from '../../../components/ContentSection';
import { TeamBiosSection } from '../../../components/TeamBiosSection';
import './styles.scss';
import { Container } from 'bloomer/lib/layout/Container';
import { Breadcrumbs } from '../../../components/Breadcrumbs';

export function MyUpcompingPlantings(_props: unknown) {
  return (
    <>
      <Container style={{ marginBottom: '12px' }}>
        <Breadcrumbs items={[['Home', '/'], ['Planter', '/'], ['My upcoming plantings', '']]} />
      </Container>
      <ContentSection
        color="primary"
        size="large"
        title="My upcoming plantings"
        subtitle="Please check your mobile app to find your upcoming plantings."
      />
    </>
  );
}

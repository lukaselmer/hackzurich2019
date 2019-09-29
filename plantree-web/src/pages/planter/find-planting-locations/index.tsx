import React from 'react';
import { ContentSection } from '../../../components/ContentSection';
import './styles.scss';
import { Container } from 'bloomer/lib/layout/Container';
import { Breadcrumbs } from '../../../components/Breadcrumbs';

export function FindPlantingLocations(_props: unknown) {
  return (
    <>
      <Container style={{ marginBottom: '12px' }}>
        <Breadcrumbs items={[['Home', '/'], ['Planter', '/'], ['Find planting locations', '']]} />
      </Container>
      <ContentSection
        color="primary"
        size="large"
        title="Find planting locations"
        subtitle="Please check your mobile app to find planting locations."
      />
    </>
  );
}

import React from 'react';
import { ContentSection } from './../../components/ContentSection';
import { TeamBiosSection } from './../../components/TeamBiosSection';
import './styles.scss';

export function AboutPage(_props: unknown) {
  return (
    <>
      <ContentSection
        color="primary"
        size="medium"
        title="We help you make money"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!"
      />
      <TeamBiosSection color="white" size="medium" title="Meet the Team" subtitle="" />
    </>
  );
}

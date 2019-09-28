import React from 'react';
import { Section } from '../../../components/Section';
import { TeamBiosSection } from '../../../components/TeamBiosSection';
import './styles.scss';

export function MyTreeLocations(_props: unknown) {
  return (
    <>
      <Section color="primary" size="large" title="My tree locations">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam
        tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis
        totam!
      </Section>
      <TeamBiosSection color="white" size="medium" title="Meet the Team" subtitle="" />
    </>
  );
}

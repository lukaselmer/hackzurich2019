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
        title="How we are organized"
        subtitle="Created at HackZurich 2019, PLANTree has been a huge success. We managed to plant 320 billion trees already, and we are planning to planting many more. Help us grow, and let's fight climate change together."
      />
      <TeamBiosSection color="white" size="medium" title="Meet the Team" subtitle="" />
    </>
  );
}

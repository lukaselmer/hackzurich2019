import React from 'react';
import { Section } from './../Section';
import { SectionHeader } from './../SectionHeader';
import { Features } from './../Features';
import './styles.scss';
import reforestation from '../../images/reforestation.jpg';
import young_forest from '../../images/growing-forest.jpeg';
import impact from '../../images/impact.jpg';
import solidarity from '../../images/solidarity.jpeg';

type P = {
  color: string;
  size: string | number;
  title: string;
  subtitle: string;
};

export function FeaturesSection(props: P) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title="Call for action"
          subtitle="We need to stand together to fight climate change. There is a lot at stake for humanity, animals and nature."
          centered={true}
          size={3}
        />
        <Features
          items={[
            {
              title: 'Potential',
              description:
                'Around 0.9 billion hectares of land worldwide would be suitable for reforestation.',
              image: reforestation
            },
            {
              title: 'Urgency',
              description:
                'But we must act quickly, as new forests will take decades to mature and achieve their full potential as a source of natural carbon storage.',
              image: young_forest
            },
            {
              title: 'Impact',
              description:
                'Planting billions of trees across the world is by far the biggest and cheapest way to tackle the climate crisis, according to scientists.',
              image: impact
            },
            {
              title: 'Solidarity',
              description:
                "Everyone can help regardless of background or financial status. If we stand together, the sky's the limit.",
              image: solidarity
            }
          ]}
        />
      </div>
    </Section>
  );
}

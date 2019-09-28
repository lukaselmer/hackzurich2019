import React from 'react';
import { Section } from './../Section';
import { SectionHeader } from './../SectionHeader';
import { Features } from './../Features';
import './styles.scss';
import reforestation from '../../images/reforestation.jpg';

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
              title: 'Explore',
              description:
                'Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.',
              image: 'https://uploads.divjoy.com/undraw-personal_settings_kihd.svg'
            },
            {
              title: 'Explore',
              description:
                'Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.',
              image: 'https://uploads.divjoy.com/undraw-having_fun_iais.svg'
            },
            {
              title: 'Explore',
              description:
                'Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.',
              image: 'https://uploads.divjoy.com/undraw-balloons_vxx5.svg'
            }
          ]}
        />
      </div>
    </Section>
  );
}

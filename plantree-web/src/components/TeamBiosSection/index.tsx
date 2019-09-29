import React from 'react';
import { Section } from './../Section';
import { SectionHeader } from './../SectionHeader';
import { TeamBios } from './../TeamBios';
import './styles.scss';
import christof from '../../images/christof.jpeg';
import marion from '../../images/marion.jpeg';
import lukas from '../../images/lukas.jpeg';

type P = {
  color?: string;
  size?: string | number;
  title: string;
  subtitle: string;
};

export function TeamBiosSection(props: P) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader title={props.title} subtitle={props.subtitle} centered={true} size={3} />
        <TeamBios
          people={[
            {
              avatar: christof,
              name: 'Christof Buechi',
              bio:
                "I'm a passionate software developer and love to learn new things. Climate change is affecting us all and it's high time to come up with solutions.",
              role: 'Head of Environmental Matters'
            },
            {
              avatar: marion,
              name: 'Marion Schleifer',
              bio:
                "I'm a Developer Experience Engineer and love the community. I'm worried about my carbon footprint and want to do something to compensate for it.",
              role: 'Chief of Tree Happiness'
            },
            {
              avatar: lukas,
              name: 'Lukas Elmer',
              bio:
                "I'm a software engineer and like participating in hackatons. I'm concerned about carbon emissions and want to find ways to neutralize them.",
              role: 'Head of CO2 Reduction'
            }
          ]}
        />
      </div>
    </Section>
  );
}

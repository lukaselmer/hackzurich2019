import React from 'react';
import { Section } from './../Section';
import { SectionHeader } from './../SectionHeader';
import { Clients } from './../Clients';
import './styles.scss';
import eth from '../../images/eth.png';
import greenpeace from '../../images/greenpeace.png';
import allianz from '../../images/klimaallianz.jpg';
import greens from '../../images/greens.jpg';

type P = {
  color: string;
  size: string | number | string;
  title: string;
  subtitle: string;
};

export function ClientsSection(props: P) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader title={props.title} subtitle={props.subtitle} centered={true} size={3} />
        <Clients
          items={[
            {
              name: 'ETH Zurich',
              image: eth,
              width: '150px'
            },
            {
              name: 'Greenpeace',
              image: greenpeace,
              width: '200px'
            },
            {
              name: 'Klimaallianz Schweis',
              image: allianz,
              width: '160px'
            },
            {
              name: 'Spotify',
              image: greens,
              width: '170px'
            }
          ]}
        />
      </div>
    </Section>
  );
}

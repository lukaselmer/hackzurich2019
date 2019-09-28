import React from 'react';
import { Section } from './../Section';
import { SectionHeader } from './../SectionHeader';
import './styles.scss';

type P = {
  color: string;
  size: string | number;
  backgroundImage?: string;
  backgroundImageOpacity?: number;
  title: string;
  subtitle: string;
};

export function ContentSection(props: P) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <SectionHeader title={props.title} subtitle={props.subtitle} centered={true} size={2} />
      </div>
    </Section>
  );
}

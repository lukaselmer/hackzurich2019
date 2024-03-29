import React from 'react';
import { Section } from './../Section';
import { SectionHeader } from './../SectionHeader';
import { ChangePass } from './../ChangePass';
import './styles.scss';

type P = {
  color: string;
  size: string | number;
  title: string;
  subtitle: string;
  buttonText: string;
};

export function ChangePassSection(props: P) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader title={props.title} subtitle={props.subtitle} centered={true} size={3} />
        <ChangePass buttonText={props.buttonText} parentColor={props.color} />
      </div>
    </Section>
  );
}

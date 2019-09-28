import React from 'react';
import Section from './../Section';
import SectionHeader from './../SectionHeader';
import './styles.scss';

type P = {
  color: string;
  size: number;
  title: string;
  subtitle: string;
};

function DashboardSection(props: P) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader title={props.title} subtitle={props.subtitle} centered={true} size={3} />
      </div>
    </Section>
  );
}

export default DashboardSection;

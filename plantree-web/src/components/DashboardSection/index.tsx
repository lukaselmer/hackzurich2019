import React from 'react';
import { Section } from './../Section';
import { SectionHeader } from './../SectionHeader';
import './styles.scss';
import { Container } from 'bloomer';

type P = {
  color: string;
  size: string | number;
  title: string;
  subtitle: string;
  user: firebase.User;
};

export function DashboardSection(props: P) {
  return (
    <Section color={props.color} size={props.size}>
      <Container>
        <SectionHeader title={props.title} subtitle={props.subtitle} centered={true} size={3} />
        <Section>{props.user.email}</Section>
      </Container>
    </Section>
  );
}

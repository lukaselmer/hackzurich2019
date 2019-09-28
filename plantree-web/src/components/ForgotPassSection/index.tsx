import React from 'react';
import Section from './../Section';
import SectionHeader from './../SectionHeader';
import ForgotPass from './../ForgotPass';
import './styles.scss';

type P = {
  color: string;
  size: number;
  title: string;
  subtitle: string;
  buttonText: string;
};

function ForgotPassSection(props: P) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader title={props.title} subtitle={props.subtitle} centered={true} size={3} />
        <ForgotPass buttonText={props.buttonText} parentColor={props.color} />
      </div>
    </Section>
  );
}

export default ForgotPassSection;

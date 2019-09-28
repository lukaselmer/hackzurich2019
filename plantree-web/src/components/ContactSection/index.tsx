import React from 'react';
import Section from './../Section';
import SectionHeader from './../SectionHeader';
import Contact from './../Contact';
import './styles.scss';

type P = {
  color?: string;
  size?: string | number;
  title: string;
  subtitle: string;
  showNameField?: boolean;
  buttonText: string;
};

function ContactSection(props: P) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="ContactSection__container container">
        <SectionHeader title={props.title} subtitle={props.subtitle} centered={true} size={3} />
        <Contact
          parentColor={props.color}
          showNameField={props.showNameField}
          buttonText={props.buttonText}
        />
      </div>
    </Section>
  );
}

export default ContactSection;

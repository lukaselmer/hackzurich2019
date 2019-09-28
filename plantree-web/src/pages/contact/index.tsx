import React from 'react';
import { ContactSection } from './../../components/ContactSection';
import './styles.scss';

export function ContactPage(_props: unknown) {
  return (
    <ContactSection
      color="white"
      size="medium"
      title="Contact Us"
      subtitle=""
      showNameField={true}
      buttonText="Send message"
    />
  );
}

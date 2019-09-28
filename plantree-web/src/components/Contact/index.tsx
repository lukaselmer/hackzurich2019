import React, { useState } from 'react';
import ContactForm from './../ContactForm';
import contact from './../../util/contact';
import './styles.scss';

type P = {
  parentColor?: string;
  showNameField?: boolean;
  buttonText: string;
};

function Contact(props: P) {
  const [status, setStatus] = useState();

  const onSubmit = ({ name, email, message }: { name: string; email: string; message: string }) => {
    setStatus({ type: 'pending' });

    contact.submit({ name, email, message }).then(() => {
      setStatus({
        type: 'success',
        message: "Your message has been sent! We'll get back to you soon."
      });
    });
  };
  return (
    <ContactForm
      parentColor={props.parentColor}
      showNameField={props.showNameField}
      buttonText={props.buttonText}
      onSubmit={onSubmit}
      status={status}
    />
  );
}

export default Contact;

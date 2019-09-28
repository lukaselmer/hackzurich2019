import React from 'react';
import Section from './../Section';
import SectionHeader from './../SectionHeader';
import SignIn from './../SignIn';
import { useRouter } from './../../util/router.js';
import './styles.scss';

type P = {
  color?: string;
  size?: number;
  title: string;
  subtitle: string;
  buttonText: string;
};

function SignInSection(props: P) {
  const router = useRouter();

  // Go to page after signin
  const onSignin = () => {
    router.push('/dashboard');
  };

  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader title={props.title} subtitle={props.subtitle} centered={true} size={3} />
        <SignIn buttonText={props.buttonText} parentColor={props.color} onSignin={onSignin} />
      </div>
    </Section>
  );
}

export default SignInSection;

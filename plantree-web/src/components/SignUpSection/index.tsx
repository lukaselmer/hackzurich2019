import React from 'react';
import { Section } from './../Section';
import { SectionHeader } from './../SectionHeader';
import { SignUp } from './../SignUp';
import { useRouter } from './../../util/router';
import './styles.scss';

type P = {
  color?: string;
  size?: string | number;
  title: string;
  subtitle: string;
  buttonText: string;
};

export function SignUpSection(props: P) {
  const router = useRouter();

  // Go to page after signup
  const onSignup = () => {
    router.push('/treehost');
  };

  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader title={props.title} subtitle={props.subtitle} centered={true} size={3} />
        <SignUp buttonText={props.buttonText} parentColor={props.color} onSignup={onSignup} />
      </div>
    </Section>
  );
}

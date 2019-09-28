import React from 'react';
import { SignUpSection } from './../../components/SignUpSection';
import './styles.scss';

export function SignupPage(_props: unknown) {
  return (
    <SignUpSection
      color="white"
      size="large"
      title="Get yourself an account"
      subtitle=""
      buttonText="Sign up"
    />
  );
}

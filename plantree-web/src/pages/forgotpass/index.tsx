import React from 'react';
import { ForgotPassSection } from './../../components/ForgotPassSection';
import './styles.scss';

export function ForgotpassPage(_props: unknown) {
  return (
    <ForgotPassSection
      color="white"
      size="large"
      title="Get a new password"
      subtitle=""
      buttonText="Reset password"
    />
  );
}

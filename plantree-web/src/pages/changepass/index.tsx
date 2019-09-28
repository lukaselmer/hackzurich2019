import React from 'react';
import { ChangePassSection } from './../../components/ChangePassSection';
import './styles.scss';

export function ChangepassPage(_props: unknown) {
  return (
    <ChangePassSection
      color="white"
      size="large"
      title="Choose a new password"
      subtitle=""
      buttonText="Change password"
    />
  );
}

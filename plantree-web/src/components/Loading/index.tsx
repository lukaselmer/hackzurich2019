import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export function Loading() {
  return (
    <p>
      <FontAwesomeIcon icon={faSpinner} pulse />
    </p>
  );
}

import React from 'react';
import { format } from 'date-fns';

export function DisplayDate({ value }: { value: Date }) {
  return <>{format(value, 'yyyy-MM-dd HH:mm:ss')}</>;
}

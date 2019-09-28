import React from 'react';
import './styles.scss';

export function BackgroundImage(props: { image: string; opacity?: number }) {
  return (
    <div
      className="BackgroundImage"
      style={{
        backgroundImage: `url(${props.image})`,
        opacity: props.opacity
      }}
    />
  );
}

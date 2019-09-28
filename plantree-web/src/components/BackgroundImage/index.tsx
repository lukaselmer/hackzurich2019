import React from 'react';
import './styles.scss';

function BackgroundImage(props: { image: string; opacity?: number }) {
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

export default BackgroundImage;

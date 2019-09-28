import React from 'react';
import BackgroundImage from './../BackgroundImage';
import './styles.scss';

type P = {
  [x: string]: any;
  color?: string;
  size?: string | number;
  backgroundImage?: string;
  backgroundImageOpacity?: number;
  children: any;
};

function Section(props: P) {
  const {
    color,
    size,
    backgroundImage,
    backgroundImageOpacity,
    children,
    // Passed to section element
    ...otherProps
  } = props;

  return (
    <section
      className={
        'SectionComponent hero section is-block is-relative' +
        (color ? ` is-${color}` : '') +
        (size ? ` is-${size}` : '')
      }
      {...otherProps}
    >
      {backgroundImage && <BackgroundImage image={backgroundImage} opacity={backgroundImageOpacity} />}

      {props.children}
    </section>
  );
}

export default Section;

import React from 'react';
import './styles.scss';

type P = {
  [x: string]: any;
  image: string;
  size: number;
  alt: string;
};

function Avatar(props: P) {
  const { image, size, alt, ...otherProps } = props;

  return (
    <figure className={'image' + (size ? ` is-${size}x${size}` : '')}>
      <img className="is-rounded" src={image} alt={alt} {...otherProps} />
    </figure>
  );
}

export default Avatar;

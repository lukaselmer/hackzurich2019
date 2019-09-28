import React from 'react';
import FaqItem from './../FaqItem';
import './styles.scss';

type P = {
  items: { question: string; answer: string }[];
};

function Faq(props: P) {
  return (
    <>
      {props.items.map((item, index) => (
        <FaqItem question={item.question} answer={item.answer} key={index} />
      ))}
    </>
  );
}

export default Faq;

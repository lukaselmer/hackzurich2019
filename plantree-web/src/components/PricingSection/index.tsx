import React from 'react';
import { Section } from './../Section';
import { SectionHeader } from './../SectionHeader';
import { Pricing } from './../Pricing';
import './styles.scss';

type P = {
  color?: string;
  size?: string | number;
  title: string;
  subtitle: string;
};

export function PricingSection(props: P) {
  return (
    <Section color={props.color} size={props.size} id="pricing">
      <div className="PricingSection__container container">
        <SectionHeader title={props.title} subtitle={props.subtitle} centered={true} size={3} />
        <Pricing
          buttonText="Choose"
          onChoosePlan={planId => {
            // Add your own payments logic here
            alert(`You chose the plan "${planId}"`);
          }}
          items={[
            {
              id: 'monthly',
              timespan: 'Monthly',
              price: '29',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam.'
            },
            {
              id: 'yearly',
              timespan: 'Yearly',
              price: '19',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae.'
            }
          ]}
        />
      </div>
    </Section>
  );
}
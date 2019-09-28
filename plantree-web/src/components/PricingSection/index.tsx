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
              id: 'yearly',
              timespan: 'Silver',
              price: '20',
              description: 'Sponsor the plantation of 2 trees per month.'
            },
            {
              id: 'monthly',
              timespan: 'Gold',
              price: '30',
              description: 'Sponsor the plantation of 3 trees per month.'
            },
            {
              id: 'one-time',
              timespan: 'Custom',
              price: '?',
              description: 'Sponsor any amount to plant trees.'
            }
          ]}
        />
      </div>
    </Section>
  );
}

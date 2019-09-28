import React from 'react';
import { HeroSection } from './../../components/HeroSection';
import { ClientsSection } from './../../components/ClientsSection';
import { FeaturesSection } from './../../components/FeaturesSection';
import { TestimonialsSection } from './../../components/TestimonialsSection';
import { NewsletterSection } from './../../components/NewsletterSection';
import { useRouter } from './../../util/router';
import './styles.scss';
import tree from '../../images/tree.png';

export function HomePage(_props: unknown) {
  const router = useRouter();

  return (
    <>
      <HeroSection
        color="white"
        size="medium"
        title="Let's plant trees together"
        subtitle="This landing page is perfect for showing off your awesome product and driving people to sign up for a paid plan."
        buttonText="Get Started"
        image={tree}
        buttonOnClick={() => {
          router.push('/pricing');
        }}
      />
      <ClientsSection color="light" size="normal" title="" subtitle="" />
      <FeaturesSection
        color="white"
        size="medium"
        title="Features"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
      />
      <TestimonialsSection color="light" size="medium" title="Team" subtitle="" />
      <NewsletterSection
        color="white"
        size="medium"
        title="Stay in the know"
        subtitle="Receive our latest articles and feature updates"
        buttonText="Subscribe"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
      />
    </>
  );
}

import React from 'react';
import { HeroSection } from './../../components/HeroSection';
import { ClientsSection } from './../../components/ClientsSection';
import { FeaturesSection } from './../../components/FeaturesSection';
import { TestimonialsSection } from './../../components/TestimonialsSection';
import { NewsletterSection } from './../../components/NewsletterSection';
import { useRouter } from './../../util/router';
import './styles.scss';
import tree from '../../images/tree.png';
import { useAuth } from '../../util/auth';

export function HomePage(_props: unknown) {
  const router = useRouter();
  const auth = useAuth();
  const user = auth.user;

  return (
    <>
      <HeroSection
        color="white"
        size="medium"
        title="Let's plant trees for a carbon neutral future"
        subtitle="Planting trees is the cheapest and most effective way to fight the climate crisis. Let's stand together and contribute to a better future for the next generations."
        buttonText="Get Started"
        image={tree}
        buttonOnClick={() => {
          if (user) router.push('/faq');
          else router.push('/signup');
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

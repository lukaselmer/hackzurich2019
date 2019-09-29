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
import { ContentSection } from '../../components/ContentSection';

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
      <ContentSection
        color="primary"
        size="medium"
        title="The clock is 5 minutes to midnight!"
        subtitle="We need to stand together to fight climate change. There is a lot at stake for humanity, animals and nature."
      />
      <FeaturesSection
        color="white"
        size="small"
        title="Features"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
      />
      <TestimonialsSection color="primary" size="medium" title="Team" subtitle="" />
      <ClientsSection color="white" size="small" title="Partners" subtitle="" />
      <NewsletterSection
        color="primary"
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

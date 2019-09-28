import React, { useEffect } from 'react';
import DashboardSection from './../../components/DashboardSection';
import { useAuth } from './../../util/auth';
import { useRouter } from './../../util/router';
import './styles.scss';

function DashboardPage(_props: unknown) {
  const auth = useAuth();
  const router = useRouter();

  // Redirect to signin
  // if not signed in.
  useEffect(() => {
    if (auth.user === false) router.push('/signin');
  }, [auth, router]);

  const user = auth.user;
  if (!user) return null;

  return (
    <DashboardSection
      color="white"
      size="large"
      title={`Welcome back ${user.displayName || user.email}`}
      user={user}
      subtitle="Dashboard components are coming to the Divjoy library soon. For now, you can implement a custom dashboard here after exporting your code."
    />
  );
}

export default DashboardPage;

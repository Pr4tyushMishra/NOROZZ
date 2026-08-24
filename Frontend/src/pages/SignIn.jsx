import React, { useEffect } from 'react';
import { SeoHead } from '@/components/common/SeoHead';
import { SafeComponent } from '@/components/common/SafeComponent';
import { AuthFormCard } from '@/components/sections/AuthFormCard';
import { analytics } from '@/core/services/AnalyticsService';

export const SignIn = () => {
  useEffect(() => {
    analytics.pageView('/sign-in', 'Sign In — NOROZZ');
  }, []);

  return (
    <div className="min-h-[85vh] bg-surface-soft/40 flex items-center justify-center">
      <SeoHead
        title="Sign In to Your Account — NOROZZ"
        description="Log in to your NOROZZ account to manage service bookings, track pros, and view invoices."
        noIndex={true}
      />
      <SafeComponent name="SignInForm">
        <AuthFormCard mode="sign-in" />
      </SafeComponent>
    </div>
  );
};

export default SignIn;
